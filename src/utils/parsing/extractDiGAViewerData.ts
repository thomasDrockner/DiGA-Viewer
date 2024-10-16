import { ParsedBundleData } from "../parserData";
import {
  DiGAViewerData,
  DiGAEntrySummaryCategory,
  DiGAEntrySummary,
  DiGAEntryDetails,
  DiGAObservationWithParts,
  DiGAObservationPart,
} from "../recordData";
import {
  recordSummaryCategoriesPlaceholder,
  entryDetailsPlaceholder,
  entryDetailsByIdPlaceholder,
} from "../../components/mio-viewer-diga/mio-viewer-diga-placeholder-data";

export function extractDiGAViewerData(parsedBundle: ParsedBundleData): DiGAViewerData {
  const result: DiGAViewerData = {
    summaryCategories: recordSummaryCategoriesPlaceholder,
    entryDetails: entryDetailsPlaceholder,
    detailsById: entryDetailsByIdPlaceholder,
    patientDetails: {
      name: "-",
      identifier: "-",
    },
  };
  const partsLookup: Record<string, DiGAObservationPart> = {};
  const partLinks: { source: DiGAObservationWithParts; targets: string[] }[] = [];

  for (const entry of parsedBundle.entries) {
    let categoryDataDescription: string;
    let entrySummary: DiGAEntrySummary;
    let entryDetail: DiGAEntryDetails;
    let observationEntryPart: DiGAObservationPart;

    switch (entry.resourceType) {
      case "Patient":
        result.patientDetails = {
          name: entry.name,
          identifier: entry.identifier,
          birthDate: entry.birthDate,
          gender: entry.gender,
        };
        continue;
      case "Observation":
        switch (entry.profile) {
          case "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0":
            categoryDataDescription = "Bezeichnung";
            entrySummary = {
              id: entry.identifier,
              recordDate: entry.recordDate,
              heading: entry.text,
              detail: entry.value,
            };
            entryDetail = {
              id: entry.identifier,
              recordDate: entry.recordDate,
              heading: entry.text,
              detail: entry.value,
              detailType: "ObservationFree",
              categoryName: "sonstige Befunde und Ergebnisse",
            };
            break;
          case "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0":
            observationEntryPart = {
              id: entry.identifier,
              name: entry.text,
              value: entry.value,
            };
            break;
          case "https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0":
            categoryDataDescription = "Typ";
            entrySummary = {
              id: entry.identifier,
              recordDate: entry.recordDate,
              heading: "Nahrungsmittelaufnahme",
            };
            entryDetail = {
              id: entry.identifier,
              recordDate: entry.recordDate,
              heading: "Nahrungsmittelaufnahme",
              detail: entry.text,
              detailType: "NutritionIntake",
              categoryName: "Nahrung",
              parts: [],
            };
            partLinks.push({
              source: entryDetail,
              targets: entry.hasMember,
            });
            break;
          default:
            continue;
        }
        break;
      default:
        continue;
    }

    if (entrySummary === undefined) {
      partsLookup[observationEntryPart.id] = observationEntryPart;
    } else {
      let category: DiGAEntrySummaryCategory = result.summaryCategories.find(
        category => category.name === entryDetail.categoryName,
      );

      if (category === undefined) {
        category = {
          name: entryDetail.categoryName,
          dataDescription: categoryDataDescription,
          showDetails: entrySummary.detail !== undefined,
          entries: [],
        };
        result.summaryCategories.push(category);
      }
      category.entries.push(entrySummary);
      result.entryDetails.push(entryDetail);
    }

    const entryDetailsById: Record<string, DiGAEntryDetails> = {};
    for (const entryDetail of result.entryDetails) {
      entryDetailsById[entryDetail.id] = entryDetail;
    }
    result.detailsById = entryDetailsById;
  }

  for (const { source, targets } of partLinks) {
    source.parts = targets.map(partId => partsLookup[partId]);
  }

  return result;
}
