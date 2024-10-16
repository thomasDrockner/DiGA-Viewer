import {
  ParsedBundleData,
  ParsedGenericData,
  ParsedObservationData,
  ParsedPatientData,
  ParsedResourceData,
} from "../../utils/parserData";

export function parseBundleData(bundle: string): ParsedBundleData {
  // TODO hier base64 in normalenstring umwandeln

  const parsedBundle = new DOMParser().parseFromString(bundle, "application/xml");

  const walker = parsedBundle.createTreeWalker(
    parsedBundle.documentElement,
    NodeFilter.SHOW_ELEMENT,
  );

  walker.firstChild();

  const result: ParsedBundleData = {
    bundleIdentifier: "",
    bundleType: "",
    bundleTimestamp: "",
    entries: [],
  };
  const refTargets: Record<string, unknown> = {};
  let current = walker.currentNode;
  while (current !== null) {
    switch (current.nodeName) {
      case "identifier":
        result.bundleIdentifier = getIdentifierData();
        break;
      case "type":
        result.bundleType = getBundleTypeData(current);
        break;
      case "timestamp":
        result.bundleTimestamp = getTimestampData(current);
        break;
      case "entry":
        result.entries.push(processEntry(walker, refTargets));
        break;
      default:
        break;
    }
    current = walker.nextSibling();
  }
  return result;
}

function getIdentifierData(): string {
  const identifierValue = "...";
  return identifierValue;
}

function getBundleTypeData(bundleTypeNode: Node): string {
  const currentElement = bundleTypeNode as Element;
  const bundleTypeValue = currentElement.attributes.getNamedItem("value");
  if (bundleTypeValue !== null) {
    return bundleTypeValue.value;
  }
}

function getTimestampData(bundleTypeNode: Node): string {
  const currentElement = bundleTypeNode as Element;
  const timestampValue = currentElement.attributes.getNamedItem("value");
  if (timestampValue !== null) {
    return timestampValue.value;
  }
}

function processEntry(
  walker: TreeWalker,
  refTargets: Record<string, unknown>,
): ParsedResourceData {
  let current = walker.firstChild();
  let fullUrl = "";
  let resourceData: ParsedResourceData;
  while (current !== null) {
    switch (current.nodeName) {
      case "fullUrl": {
        const currentFullUrl = current as Element;
        fullUrl = currentFullUrl.attributes.getNamedItem("value")!.value;
        break;
      }
      case "resource":
        resourceData = getResourceData(walker);
        break;
      default:
        break;
    }
    current = walker.nextSibling();
  }
  refTargets[fullUrl] = resourceData;
  walker.parentNode();
  return resourceData;
}

function getResourceData(walker: TreeWalker): ParsedResourceData {
  const current = walker.firstChild();
  switch (current.nodeName) {
    case "Composition":
      return getGenericData(walker);
    case "Patient":
      return getPatientData(walker);
    case "Device":
      return getGenericData(walker);
    case "Goal":
      return getGenericData(walker);
    case "Medication":
      return getGenericData(walker);
    case "MedicationStatement":
      return getGenericData(walker);
    case "Observation":
      return getObservationData(walker);
    case "Appointment":
      return getGenericData(walker);
    case "Questionnaire":
      return getGenericData(walker);
    case "QuestionnaireResponse":
      return getGenericData(walker);
    default:
      console.log("unerwarteter resource type:", current.nodeName);
      return getGenericData(walker);
  }
}

function getPatientData(walker: TreeWalker): ParsedPatientData {
  const parsedData: ParsedPatientData = {
    resourceType: "Patient",
    identifier: "-",
    name: "-",
  };
  let current = walker.firstChild();
  while (current !== null) {
    switch (current.nodeName) {
      case "identifier": {
        current = walker.firstChild();
        let system = "unbekannt";
        while (current !== null) {
          if (current.nodeName === "system") {
            const currentSystem = current as Element;
            system = currentSystem.attributes.getNamedItem("value")!.value;
          }
          if (current.nodeName === "value") {
            const currentIdentifier = current as Element;
            if (system === "http://fhir.de/NamingSystem/gkv/kvk-versichertennummer") {
              parsedData.identifier =
                currentIdentifier.attributes.getNamedItem("value")!.value;
            }
          }
          current = walker.nextSibling();
        }
        walker.parentNode();
        break;
      }
      case "name":
        current = walker.firstChild();
        while (current !== null) {
          if (current.nodeName === "text") {
            const currentName = current as Element;
            parsedData.name = currentName.attributes.getNamedItem("value")!.value;
          }
          current = walker.nextSibling();
        }
        walker.parentNode();
        break;

      case "gender": {
        const currentGender = walker.currentNode as Element;
        parsedData.gender = currentGender.attributes.getNamedItem("value")!.value;
        break;
      }
      case "birthDate": {
        const currentBirthDate = walker.currentNode as Element;
        parsedData.birthDate = currentBirthDate.attributes.getNamedItem("value")!.value;
        break;
      }
      default:
        break;
    }
    current = walker.nextSibling();
  }
  walker.parentNode();
  walker.parentNode();
  return parsedData;
}

