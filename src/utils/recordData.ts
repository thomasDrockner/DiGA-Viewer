export type DiGAViewerData = {
  summaryCategories: DiGAEntrySummaryCategory[];
  entryDetails: DiGAEntryDetails[];
  detailsById: Record<string, DiGAEntryDetails>;
  patientDetails: DiGAPatientDetails;
};

export type DiGAEntrySummaryCategory = {
  name: string;
  dataDescription: string;
  showDetails: boolean;
  entries: DiGAEntrySummary[];
};

export type DiGAEntrySummary = {
  id: string;
  recordDate: string;
  heading: string;
  detail?: string;
};

// ====================================
// detail types

export type DiGAEntryDetails =
  | DiGAQuestionnaireDetails
  | DiGAVitalSignDetails
  | DiGAObservationDetails
  | DiGANutritionDetails
  | DiGAEnvironmentalFactorDetails
  | DiGAGoalDetails
  | DiGAAppointmentDetails
  | DiGADiaryEntryDetails;

export type DiGAObservationPart = DiGANutritionDetailsPart;

export type DiGAObservationWithParts = Extract<
  DiGAEntryDetails,
  { parts: DiGAObservationPart[] }
>;

export type DiGAQuestionnaireDetails = DiGAEntrySummary & {
  detailType: "Questionnaire";
  categoryName: "Fragebögen";
  publisher: string;
  purpose: string;
  questionData: {
    question: string;
    answer: string;
  }[];
};

export type DiGAVitalSignDetails = DiGAEntrySummary & {
  detailType: "VitalSign";
  categoryName: "Vitalzeichen und Körpermaße";
  performer: string;
  measurements: {
    name: string;
    value: string;
  }[];
};

export type DiGAObservationDetails = DiGAEntrySummary & {
  detailType: "ObservationFree";
  categoryName: "sonstige Befunde und Ergebnisse";
};

export type DiGANutritionDetails = DiGAEntrySummary & {
  detailType: "NutritionIntake";
  categoryName: "Nahrung";
  parts: DiGANutritionDetailsPart[];
};

export type DiGANutritionDetailsPart = {
  id: string;
  name: string;
  value: string;
};

export type DiGAEnvironmentalFactorDetails = DiGAEntrySummary & {
  detailType: "EnvironmentalFactor";
  categoryName: "Umweltfaktor";
  performer: string;
};

export type DiGAGoalDetails = DiGAEntrySummary & {
  detailType: "Goal";
  categoryName: "Ziele und Pläne";
  description: string;
  expressedBy: string;
};

export type DiGAAppointmentDetails = DiGAEntrySummary & {
  detailType: "Appointment";
  categoryName: "Termine";
  endDate: string;
  participant: {
    actor: string;
    status: string;
  }[];
};

export type DiGADiaryEntryDetails = DiGAEntrySummary & {
  detailType: "DiaryEntry";
  categoryName: "Patientenberichte";
  hasMember: {
    id: string;
    name: string;
    value: string;
  }[];
};

export type DiGAPatientDetails = {
  name: string;
  birthDate?: string;
  identifier: string;
  gender?: string;
};
