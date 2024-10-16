export type ParsedBundleData = {
  bundleIdentifier: string;
  bundleType: string;
  bundleTimestamp: string;

  entries: ParsedResourceData[];
};

export type ParsedResourceData =
  | ParsedObservationData
  | ParsedPatientData
  | ParsedGenericData;

export type ParsedObservationData = {
  resourceType: "Observation";
  profile: string;
  identifier: string;
  status: string;
  recordDate: string;
  text: string;
  subject: string;
  performer: string;
  value: string;
  hasMember: string[];
};

export type ParsedPatientData = {
  resourceType: "Patient";
  identifier: string;
  name: string;
  gender?: string;
  birthDate?: string;
};

export type ParsedGenericData = {
  resourceType: "-";
  profile: string;
  identifier: string;
};