function getGenericData(walker: TreeWalker): ParsedGenericData {
  const parsedData: ParsedGenericData = {
    resourceType: "-",
    profile: "unbekannt",
    identifier: "unbekannt",
  };
  let current = walker.firstChild();
  while (current !== null) {
    switch (current.nodeName) {
      case "meta":
        current = walker.firstChild();
        while (current !== null) {
          if (current.nodeName === "profile") {
            const currentMeta = current as Element;
            parsedData.profile = currentMeta.attributes.getNamedItem("value")!.value;
          }
          current = walker.nextSibling();
        }
        walker.parentNode();
        break;
      case "identifier":
        current = walker.firstChild();
        while (current !== null) {
          if (current.nodeName === "value") {
            const currentIdentifier = current as Element;
            parsedData.identifier =
              currentIdentifier.attributes.getNamedItem("value")!.value;
          }
          current = walker.nextSibling();
        }
        walker.parentNode();
        break;
      default:
        break;
    }
    current = walker.nextSibling();
  }
  walker.parentNode();
  walker.parentNode();
  return parsedData;
}

function getObservationData(walker: TreeWalker) {
  const parsedData: ParsedObservationData = {
    resourceType: "Observation",
    profile: "unbekannt",
    identifier: "unbekannt",
    status: "unbekannt",
    recordDate: "unbekannt",
    text: "unbekannt",
    subject: "unbekannt",
    performer: "unbekannt",
    value: "unbekannt",
    hasMember: [],
  };
  let current = walker.firstChild();
  while (current !== null) {
    switch (current.nodeName) {
      case "meta":
        current = walker.firstChild();
        while (current !== null) {
          if (current.nodeName === "profile") {
            const currentMeta = current as Element;
            parsedData.profile = currentMeta.attributes.getNamedItem("value")!.value;
          }
          current = walker.nextSibling();
        }
        walker.parentNode();
        break;
      case "identifier":
        current = walker.firstChild();
        while (current !== null) {
          if (current.nodeName === "value") {
            const currentIdentifier = current as Element;
            parsedData.identifier =
              currentIdentifier.attributes.getNamedItem("value")!.value;
          }
          current = walker.nextSibling();
        }
        walker.parentNode();
        break;
      case "status": {
        current = walker.currentNode;
        const currentStatus = current as Element;
        parsedData.status = currentStatus.attributes.getNamedItem("value")!.value;
        break;
      }
      case "code":
        current = walker.firstChild();
        while (current !== null) {
          if (current.nodeName === "text") {
            const currentText = current as Element;
            parsedData.text = currentText.attributes.getNamedItem("value")!.value;
          } else if (current.nodeName === "coding") {
            current = walker.firstChild();
            while (current !== null) {
              if (current.nodeName === "display") {
                const currentDisplay = current as Element;
                parsedData.text =
                  currentDisplay.attributes.getNamedItem("value")!.value;
              }
              current = walker.nextSibling();
            }
            walker.parentNode();
          }
          current = walker.nextSibling();
        }
        walker.parentNode();
        break;
      case "subject":
        current = walker.firstChild();
        while (current !== null) {
          if (current.nodeName === "reference") {
            const currentSubject = current as Element;
            parsedData.subject = currentSubject.attributes.getNamedItem("value")!.value;
          }
          current = walker.nextSibling();
        }
        walker.parentNode();
        break;
      case "effectiveInstant": {
        current = walker.currentNode;
        const currentRecordDate = current as Element;
        parsedData.recordDate =
          currentRecordDate.attributes.getNamedItem("value")!.value;
        break;
      }
      case "effectiveDateTime": {
        current = walker.currentNode;
        const currentDateTime = current as Element;
        parsedData.recordDate = currentDateTime.attributes.getNamedItem("value")!.value;
        break;
      }
      case "performer":
        current = walker.firstChild();
        while (current !== null) {
          if (current.nodeName === "reference") {
            const currentPerformer = current as Element;
            parsedData.performer =
              currentPerformer.attributes.getNamedItem("value")!.value;
          }
          current = walker.nextSibling();
        }
        walker.parentNode();
        break;
      case "valueInteger": {
        current = walker.currentNode;
        const currentValue = current as Element;
        parsedData.value = currentValue.attributes.getNamedItem("value")!.value;
        break;
      }
      case "valueQuantity": {
        let quantity = "";
        current = walker.firstChild();
        while (current !== null) {
          if (current.nodeName === "value") {
            const currentValue = current as Element;
            quantity = currentValue.attributes.getNamedItem("value")!.value + quantity;
          } else if (current.nodeName === "unit") {
            const currentValue = current as Element;
            quantity =
              quantity + " " + currentValue.attributes.getNamedItem("value")!.value;
          }
          current = walker.nextSibling();
        }
        parsedData.value = quantity;
        walker.parentNode();
        break;
      }
      case "hasMember":
        current = walker.firstChild();
        while (current !== null) {
          if (current.nodeName === "reference") {
            const currentHasMember = current as Element;
            parsedData.hasMember.push(
              currentHasMember.attributes.getNamedItem("value")!.value,
            );
          }
          current = walker.nextSibling();
        }
        walker.parentNode();
        break;
      default:
        break;
    }
    current = walker.nextSibling();
  }
  walker.parentNode();
  walker.parentNode();
  return parsedData;
}
