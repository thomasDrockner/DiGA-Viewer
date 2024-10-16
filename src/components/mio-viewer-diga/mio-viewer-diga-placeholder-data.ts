import { DiGAEntrySummaryCategory, DiGAEntryDetails } from "../../components";

export const recordSummaryCategoriesPlaceholder: DiGAEntrySummaryCategory[] = [
  {
    name: "Fragebögen",
    dataDescription: "Bezeichnung",
    showDetails: true,
    entries: [
      {
        id: "fragebogen1",
        recordDate: "02.06.2024",
        heading: "PreGPAQ",
        detail:
          "Erfasst durchschnittliche körperliche Aktivität in den Bereichen Arbeit, Freizeit und Transport in Minuten",
      },
      {
        id: "fragebogen2",
        recordDate: "02.07.2024",
        heading: "PreGPAQ2",
        detail:
          "Erfasst durchschnittliche körperliche Aktivität in den Bereichen Arbeit, Freizeit und Transport in Minuten",
      },
    ],
  },
  {
    name: "Vitalzeichen und Körpermaße",
    dataDescription: "Typ",
    showDetails: true,
    entries: [
      {
        id: "blutdruck1",
        recordDate: "02.06.2024",
        heading: "Blutdruck",
        detail: "128/87 mmHg",
      },
      {
        id: "blutdruck2",
        recordDate: "02.07.2024",
        heading: "Blutdruck",
        detail: "126/85 mmHg",
      },
      {
        id: "herzfrequenz1",
        recordDate: "02.06.2024",
        heading: "Herzfrequenz",
        detail: "81 /min",
      },
    ],
  },
  {
    name: "Umweltfaktoren",
    dataDescription: "Bezeichnung",
    showDetails: true,
    entries: [
      {
        id: "umweltfaktor1",
        recordDate: "02.06.2024",
        heading: "Umweltfaktor",
        detail: "home",
      },
    ],
  },
  {
    name: "Ziele und Pläne",
    dataDescription: "Typ",
    showDetails: true,
    entries: [
      {
        id: "ziel1",
        recordDate: "02.06.2024",
        heading: "Ziel",
        detail: "aktiv",
      },
    ],
  },
  {
    name: "Termine",
    dataDescription: "Typ",
    showDetails: true,
    entries: [
      {
        id: "termin1",
        recordDate: "05.18.2024",
        heading: "nextModule krankheitsbild",
        detail: "vorgeschlagen",
      },
      {
        id: "termin2",
        recordDate: "05.22.2024",
        heading: "nextModule tagebuch",
        detail: "vorgeschlagen",
      },
      {
        id: "termin3",
        recordDate: "05.25.2024",
        heading: "nextModule treatment",
        detail: "vorgeschlagen",
      },
    ],
  },
  {
    name: "Patientenberichte",
    dataDescription: "Typ",
    showDetails: true,
    entries: [
      {
        id: "tagebuch1",
        recordDate: "02.06.2024",
        heading: "Tagebucheintrag",
        detail:
          "Tracking der Blutdruckwerte, Verwendung zur späteren Verlaufskontrolle inkl. individueller Rückmeldung, Abbildung im medizinischen Bericht (Datenübersicht für medizinisches Fachpersonal)",
      },
      {
        id: "tagebuch2",
        recordDate: "02.06.2024",
        heading: "Tagebucheintrag",
        detail:
          "Zusammenfassung mehrerer Einzelwerte, die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren",
      },
    ],
  },
];

export const entryDetailsPlaceholder: DiGAEntryDetails[] = [
  {
    detailType: "Questionnaire",
    categoryName: "Fragebögen",
    id: "fragebogen1",
    recordDate: "02.06.2024",
    heading: "PreGPAQ",
    detail:
      "Erfasst durchschnittliche körperliche Aktivität in den Bereichen Arbeit, Freizeit und Transport in Minuten",
    publisher: "mementor DE GmbH",
    purpose: "Unterstützung zur Behandlung von Hypertonie",
    questionData: [
      {
        question:
          "Beinhaltet deine Arbeit intensive körperliche Aktivität, bei der Atmung und Puls stark zunehmen, wie z.B. schwere Lastentragen oder Heben, Graben oder Bauarbeiten, mit einer Dauer von mindestens zehn Minuten?",
        answer: "no",
      },
      {
        question:
          "An wie vielen Tagen in einer gewöhnlichen Woche betätigst du dich bei der Arbeit körperlich intensiv?",
        answer: "",
      },
      {
        question:
          "Beinhaltet deine Arbeit intensive körperliche Aktivität, bei der Atmung und Puls stark zunehmen, wie z.B. schwere Lastentragen oder Heben, Graben oder Bauarbeiten, mit einer Dauer von mindestens zehn Minuten?",
        answer: "no",
      },
      {
        question:
          "Beinhaltet deine Arbeit intensive körperliche Aktivität, bei der Atmung und Puls stark zunehmen, wie z.B. schwere Lastentragen oder Heben, Graben oder Bauarbeiten, mit einer Dauer von mindestens zehn Minuten?",
        answer: "no",
      },
      {
        question:
          "Beinhaltet deine Arbeit intensive körperliche Aktivität, bei der Atmung und Puls stark zunehmen, wie z.B. schwere Lastentragen oder Heben, Graben oder Bauarbeiten, mit einer Dauer von mindestens zehn Minuten?",
        answer: "no",
      },
      {
        question:
          "Beinhaltet deine Arbeit intensive körperliche Aktivität, bei der Atmung und Puls stark zunehmen, wie z.B. schwere Lastentragen oder Heben, Graben oder Bauarbeiten, mit einer Dauer von mindestens zehn Minuten?",
        answer: "no",
      },
    ],
  },
  {
    detailType: "Questionnaire",
    categoryName: "Fragebögen",
    id: "fragebogen2",
    recordDate: "02.07.2024",
    heading: "PreGPAQ2",
    detail:
      "Erfasst durchschnittliche körperliche Aktivität in den Bereichen Arbeit, Freizeit und Transport in Minuten",
    publisher: "mementor DE GmbH",
    purpose: "Unterstützung zur Behandlung von Hypertonie",
    questionData: [
      {
        question:
          "Beinhaltet deine Arbeit intensive körperliche Aktivität, bei der Atmung und Puls stark zunehmen, wie z.B. schwere Lastentragen oder Heben, Graben oder Bauarbeiten, mit einer Dauer von mindestens zehn Minuten?",
        answer: "no",
      },
      {
        question:
          "Beinhaltet deine Arbeit intensive körperliche Aktivität, bei der Atmung und Puls stark zunehmen, wie z.B. schwere Lastentragen oder Heben, Graben oder Bauarbeiten, mit einer Dauer von mindestens zehn Minuten?",
        answer: "no",
      },
      {
        question:
          "Beinhaltet deine Arbeit intensive körperliche Aktivität, bei der Atmung und Puls stark zunehmen, wie z.B. schwere Lastentragen oder Heben, Graben oder Bauarbeiten, mit einer Dauer von mindestens zehn Minuten?",
        answer: "no",
      },
    ],
  },
  {
    detailType: "VitalSign",
    categoryName: "Vitalzeichen und Körpermaße",
    id: "blutdruck1",
    recordDate: "02.06.2024",
    heading: "Blutdruck",
    detail: "128/87 mmHg",
    performer: "Max Mustermann",
    measurements: [
      {
        name: "Systolischer Blutdruck",
        value: "128 mmHg",
      },
      {
        name: "Diastolischer Blutdruck",
        value: "87 mmHg",
      },
    ],
  },
  {
    detailType: "VitalSign",
    categoryName: "Vitalzeichen und Körpermaße",
    id: "blutdruck2",
    recordDate: "02.07.2024",
    heading: "Blutdruck",
    detail: "126/85 mmHg",
    performer: "Max Mustermann",
    measurements: [
      {
        name: "Systolischer Blutdruck",
        value: "126 mmHg",
      },
      {
        name: "Diastolischer Blutdruck",
        value: "85 mmHg",
      },
    ],
  },
  {
    detailType: "VitalSign",
    categoryName: "Vitalzeichen und Körpermaße",
    id: "herzfrequenz1",
    recordDate: "02.07.2024",
    heading: "Herzfrequenz",
    detail: "81 /min",
    performer: "Max Mustermann",
    measurements: [
      {
        name: "Herzfrequenz",
        value: "81 /min",
      },
    ],
  },
  {
    detailType: "EnvironmentalFactor",
    categoryName: "Umweltfaktor",
    id: "umweltfaktor1",
    recordDate: "02.06.2024",
    heading: "Umweltfaktor",
    detail: "home",
    performer: "Max Mustermann",
  },
  {
    detailType: "Goal",
    categoryName: "Ziele und Pläne",
    id: "ziel1",
    recordDate: "02.06.2024",
    heading: "Ziel",
    detail: "aktiv",
    description: "false",
    expressedBy: "Max Mustermann",
  },
  {
    detailType: "Appointment",
    categoryName: "Termine",
    id: "termin1",
    recordDate: "05.18.2024",
    heading: "nextModule krankheitsbild",
    detail: "vorgeschlagen",
    endDate: "05.18.2024",
    participant: [
      {
        actor: "Max Mustermann",
        status: "akzeptiert",
      },
    ],
  },
  {
    detailType: "Appointment",
    categoryName: "Termine",
    id: "termin2",
    recordDate: "05.22.2024",
    heading: "nextModule tagebuch",
    detail: "vorgeschlagen",
    endDate: "05.22.2024",
    participant: [
      {
        actor: "Max Mustermann",
        status: "akzeptiert",
      },
    ],
  },
  {
    detailType: "Appointment",
    categoryName: "Termine",
    id: "termin3",
    recordDate: "05.25.2024",
    heading: "nextModule treatment",
    detail: "vorgeschlagen",
    endDate: "05.25.2024",
    participant: [
      {
        actor: "Max Mustermann",
        status: "akzeptiert",
      },
    ],
  },
  {
    detailType: "DiaryEntry",
    categoryName: "Patientenberichte",
    id: "tagebuch1",
    recordDate: "02.06.2024",
    heading: "Tagebucheintrag",
    detail:
      "Tracking der Blutdruckwerte, Verwendung zur späteren Verlaufskontrolle inkl. individueller Rückmeldung, Abbildung im medizinischen Bericht (Datenübersicht für medizinisches Fachpersonal)",
    hasMember: [
      {
        id: "blutdruck1",
        name: "Blutdruck",
        value: "128/87 mmHg",
      },
      {
        id: "herzfrequenz1",
        name: "Herzfrequenz",
        value: "81 /min",
      },
      {
        id: "umweltfaktor1",
        name: "Umweltfaktor",
        value: "home",
      },
    ],
  },
  {
    detailType: "DiaryEntry",
    categoryName: "Patientenberichte",
    id: "tagebuch2",
    recordDate: "02.06.2024",
    heading: "Tagebucheintrag",
    detail:
      "Zusammenfassung mehrerer Einzelwerte, die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren",
    hasMember: [
      {
        id: "geringIntens1",
        name: "Bewegung - geringe Intensität",
        value: "20",
      },
      {
        id: "mittelIntens1",
        name: "Bewegung - mittlere Intensität",
        value: "20",
      },
      {
        id: "hoheIntens1",
        name: "Bewegung - hohe Intensität",
        value: "20",
      },
      {
        id: "schritte1",
        name: "Bewegung - Schritte",
        value: "8000",
      },
      {
        id: "dash1",
        name: "Nahrungsmitteleinnahme",
        value: "5 (DASH-Score)",
      },
      {
        id: "zigaretten1",
        name: "Genussmittel - Anzahl Zigaretten",
        value: "0",
      },
      {
        id: "alkohol1",
        name: "Genussmittel - Portionen Alkohol",
        value: "0",
      },
      {
        id: "achtsamkeit1",
        name: "Entspannung - Achtsamkeit",
        value: "5",
      },
      {
        id: "nahrung1",
        name: "Nahrungsmittelaufnahme",
        value: "Anteile der Ernährung",
      },
    ],
  },
];

const entryDetailsByIdPlaceholder: Record<string, DiGAEntryDetails> = {};
for (const entryDetail of entryDetailsPlaceholder) {
  entryDetailsByIdPlaceholder[entryDetail.id] = entryDetail;
}

export { entryDetailsByIdPlaceholder };

export const bundlePlaceholder = `<Bundle xmlns="http://hl7.org/fhir">
<meta>
    <versionId value="1.0"></versionId>
    <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
    <profile value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Bundle|1.1.0"></profile>
</meta>
<identifier>
    <type>
        <coding>
            <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
            <version value="2.9"></version>
            <code value="RI"></code>
            <display value="Resource identifier"></display>
        </coding>
    </type>
    <system value="urn:ietf:rfc:3986"></system>
    <value value="urn:uuid:58b9e983-6529-4f74-a154-481ae9954271"></value>
</identifier>
<type value="document"></type>
<timestamp value="2024-06-06T14:09:16+02:00"></timestamp>
<entry>
    <fullUrl value="urn:uuid:100890c6-5e25-410e-8705-6cd90850c8f6"></fullUrl>
    <resource>
        <Composition xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Composition|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">actensio Nutzerdaten</div>
            </text>
            <extension
                url="https://fhir.kbv.de/StructureDefinition/KBV_EX_MIO_DIGA_Betrachtungszeitraum">
                <valuePeriod>
                    <start value="2024-05-15T11:56:18+02:00"></start>
                    <end value="2024-06-06T14:09:16+02:00"></end>
                </valuePeriod>
            </extension>
            <status value="final"></status>
            <type>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="53576-5"></code>
                    <display value="Personal health monitoring report Document"></display>
                </coding>
            </type>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <date value="2024-06-06T14:09:16+02:00"></date>
            <author>
                <reference value="urn:uuid:d52de73f-d723-426d-b6e4-d95d35daac34"></reference>
            </author>
            <title value="DiGA-Export"></title>
            <section>
                <title value="Frageb&#xf6;gen"></title>
                <code>
                    <coding>
                        <system
                            value="https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_DIGA_Section_Codes"></system>
                        <version value="1.1.0"></version>
                        <code value="SectionFrageboegen"></code>
                        <display value="Bereich Frageb&#xf6;gen"></display>
                    </coding>
                </code>
                <entry>
                    <reference value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:db43558c-abdf-4c1d-8c2f-302fe959dea8"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:9ceba3a0-8c22-449d-842f-fdd0d1d1ada7"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:48772957-b4be-459f-a26a-03c41210835e"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:22189656-4fb9-4655-a0c1-45cb123daf85"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:d907b272-538c-49f4-8c8d-a6124737de32"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:f9614659-1001-4136-b08d-13220452f19e"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:304b5cf6-2102-4944-9104-3a02e72c48ce"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:d326c2f4-597a-4a02-9360-2b031fe218ea"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:7db575dd-db09-4d5f-9107-c229fb85b83b"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:1a53d20d-6258-4cbd-a705-60b37219d040"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:bcf0de4f-7f77-4531-b9b9-9edc4cf15038"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:e8a60781-0b91-400c-9f8f-0ebcfc6e15a7"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:bf2f61ba-6378-4b94-9913-d0326e77703e"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:8c1eb793-c423-4659-9a8d-7319853bcb19"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:f9c4bb86-91a8-4858-8c75-f78ba3a8990d"></reference>
                </entry>
            </section>
            <section>
                <title value="Befunde und Ergebnisse"></title>
                <code>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="423100009"></code>
                        <display value="Results section (record artifact)"></display>
                    </coding>
                </code>
                <entry>
                    <reference value="urn:uuid:1d25c1b9-5e47-42cc-8ca6-dd1b1f688bdd"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:1d25c1b9-5e47-42cc-8ca6-dd1b1f688bdd"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:ccad0cff-0895-44e2-b51b-bbcae17126bd"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:ccad0cff-0895-44e2-b51b-bbcae17126bd"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:ad54c40f-4727-4a77-bd6a-a0ce644af3db"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:ad54c40f-4727-4a77-bd6a-a0ce644af3db"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:558217f3-8dea-4c2d-8738-78184b0324aa"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:558217f3-8dea-4c2d-8738-78184b0324aa"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:5be16dcb-9e34-46e7-af85-fdcba056081e"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:5be16dcb-9e34-46e7-af85-fdcba056081e"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:166ff54c-f0bd-4593-a01b-b9b3b32fe602"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:166ff54c-f0bd-4593-a01b-b9b3b32fe602"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:112b9798-e593-40fe-9e8d-f14c37aa935b"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:112b9798-e593-40fe-9e8d-f14c37aa935b"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:430a2b39-e856-4435-a6a6-252051babb56"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:430a2b39-e856-4435-a6a6-252051babb56"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:0ef23d0c-6a89-4b43-81ee-5015ea4f9547"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:0ef23d0c-6a89-4b43-81ee-5015ea4f9547"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:7f8728ad-f25d-46e1-923b-924457253a6c"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:7f8728ad-f25d-46e1-923b-924457253a6c"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:0bbaae2a-bf30-493c-a99a-f3290abab3ec"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:0bbaae2a-bf30-493c-a99a-f3290abab3ec"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:24b255c0-3e3c-4e74-8dbb-4b4df3971d78"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:24b255c0-3e3c-4e74-8dbb-4b4df3971d78"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:078cf400-1e87-41a3-be6e-d99ce2ce5edb"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:078cf400-1e87-41a3-be6e-d99ce2ce5edb"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:c6908c90-6efe-498c-90bb-786bac818f57"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:c6908c90-6efe-498c-90bb-786bac818f57"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:1eda8556-9e62-40ea-9fc3-3a92a5d2a6c2"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:1eda8556-9e62-40ea-9fc3-3a92a5d2a6c2"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:c58a1c93-61fc-421f-9f81-cf3af7db0a46"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:c58a1c93-61fc-421f-9f81-cf3af7db0a46"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:1a4e209a-83f1-43bf-9a64-73ee75310877"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:1a4e209a-83f1-43bf-9a64-73ee75310877"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:fc443763-6fee-4938-b37d-454d7a1af3a4"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:fc443763-6fee-4938-b37d-454d7a1af3a4"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:0f9f02e8-9c0e-44e5-a33e-430f55b3c8c7"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:0f9f02e8-9c0e-44e5-a33e-430f55b3c8c7"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:1f8b5fb6-7970-4d4b-a03a-9526fb703d42"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:1f8b5fb6-7970-4d4b-a03a-9526fb703d42"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:fd9af2fb-5080-47f3-96ee-a91c6ad328b6"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:fd9af2fb-5080-47f3-96ee-a91c6ad328b6"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:4a2d8185-0231-402a-8ccc-186501727e5b"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:4a2d8185-0231-402a-8ccc-186501727e5b"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:92bc508a-f533-42a1-8911-6565968218b3"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:92bc508a-f533-42a1-8911-6565968218b3"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:044d09b8-a4d7-4c94-963a-2b04c558881d"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:044d09b8-a4d7-4c94-963a-2b04c558881d"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:80d7aa11-e709-4757-b606-3a40197b8279"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:80d7aa11-e709-4757-b606-3a40197b8279"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:b83b0fe9-69af-46da-bcc4-b13c34e75927"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:b83b0fe9-69af-46da-bcc4-b13c34e75927"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:5b7d43f1-8b59-4440-9e0e-f813ca9e6db4"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:5b7d43f1-8b59-4440-9e0e-f813ca9e6db4"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:ee578275-942f-4965-a107-b09b77cda978"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:ee578275-942f-4965-a107-b09b77cda978"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:e166b686-2325-43da-aced-1c9e98d55e99"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:e166b686-2325-43da-aced-1c9e98d55e99"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:f45a871b-4eed-4f35-95e2-4d5fea8f15bb"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:f45a871b-4eed-4f35-95e2-4d5fea8f15bb"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:8b69582b-bda1-4296-bf3d-d62a6bf2005f"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:8b69582b-bda1-4296-bf3d-d62a6bf2005f"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:3cf7ba53-e64b-4bd7-a2ff-52970a940432"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:3cf7ba53-e64b-4bd7-a2ff-52970a940432"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:9c9941e7-e0ce-4149-9c27-d3a2863cbdfb"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:9c9941e7-e0ce-4149-9c27-d3a2863cbdfb"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:f962accd-a8bb-4272-9ff9-98b71c3684f8"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:f962accd-a8bb-4272-9ff9-98b71c3684f8"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:2181f09e-4013-4ad2-bdfa-4feae0d5b787"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:2181f09e-4013-4ad2-bdfa-4feae0d5b787"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:3bcd5b67-1643-477b-9754-dcb361093f1c"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:3bcd5b67-1643-477b-9754-dcb361093f1c"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:5d582d4d-025f-4e27-9796-8086d8a26be5"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:5d582d4d-025f-4e27-9796-8086d8a26be5"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:47dd6c71-65ac-47db-a2f8-8d911fda6d21"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:47dd6c71-65ac-47db-a2f8-8d911fda6d21"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:0f0b8bdf-3324-43d6-bfcd-872a52259d46"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:0f0b8bdf-3324-43d6-bfcd-872a52259d46"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:7217cc4c-dbd9-4962-83f4-38899e709636"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:7217cc4c-dbd9-4962-83f4-38899e709636"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:d4bb6747-7355-4df8-b86a-563eb41b0149"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:d4bb6747-7355-4df8-b86a-563eb41b0149"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:bf56cf34-53ea-4240-ac90-d44aba26afc8"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:bf56cf34-53ea-4240-ac90-d44aba26afc8"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:0435244b-db09-407c-988a-18ef89cccd50"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:0435244b-db09-407c-988a-18ef89cccd50"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:eb92c207-170c-458a-b28f-1372470ca495"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:eb92c207-170c-458a-b28f-1372470ca495"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:8fe56b9e-8427-41af-8d0d-f0df2e54ec21"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:8fe56b9e-8427-41af-8d0d-f0df2e54ec21"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:24371065-ec12-4969-ae91-348e4a198575"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:24371065-ec12-4969-ae91-348e4a198575"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:89d42d9e-e496-4795-b4cb-ccd6ba553afb"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:89d42d9e-e496-4795-b4cb-ccd6ba553afb"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:8563cdef-1344-47fc-9818-294641975366"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:8563cdef-1344-47fc-9818-294641975366"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:ebf190c7-3050-412b-b116-6545c389f819"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:ebf190c7-3050-412b-b116-6545c389f819"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:98db7530-ec28-42d2-8f74-43da534824ff"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:98db7530-ec28-42d2-8f74-43da534824ff"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:16120e02-c192-44ff-9e22-91bfcbc5e9c2"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:16120e02-c192-44ff-9e22-91bfcbc5e9c2"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:eced2045-5fc8-4c42-a602-c3e62b57321a"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:eced2045-5fc8-4c42-a602-c3e62b57321a"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:9942fb1b-e476-4425-a45d-0c9e24dc653a"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:9942fb1b-e476-4425-a45d-0c9e24dc653a"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:ec36a016-3cae-43af-97ab-98b7e2222792"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:ec36a016-3cae-43af-97ab-98b7e2222792"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:8fa98cd6-3d0a-46e7-934d-55972ee52c01"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:8fa98cd6-3d0a-46e7-934d-55972ee52c01"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:1367856b-00df-49bd-b871-079066c1799d"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:1367856b-00df-49bd-b871-079066c1799d"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:0b7e006e-520f-432a-8949-437b2707a211"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:0b7e006e-520f-432a-8949-437b2707a211"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:87b58868-d9fb-4f1c-846e-619069dd71b1"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:87b58868-d9fb-4f1c-846e-619069dd71b1"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:8970fe86-417a-4dbd-8868-e05bb2c06fb3"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:8970fe86-417a-4dbd-8868-e05bb2c06fb3"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:d6ad9180-0af2-4c92-959c-e53bc2b621c1"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:d6ad9180-0af2-4c92-959c-e53bc2b621c1"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:81fb021f-60da-48a0-9bb0-185550db1015"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:81fb021f-60da-48a0-9bb0-185550db1015"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:d8d0ce4d-3780-4c68-ab90-50379bdad169"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:d8d0ce4d-3780-4c68-ab90-50379bdad169"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:3fabb837-fd3b-4365-945e-6b7e1073a0d9"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:3fabb837-fd3b-4365-945e-6b7e1073a0d9"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:952ffb3d-d51c-4fc7-bb5e-70c143d4ab2d"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:952ffb3d-d51c-4fc7-bb5e-70c143d4ab2d"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:5fd2b0ff-74ea-4cb6-b760-37a6e1a54a25"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:5fd2b0ff-74ea-4cb6-b760-37a6e1a54a25"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:787e0537-b38d-49bc-a713-55a201624afa"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:787e0537-b38d-49bc-a713-55a201624afa"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:08283fc8-a98c-4919-8eb6-627dde75dca3"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:08283fc8-a98c-4919-8eb6-627dde75dca3"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:9176eb08-fca4-4196-aaff-072368314dd8"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:9176eb08-fca4-4196-aaff-072368314dd8"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:cf267525-b006-4988-b719-26ac3f57e1bb"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:cf267525-b006-4988-b719-26ac3f57e1bb"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:1a2de4ed-0374-49c6-b3f9-5415c5600673"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:1a2de4ed-0374-49c6-b3f9-5415c5600673"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:3eddadb5-d42b-4a77-a4f3-acf98ae738be"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:3eddadb5-d42b-4a77-a4f3-acf98ae738be"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:03040492-a5c3-4aa9-a034-71c1e825bf37"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:03040492-a5c3-4aa9-a034-71c1e825bf37"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:91d0ac96-3d4f-4876-8df1-be0d81126a91"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:91d0ac96-3d4f-4876-8df1-be0d81126a91"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:c226ee10-945a-4193-91a8-ef9da3abcf82"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:c226ee10-945a-4193-91a8-ef9da3abcf82"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:ed6b1402-c80f-48f0-9d37-5e0b131f4d68"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:ed6b1402-c80f-48f0-9d37-5e0b131f4d68"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:867ecc19-4f90-4426-b46a-74162c87096b"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:867ecc19-4f90-4426-b46a-74162c87096b"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:07f3eb76-57a7-40b8-8bb9-4700951d0ff8"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:07f3eb76-57a7-40b8-8bb9-4700951d0ff8"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:ab2d818b-5c9d-4c8a-b43c-be5e3f8a239a"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:ab2d818b-5c9d-4c8a-b43c-be5e3f8a239a"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:4a4558db-03fd-470d-beb3-2edb4afff07a"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:4a4558db-03fd-470d-beb3-2edb4afff07a"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:9faba3b6-a5fb-4ddd-ae62-672f9a715457"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:9faba3b6-a5fb-4ddd-ae62-672f9a715457"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:6dd28e99-aea2-4587-9608-98d55a325f1d"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:6dd28e99-aea2-4587-9608-98d55a325f1d"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:e9fad078-cfd7-4c6d-b1e8-875adc133365"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:e9fad078-cfd7-4c6d-b1e8-875adc133365"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:a3b86667-f280-4e4e-bada-94c988558a9d"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:a3b86667-f280-4e4e-bada-94c988558a9d"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:b5af0a8a-006b-41a6-bb0f-e0457f90603d"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:b5af0a8a-006b-41a6-bb0f-e0457f90603d"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:a3365da4-76e8-496d-b173-ca6bc0833fb9"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:a3365da4-76e8-496d-b173-ca6bc0833fb9"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:dc26033f-d8b0-47cb-840e-f4c067518eb7"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:dc26033f-d8b0-47cb-840e-f4c067518eb7"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:3f8baa05-d670-42b6-aa19-d9f5a6fb44a9"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:3f8baa05-d670-42b6-aa19-d9f5a6fb44a9"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:8a3a95e7-8e8d-4d0e-8d63-9614cfcb1b15"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:8a3a95e7-8e8d-4d0e-8d63-9614cfcb1b15"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:8d242f4d-4a39-4483-a540-b1b5841bc34e"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:8d242f4d-4a39-4483-a540-b1b5841bc34e"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:1226c324-05ef-43fa-a0eb-71ed839c4620"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:1226c324-05ef-43fa-a0eb-71ed839c4620"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:83a0d06f-7ad1-4efc-b03b-9caa21a07469"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:83a0d06f-7ad1-4efc-b03b-9caa21a07469"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:1bd56427-d961-4dba-bebf-f39835693268"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:1bd56427-d961-4dba-bebf-f39835693268"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:85757ced-16bb-45f7-af6f-7674e6829956"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:85757ced-16bb-45f7-af6f-7674e6829956"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:acce36c5-9613-4ea6-9c99-bc8599ef2497"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:acce36c5-9613-4ea6-9c99-bc8599ef2497"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:d2c5610a-4f18-4c9a-aa06-2e3198b6c8de"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:d2c5610a-4f18-4c9a-aa06-2e3198b6c8de"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:ae1dad66-f287-4971-a7d2-93326c44ab3b"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:ae1dad66-f287-4971-a7d2-93326c44ab3b"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:8d0bdbc1-6906-4cf6-a35b-f8c474bf3b8e"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:8d0bdbc1-6906-4cf6-a35b-f8c474bf3b8e"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:8ac41b8e-e48b-43db-b0b4-f13375b8842a"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:8ac41b8e-e48b-43db-b0b4-f13375b8842a"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:c98f57f8-1ce5-4aea-a0ff-ffffd64c3d69"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:c98f57f8-1ce5-4aea-a0ff-ffffd64c3d69"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:d0ed5bc0-7c16-4558-a3cd-df6050fad7de"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:d0ed5bc0-7c16-4558-a3cd-df6050fad7de"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:f4bf8543-5477-4f27-9f72-e5cb5a35c991"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:f4bf8543-5477-4f27-9f72-e5cb5a35c991"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:4340f70d-0010-4c71-90c9-25ed8b50b196"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:4340f70d-0010-4c71-90c9-25ed8b50b196"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:d303b72a-2e8a-4708-8358-41e4e99b9d8a"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:d303b72a-2e8a-4708-8358-41e4e99b9d8a"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:f71ad080-69ef-4e62-8aae-4918eeb6c544"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:f71ad080-69ef-4e62-8aae-4918eeb6c544"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:4bc003f7-dcd8-4e6c-a627-32fc50952ced"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:4bc003f7-dcd8-4e6c-a627-32fc50952ced"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:37b076cf-0ad8-476e-b766-3cbb7787a4fb"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:37b076cf-0ad8-476e-b766-3cbb7787a4fb"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:6236a433-d3ee-4da6-b18e-f8168dd588d6"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:6236a433-d3ee-4da6-b18e-f8168dd588d6"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:d3e865e7-f638-4b69-ab69-8d42c684a679"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:d3e865e7-f638-4b69-ab69-8d42c684a679"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:33587cf2-c6e8-4cb1-94c5-29b757496058"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:33587cf2-c6e8-4cb1-94c5-29b757496058"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:76eeacc0-a6e8-47a3-8d44-1b0c556ff8c9"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:76eeacc0-a6e8-47a3-8d44-1b0c556ff8c9"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:5ffbdb12-c620-4b8a-a9c5-19fad79dcc8a"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:5ffbdb12-c620-4b8a-a9c5-19fad79dcc8a"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:10ede3c7-f325-42a7-9b9c-bf16db0a0cc5"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:10ede3c7-f325-42a7-9b9c-bf16db0a0cc5"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:53e09a1d-65a1-4391-90b2-0acd2a27054d"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:53e09a1d-65a1-4391-90b2-0acd2a27054d"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:d5b4292f-4a41-44f0-bb04-22a32cff034c"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:d5b4292f-4a41-44f0-bb04-22a32cff034c"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:503ef0f7-fa49-4b34-ba4f-f6e245f331c4"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:503ef0f7-fa49-4b34-ba4f-f6e245f331c4"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:b2fbfb13-b067-4b26-82a3-f0f1b862de13"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:b2fbfb13-b067-4b26-82a3-f0f1b862de13"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:839fcb86-b58f-40c0-922b-b9bbd5acb0a1"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:839fcb86-b58f-40c0-922b-b9bbd5acb0a1"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:e7fdfee0-5d06-4e35-857c-14913e1e8adc"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:e7fdfee0-5d06-4e35-857c-14913e1e8adc"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:12a4923e-7ffe-4483-a0e9-8583eb9d8cb2"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:12a4923e-7ffe-4483-a0e9-8583eb9d8cb2"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:0daa3896-28d8-4d9f-942d-53e1f9b8d4a8"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:0daa3896-28d8-4d9f-942d-53e1f9b8d4a8"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:9d1fb79c-6c37-46e2-a6d8-87152231d307"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:9d1fb79c-6c37-46e2-a6d8-87152231d307"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:03d8cc5e-ea43-41ae-9ecf-99dde7b5a06c"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:03d8cc5e-ea43-41ae-9ecf-99dde7b5a06c"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:b1306eaa-36f0-4b67-b2e4-823064140b01"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:b1306eaa-36f0-4b67-b2e4-823064140b01"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:f98e2527-86ca-4c94-8866-631651815f5e"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:f98e2527-86ca-4c94-8866-631651815f5e"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:80184f83-0da9-4fdf-a96e-0c2ed14a4bed"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:80184f83-0da9-4fdf-a96e-0c2ed14a4bed"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:878763e1-2ac3-476a-b93b-40ff65e69cdf"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:878763e1-2ac3-476a-b93b-40ff65e69cdf"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:e7117ae7-e934-4b75-a24c-5f116c8e4713"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:e7117ae7-e934-4b75-a24c-5f116c8e4713"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:bfa92095-fb2a-4ee7-84bb-d9fd0602b19d"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:bfa92095-fb2a-4ee7-84bb-d9fd0602b19d"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:6e6cb3a8-d667-495b-a7f6-fed27dffa621"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:6e6cb3a8-d667-495b-a7f6-fed27dffa621"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:2e773b01-77c1-4ee2-8c62-533604975779"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:2e773b01-77c1-4ee2-8c62-533604975779"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:7365958d-b2ef-4e3c-8c0e-80279cdf5da3"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:7365958d-b2ef-4e3c-8c0e-80279cdf5da3"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:69236d8a-90b2-4249-8892-74dd4e416026"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:69236d8a-90b2-4249-8892-74dd4e416026"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:27446442-1385-440b-9b05-1ad0137c9681"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:27446442-1385-440b-9b05-1ad0137c9681"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:40a26f36-8fdf-4e92-83ce-e682146a27e2"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:40a26f36-8fdf-4e92-83ce-e682146a27e2"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:6baddb29-9f41-461e-8271-17d0739995b2"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:6baddb29-9f41-461e-8271-17d0739995b2"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:3ef0ada0-b5ae-4465-afbc-174e0df101cf"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:3ef0ada0-b5ae-4465-afbc-174e0df101cf"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:72cbf6ce-03b4-4eb5-a08c-bba7f90aa5a3"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:72cbf6ce-03b4-4eb5-a08c-bba7f90aa5a3"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:f87369b5-9f26-41a8-907d-fc10e4da63f2"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:f87369b5-9f26-41a8-907d-fc10e4da63f2"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:a62ceb6b-7bf2-4882-bca4-39379b2bd057"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:a62ceb6b-7bf2-4882-bca4-39379b2bd057"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:9505f913-5651-43e2-9dc0-5f81d2b23c93"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:9505f913-5651-43e2-9dc0-5f81d2b23c93"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:d1d09928-a6cc-4151-9465-0f250a872d9f"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:d1d09928-a6cc-4151-9465-0f250a872d9f"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:6e38c6c2-131d-4be8-a043-e5251a5c3f68"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:6e38c6c2-131d-4be8-a043-e5251a5c3f68"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:b8e40949-5cb9-4ac1-a14a-ac1fea3fc54b"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:b8e40949-5cb9-4ac1-a14a-ac1fea3fc54b"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:0f3e3e37-aa5c-4fa0-92a2-6ee82b9209fa"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:0f3e3e37-aa5c-4fa0-92a2-6ee82b9209fa"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:36c741e8-720c-4f53-9763-6d04ddfe8e83"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:36c741e8-720c-4f53-9763-6d04ddfe8e83"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:c3996d4a-8a41-4d17-a151-39a91a690357"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:c3996d4a-8a41-4d17-a151-39a91a690357"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:e659ab12-ad0a-4bf7-8d19-acd5897efb29"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:e659ab12-ad0a-4bf7-8d19-acd5897efb29"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:4bb09837-7141-4470-8c44-961327e28329"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:4bb09837-7141-4470-8c44-961327e28329"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:5984339a-7346-42e6-9cf7-1221a005a8b8"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:5984339a-7346-42e6-9cf7-1221a005a8b8"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:054de98d-9bee-41f8-91a0-58ae16a8896c"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:054de98d-9bee-41f8-91a0-58ae16a8896c"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:764d8236-f921-4d8c-84e1-ee72d95ef8f2"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:764d8236-f921-4d8c-84e1-ee72d95ef8f2"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:d211ad14-ef55-47a3-8187-b8bb5970c24c"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:d211ad14-ef55-47a3-8187-b8bb5970c24c"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <entry>
                    <reference value="urn:uuid:59b3428c-8359-437d-a2a0-1b698ad096f5"></reference>
                    <type value="Observation"></type>
                    <identifier>
                        <system value="urn:ietf:rfc:3986"></system>
                        <value value="urn:uuid:59b3428c-8359-437d-a2a0-1b698ad096f5"></value>
                    </identifier>
                    <display value="Observation"></display>
                </entry>
                <section>
                    <title value="Vitalzeichen und K&#xf6;rperma&#xdf;e"></title>
                    <code>
                        <coding>
                            <system value="http://snomed.info/sct"></system>
                            <version
                                value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                            <code value="1184593002"></code>
                            <display value="Vital sign document section (record artifact)"></display>
                        </coding>
                    </code>
                    <entry>
                        <reference value="urn:uuid:b40becef-e400-4e44-bdba-30ccb674bbfb"></reference>
                    </entry>
                    <entry>
                        <reference value="urn:uuid:65dba314-d69d-4fd0-a143-b9b0c825369e"></reference>
                    </entry>
                    <entry>
                        <reference value="urn:uuid:49fbe5e7-e94b-4950-b5a1-3df291ec8193"></reference>
                    </entry>
                </section>
            </section>
            <section>
                <title value="Medikation"></title>
                <code>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="721912009"></code>
                        <display value="Medication summary document (record artifact)"></display>
                    </coding>
                </code>
                <entry>
                    <reference value="urn:uuid:2eccdd0f-8a6f-4684-b56c-da7b68064207"></reference>
                </entry>
            </section>
            <section>
                <title value="Ziele"></title>
                <code>
                    <coding>
                        <system
                            value="https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_DIGA_Section_Codes"></system>
                        <version value="1.1.0"></version>
                        <code value="SectionZiele"></code>
                        <display value="Bereich Ziele"></display>
                    </coding>
                </code>
                <entry>
                    <reference value="urn:uuid:5b190db8-67be-479b-951d-65ac17997c8e"></reference>
                </entry>
            </section>
            <section>
                <title value="Termine/Begegnungen"></title>
                <code>
                    <coding>
                        <system
                            value="https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_DIGA_Section_Codes"></system>
                        <version value="1.1.0"></version>
                        <code value="SectionTermineBegegnungen"></code>
                        <display value="Bereich Termine und Begegnungen"></display>
                    </coding>
                </code>
                <entry>
                    <reference value="urn:uuid:9b9d251c-494e-4602-942d-c588c8b532fd"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:5bbf4e48-5661-4f26-8497-b59990f25108"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:a86a00fc-4604-4ff7-8a82-1dfce0b12061"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:1085fd86-0cba-4f6c-9ffc-b8648ab7a61b"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:69af3a58-3181-4872-8704-06c56cd78251"></reference>
                </entry>
            </section>
            <section>
                <title value="Patientenberichte"></title>
                <code>
                    <coding>
                        <system
                            value="https://fhir.kbv.de/CodeSystem/KBV_CS_MIO_DIGA_Section_Codes"></system>
                        <version value="1.1.0"></version>
                        <code value="SectionPatientenberichte"></code>
                        <display value="Bereich Patientenberichte"></display>
                    </coding>
                </code>
                <entry>
                    <reference value="urn:uuid:a9fe485a-a769-455a-9a1e-b20ab03ccc57"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:ba5b0e23-5fd2-4256-94db-c47577719a57"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:828b026f-688b-413d-b78f-70f6676c5be4"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:8e4c2edc-8a6b-4b1e-b7d3-164809f49d97"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:04f78273-5a8e-470c-8a4a-61a3959ea6df"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:18e68762-e19c-4149-b54a-2ecb59d54c23"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:a93314fe-8a54-4476-b70f-3400e2be17f0"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:28a8f035-f27d-41f9-a360-3570f108271f"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:98bb88f0-b634-4b43-ac9e-9e5440e0f4d6"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:efcd8c76-9143-4372-ab4e-d4c2d3108ba5"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:774a11e9-a5d1-4365-874e-1ddd66f311b8"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:2e37d66e-6e05-480e-bd8b-1764c7062d6b"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:4bfdbe6a-bbc7-4b88-bedb-9a895ddb1c59"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:ef3e5876-6092-4077-8a12-70431aa32be5"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:70f1e060-0804-43f0-b2f2-732567736815"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:f6b5c0c5-1586-4e06-b5e0-36cd32d69e0e"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:a9ea3010-9571-4f5b-801a-6455f1823558"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:7aae2235-e2c0-4abd-a85f-de5a910d2450"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:7115fae1-66b5-4beb-a124-4fba06374b4e"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:3a7c17ce-aa93-4641-8af7-10efddc63509"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:304e0713-36fa-44ad-9a09-a86cbaa226bc"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:f7f62238-1d9b-47fe-8b72-b06db697fe5a"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:66286d0b-710d-4ce3-88bf-0eea6e00c2bf"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:1a96855f-c41a-448a-914e-fb7b46b9c8ed"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:ce547c5c-164f-4426-8dff-75739716ece5"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:621af218-62d5-4b7f-9422-4a2b1b05e1d5"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:a99e5b9d-e7a7-44ca-88c5-940ee68cfd30"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:3cdd5668-62ce-4449-a359-5469f5d400df"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:4caa77d8-c224-4b37-b08f-7912baf54535"></reference>
                </entry>
                <entry>
                    <reference value="urn:uuid:de767908-054b-45fe-a34c-d62fda397a0e"></reference>
                </entry>
            </section>
        </Composition>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></fullUrl>
    <resource>
        <Patient xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Patient|1.1.0"></profile>
            </meta>
            <identifier>
              <use value="official" />
                <type>
                  <coding>
                    <system value="https://fhir.kbv.de/CodeSystem/KBV_CS_Base_identifier_type" />
                    <code value="kvk" />
                    <display value="Krankenversichertenkarte" />
                  </coding>
                </type>
                <system value="http://fhir.de/NamingSystem/gkv/kvk-versichertennummer" />
                <value value="A123456789" />
            </identifier>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></value>
            </identifier>
            <name>
                <use value="official"></use>
                <text value="Max Mustermann"></text>
                <family value="unbekannt">
                    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-own-name">
                        <valueString value="unbekannt"></valueString>
                    </extension>
                </family>
            </name>
            <telecom>
                <system value="email"></system>
                <value value="max.mustermann@outlook.com"></value>
            </telecom>
            <gender value="male"></gender>
            <birthDate value="1980"></birthDate>
            <communication>
                <language>
                    <coding>
                        <system value="urn:ietf:bcp:47"></system>
                        <code value="de-DE"></code>
                        <display value="German"></display>
                    </coding>
                </language>
            </communication>
        </Patient>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d52de73f-d723-426d-b6e4-d95d35daac34"></fullUrl>
    <resource>
        <Device xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Device_DIGA|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">actensio App</div>
            </text>
            <identifier>
                <type>
                    <text value="DiGA-VE-ID"></text>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d52de73f-d723-426d-b6e4-d95d35daac34"></value>
            </identifier>
            <definition>
                <reference value="urn:uuid:9a2da64b-23ba-4a29-be95-785fc0e88648"></reference>
            </definition>
            <deviceName>
                <name value="actensio App"></name>
                <type value="user-friendly-name"></type>
            </deviceName>
            <type>
                <coding>
                    <system value="http://fhir.de/CodeSystem/ifa/pzn"></system>
                    <version value="1.4.0"></version>
                    <code value="99999999"></code>
                    <display value="99999999"></display>
                </coding>
            </type>
            <version>
                <type>
                    <coding>
                        <system value="https://app.actens.io"></system>
                        <version value="1.0"></version>
                        <code value="1.0"></code>
                        <display value="1.0"></display>
                    </coding>
                </type>
                <value value="1.0"></value>
            </version>
        </Device>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5b190db8-67be-479b-951d-65ac17997c8e"></fullUrl>
    <resource>
        <Goal xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Goal|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5b190db8-67be-479b-951d-65ac17997c8e"></value>
            </identifier>
            <lifecycleStatus value="active"></lifecycleStatus>
            <description>
                <text value="false"></text>
            </description>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <expressedBy>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </expressedBy>
        </Goal>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a8065ed1-6ae6-4c54-81e1-ef38e086e656"></fullUrl>
    <resource>
        <Medication xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Medication|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">RAMIPRIL 1A PHARMA 5 MG</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a8065ed1-6ae6-4c54-81e1-ef38e086e656"></value>
            </identifier>
            <code>
                <coding>
                    <system value="http://fhir.de/CodeSystem/ifa/pzn"></system>
                    <version value="1.4.0"></version>
                    <code value="00766736"></code>
                    <display value="RAMIPRIL 1A PHARMA 5 MG"></display>
                </coding>
            </code>
            <form>
                <text value="TABL "></text>
            </form>
        </Medication>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2eccdd0f-8a6f-4684-b56c-da7b68064207"></fullUrl>
    <resource>
        <MedicationStatement xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_MedicationStatement_Medication_Information|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2eccdd0f-8a6f-4684-b56c-da7b68064207"></value>
            </identifier>
            <status value="active"></status>
            <medicationReference>
                <reference value="urn:uuid:a8065ed1-6ae6-4c54-81e1-ef38e086e656"></reference>
            </medicationReference>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <dateAsserted value="2024-05-22T15:24:41+02:00"></dateAsserted>
            <informationSource>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </informationSource>
            <dosage>
                <doseAndRate>
                    <doseQuantity>
                        <value value="12"></value>
                    </doseQuantity>
                </doseAndRate>
            </dosage>
        </MedicationStatement>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1d25c1b9-5e47-42cc-8ca6-dd1b1f688bdd"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1d25c1b9-5e47-42cc-8ca6-dd1b1f688bdd"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-22T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-22T00:00:00+02:00"></issued>
            <valueInteger value="30"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ccad0cff-0895-44e2-b51b-bbcae17126bd"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ccad0cff-0895-44e2-b51b-bbcae17126bd"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-22T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-22T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ad54c40f-4727-4a77-bd6a-a0ce644af3db"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ad54c40f-4727-4a77-bd6a-a0ce644af3db"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-22T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-22T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:558217f3-8dea-4c2d-8738-78184b0324aa"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:558217f3-8dea-4c2d-8738-78184b0324aa"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-22T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-22T00:00:00+02:00"></issued>
            <valueInteger value="4500"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5be16dcb-9e34-46e7-af85-fdcba056081e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5be16dcb-9e34-46e7-af85-fdcba056081e"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-22T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-22T00:00:00+02:00"></issued>
            <valueInteger value="9"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:166ff54c-f0bd-4593-a01b-b9b3b32fe602"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:166ff54c-f0bd-4593-a01b-b9b3b32fe602"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-22T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-22T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:112b9798-e593-40fe-9e8d-f14c37aa935b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:112b9798-e593-40fe-9e8d-f14c37aa935b"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-22T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-22T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:430a2b39-e856-4435-a6a6-252051babb56"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:430a2b39-e856-4435-a6a6-252051babb56"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-22T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-22T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0ef23d0c-6a89-4b43-81ee-5015ea4f9547"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0ef23d0c-6a89-4b43-81ee-5015ea4f9547"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-22T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-22T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:93c70cc7-6218-4264-ad50-aea51dc510c8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:93c70cc7-6218-4264-ad50-aea51dc510c8"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-22T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:47d1e925-553f-426d-9f63-b89c30d2ab49"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:da0a04a7-70db-49a8-a2dc-e3b32f3f9c3b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:5a2be3fb-3e14-4b6a-b226-6ec5d15a19e6"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fe546634-2ae9-4d9b-891d-f55114b351cd"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:699aaa68-72d2-43da-a70b-e6c91b72bfe5"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:dc343631-c49a-42cd-b271-d4c1d20d60f4"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f1a6b62b-33b4-4b8d-887c-2fc76e3c6932"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:a8bb6d25-1a51-4dbc-b6af-e0d7e318d76d"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:47d1e925-553f-426d-9f63-b89c30d2ab49"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:47d1e925-553f-426d-9f63-b89c30d2ab49"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:da0a04a7-70db-49a8-a2dc-e3b32f3f9c3b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:da0a04a7-70db-49a8-a2dc-e3b32f3f9c3b"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5a2be3fb-3e14-4b6a-b226-6ec5d15a19e6"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5a2be3fb-3e14-4b6a-b226-6ec5d15a19e6"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fe546634-2ae9-4d9b-891d-f55114b351cd"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fe546634-2ae9-4d9b-891d-f55114b351cd"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:699aaa68-72d2-43da-a70b-e6c91b72bfe5"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:699aaa68-72d2-43da-a70b-e6c91b72bfe5"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:dc343631-c49a-42cd-b271-d4c1d20d60f4"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:dc343631-c49a-42cd-b271-d4c1d20d60f4"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f1a6b62b-33b4-4b8d-887c-2fc76e3c6932"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f1a6b62b-33b4-4b8d-887c-2fc76e3c6932"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a8bb6d25-1a51-4dbc-b6af-e0d7e318d76d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a8bb6d25-1a51-4dbc-b6af-e0d7e318d76d"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a9fe485a-a769-455a-9a1e-b20ab03ccc57"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a9fe485a-a769-455a-9a1e-b20ab03ccc57"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-22T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:1d25c1b9-5e47-42cc-8ca6-dd1b1f688bdd"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ccad0cff-0895-44e2-b51b-bbcae17126bd"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ad54c40f-4727-4a77-bd6a-a0ce644af3db"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:558217f3-8dea-4c2d-8738-78184b0324aa"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:5be16dcb-9e34-46e7-af85-fdcba056081e"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:166ff54c-f0bd-4593-a01b-b9b3b32fe602"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:112b9798-e593-40fe-9e8d-f14c37aa935b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:430a2b39-e856-4435-a6a6-252051babb56"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0ef23d0c-6a89-4b43-81ee-5015ea4f9547"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:93c70cc7-6218-4264-ad50-aea51dc510c8"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:7f8728ad-f25d-46e1-923b-924457253a6c"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:7f8728ad-f25d-46e1-923b-924457253a6c"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-23T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-23T00:00:00+02:00"></issued>
            <valueInteger value="50"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0bbaae2a-bf30-493c-a99a-f3290abab3ec"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0bbaae2a-bf30-493c-a99a-f3290abab3ec"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-23T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-23T00:00:00+02:00"></issued>
            <valueInteger value="61"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:24b255c0-3e3c-4e74-8dbb-4b4df3971d78"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:24b255c0-3e3c-4e74-8dbb-4b4df3971d78"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-23T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-23T00:00:00+02:00"></issued>
            <valueInteger value="18"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:078cf400-1e87-41a3-be6e-d99ce2ce5edb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:078cf400-1e87-41a3-be6e-d99ce2ce5edb"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-23T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-23T00:00:00+02:00"></issued>
            <valueInteger value="8003"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c6908c90-6efe-498c-90bb-786bac818f57"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c6908c90-6efe-498c-90bb-786bac818f57"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-23T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-23T00:00:00+02:00"></issued>
            <valueInteger value="10"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1eda8556-9e62-40ea-9fc3-3a92a5d2a6c2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1eda8556-9e62-40ea-9fc3-3a92a5d2a6c2"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-23T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-23T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c58a1c93-61fc-421f-9f81-cf3af7db0a46"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c58a1c93-61fc-421f-9f81-cf3af7db0a46"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-23T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-23T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1a4e209a-83f1-43bf-9a64-73ee75310877"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1a4e209a-83f1-43bf-9a64-73ee75310877"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-23T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-23T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fc443763-6fee-4938-b37d-454d7a1af3a4"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fc443763-6fee-4938-b37d-454d7a1af3a4"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-23T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-23T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c8443d3b-7dd4-4d40-ae9e-90f88cd140b1"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c8443d3b-7dd4-4d40-ae9e-90f88cd140b1"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-23T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:2b0d4340-74eb-419e-91e1-33b45639a25a"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:e473c96e-c473-4853-bde5-d664061a1452"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:12519e25-0df8-4a43-9400-a4433b77a6dc"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:2d8e5617-ce4b-4b69-8c68-3e0a3940f531"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f18a5f6b-469f-45da-bf5f-38ddcfb006b2"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:4dcbffb7-a05b-415a-826c-e2c9c16e769e"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1eea36a1-cfe4-4189-aa4d-e1637f89c998"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:6a08f4bd-8855-4071-a50f-82c12651e9f4"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2b0d4340-74eb-419e-91e1-33b45639a25a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2b0d4340-74eb-419e-91e1-33b45639a25a"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e473c96e-c473-4853-bde5-d664061a1452"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e473c96e-c473-4853-bde5-d664061a1452"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:12519e25-0df8-4a43-9400-a4433b77a6dc"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:12519e25-0df8-4a43-9400-a4433b77a6dc"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2d8e5617-ce4b-4b69-8c68-3e0a3940f531"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2d8e5617-ce4b-4b69-8c68-3e0a3940f531"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f18a5f6b-469f-45da-bf5f-38ddcfb006b2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f18a5f6b-469f-45da-bf5f-38ddcfb006b2"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4dcbffb7-a05b-415a-826c-e2c9c16e769e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4dcbffb7-a05b-415a-826c-e2c9c16e769e"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1eea36a1-cfe4-4189-aa4d-e1637f89c998"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1eea36a1-cfe4-4189-aa4d-e1637f89c998"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:6a08f4bd-8855-4071-a50f-82c12651e9f4"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:6a08f4bd-8855-4071-a50f-82c12651e9f4"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ba5b0e23-5fd2-4256-94db-c47577719a57"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ba5b0e23-5fd2-4256-94db-c47577719a57"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-23T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:7f8728ad-f25d-46e1-923b-924457253a6c"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0bbaae2a-bf30-493c-a99a-f3290abab3ec"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:24b255c0-3e3c-4e74-8dbb-4b4df3971d78"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:078cf400-1e87-41a3-be6e-d99ce2ce5edb"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:c6908c90-6efe-498c-90bb-786bac818f57"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1eda8556-9e62-40ea-9fc3-3a92a5d2a6c2"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:c58a1c93-61fc-421f-9f81-cf3af7db0a46"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1a4e209a-83f1-43bf-9a64-73ee75310877"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fc443763-6fee-4938-b37d-454d7a1af3a4"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:c8443d3b-7dd4-4d40-ae9e-90f88cd140b1"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0f9f02e8-9c0e-44e5-a33e-430f55b3c8c7"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0f9f02e8-9c0e-44e5-a33e-430f55b3c8c7"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-24T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-24T00:00:00+02:00"></issued>
            <valueInteger value="7"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1f8b5fb6-7970-4d4b-a03a-9526fb703d42"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1f8b5fb6-7970-4d4b-a03a-9526fb703d42"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-24T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-24T00:00:00+02:00"></issued>
            <valueInteger value="25"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fd9af2fb-5080-47f3-96ee-a91c6ad328b6"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fd9af2fb-5080-47f3-96ee-a91c6ad328b6"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-24T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-24T00:00:00+02:00"></issued>
            <valueInteger value="7"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4a2d8185-0231-402a-8ccc-186501727e5b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4a2d8185-0231-402a-8ccc-186501727e5b"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-24T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-24T00:00:00+02:00"></issued>
            <valueInteger value="8114"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:92bc508a-f533-42a1-8911-6565968218b3"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:92bc508a-f533-42a1-8911-6565968218b3"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-24T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-24T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:044d09b8-a4d7-4c94-963a-2b04c558881d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:044d09b8-a4d7-4c94-963a-2b04c558881d"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-24T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-24T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:80d7aa11-e709-4757-b606-3a40197b8279"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:80d7aa11-e709-4757-b606-3a40197b8279"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-24T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-24T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b83b0fe9-69af-46da-bcc4-b13c34e75927"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b83b0fe9-69af-46da-bcc4-b13c34e75927"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-24T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-24T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5b7d43f1-8b59-4440-9e0e-f813ca9e6db4"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5b7d43f1-8b59-4440-9e0e-f813ca9e6db4"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-24T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-24T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3474ba94-dec6-485d-ad0c-687c86273b98"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3474ba94-dec6-485d-ad0c-687c86273b98"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-24T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:2eac5f37-b608-457b-bc40-dd73c8a50217"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:e6d9d6e1-aee4-4fb9-b151-13f8b4198d48"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:5bad936d-7474-487b-84e9-3e8687049394"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:bbdd4691-05d0-4ba1-a8b0-0fb66ad994d1"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:cc4177e6-a66f-4237-a4a7-ad0ee93ff7fc"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:bdbf0b83-1d26-49fc-b4e7-3fba5fcc69f6"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f1beb2de-51f5-4d84-b2ca-64fa49d21c69"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:2ef18fc6-9af0-47c3-b06e-51f2aa469292"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2eac5f37-b608-457b-bc40-dd73c8a50217"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2eac5f37-b608-457b-bc40-dd73c8a50217"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e6d9d6e1-aee4-4fb9-b151-13f8b4198d48"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e6d9d6e1-aee4-4fb9-b151-13f8b4198d48"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5bad936d-7474-487b-84e9-3e8687049394"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5bad936d-7474-487b-84e9-3e8687049394"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:bbdd4691-05d0-4ba1-a8b0-0fb66ad994d1"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:bbdd4691-05d0-4ba1-a8b0-0fb66ad994d1"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:cc4177e6-a66f-4237-a4a7-ad0ee93ff7fc"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:cc4177e6-a66f-4237-a4a7-ad0ee93ff7fc"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:bdbf0b83-1d26-49fc-b4e7-3fba5fcc69f6"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:bdbf0b83-1d26-49fc-b4e7-3fba5fcc69f6"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f1beb2de-51f5-4d84-b2ca-64fa49d21c69"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f1beb2de-51f5-4d84-b2ca-64fa49d21c69"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2ef18fc6-9af0-47c3-b06e-51f2aa469292"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2ef18fc6-9af0-47c3-b06e-51f2aa469292"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:828b026f-688b-413d-b78f-70f6676c5be4"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:828b026f-688b-413d-b78f-70f6676c5be4"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-24T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:0f9f02e8-9c0e-44e5-a33e-430f55b3c8c7"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1f8b5fb6-7970-4d4b-a03a-9526fb703d42"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fd9af2fb-5080-47f3-96ee-a91c6ad328b6"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:4a2d8185-0231-402a-8ccc-186501727e5b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:92bc508a-f533-42a1-8911-6565968218b3"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:044d09b8-a4d7-4c94-963a-2b04c558881d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:80d7aa11-e709-4757-b606-3a40197b8279"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:b83b0fe9-69af-46da-bcc4-b13c34e75927"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:5b7d43f1-8b59-4440-9e0e-f813ca9e6db4"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:3474ba94-dec6-485d-ad0c-687c86273b98"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ee578275-942f-4965-a107-b09b77cda978"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ee578275-942f-4965-a107-b09b77cda978"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-25T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-25T00:00:00+02:00"></issued>
            <valueInteger value="22"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e166b686-2325-43da-aced-1c9e98d55e99"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e166b686-2325-43da-aced-1c9e98d55e99"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-25T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-25T00:00:00+02:00"></issued>
            <valueInteger value="56"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f45a871b-4eed-4f35-95e2-4d5fea8f15bb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f45a871b-4eed-4f35-95e2-4d5fea8f15bb"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-25T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-25T00:00:00+02:00"></issued>
            <valueInteger value="31"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8b69582b-bda1-4296-bf3d-d62a6bf2005f"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8b69582b-bda1-4296-bf3d-d62a6bf2005f"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-25T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-25T00:00:00+02:00"></issued>
            <valueInteger value="8344"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3cf7ba53-e64b-4bd7-a2ff-52970a940432"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3cf7ba53-e64b-4bd7-a2ff-52970a940432"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-25T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-25T00:00:00+02:00"></issued>
            <valueInteger value="12"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9c9941e7-e0ce-4149-9c27-d3a2863cbdfb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9c9941e7-e0ce-4149-9c27-d3a2863cbdfb"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-25T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-25T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f962accd-a8bb-4272-9ff9-98b71c3684f8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f962accd-a8bb-4272-9ff9-98b71c3684f8"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-25T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-25T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2181f09e-4013-4ad2-bdfa-4feae0d5b787"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2181f09e-4013-4ad2-bdfa-4feae0d5b787"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-25T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-25T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3bcd5b67-1643-477b-9754-dcb361093f1c"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3bcd5b67-1643-477b-9754-dcb361093f1c"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-25T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-25T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:998b74d2-8bb5-48ce-a7c8-d5f86bf76ba0"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:998b74d2-8bb5-48ce-a7c8-d5f86bf76ba0"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-25T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:b3351f1e-38d3-4032-b220-073be6ecd6a9"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:71f8889b-ec72-4ef1-91c1-ee469811dcde"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:eb9664b1-2940-4377-a9c5-bd38c8023246"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:17112fad-c430-4153-8b94-817f4b41591b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fc32ad5d-f141-4ad7-a2c0-238e8ff30020"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d40c25fe-22c1-45d5-a31e-9c7a24a7e817"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f2f78515-6447-46ba-9220-938baf356d67"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:4f9524d0-4267-466d-95df-a8b8edad3f1e"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b3351f1e-38d3-4032-b220-073be6ecd6a9"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b3351f1e-38d3-4032-b220-073be6ecd6a9"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:71f8889b-ec72-4ef1-91c1-ee469811dcde"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:71f8889b-ec72-4ef1-91c1-ee469811dcde"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:eb9664b1-2940-4377-a9c5-bd38c8023246"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:eb9664b1-2940-4377-a9c5-bd38c8023246"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:17112fad-c430-4153-8b94-817f4b41591b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:17112fad-c430-4153-8b94-817f4b41591b"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fc32ad5d-f141-4ad7-a2c0-238e8ff30020"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fc32ad5d-f141-4ad7-a2c0-238e8ff30020"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d40c25fe-22c1-45d5-a31e-9c7a24a7e817"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d40c25fe-22c1-45d5-a31e-9c7a24a7e817"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f2f78515-6447-46ba-9220-938baf356d67"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f2f78515-6447-46ba-9220-938baf356d67"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4f9524d0-4267-466d-95df-a8b8edad3f1e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4f9524d0-4267-466d-95df-a8b8edad3f1e"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8e4c2edc-8a6b-4b1e-b7d3-164809f49d97"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8e4c2edc-8a6b-4b1e-b7d3-164809f49d97"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-25T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:ee578275-942f-4965-a107-b09b77cda978"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:e166b686-2325-43da-aced-1c9e98d55e99"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f45a871b-4eed-4f35-95e2-4d5fea8f15bb"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:8b69582b-bda1-4296-bf3d-d62a6bf2005f"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:3cf7ba53-e64b-4bd7-a2ff-52970a940432"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:9c9941e7-e0ce-4149-9c27-d3a2863cbdfb"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f962accd-a8bb-4272-9ff9-98b71c3684f8"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:2181f09e-4013-4ad2-bdfa-4feae0d5b787"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:3bcd5b67-1643-477b-9754-dcb361093f1c"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:998b74d2-8bb5-48ce-a7c8-d5f86bf76ba0"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5d582d4d-025f-4e27-9796-8086d8a26be5"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5d582d4d-025f-4e27-9796-8086d8a26be5"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-26T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-26T00:00:00+02:00"></issued>
            <valueInteger value="4"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:47dd6c71-65ac-47db-a2f8-8d911fda6d21"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:47dd6c71-65ac-47db-a2f8-8d911fda6d21"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-26T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-26T00:00:00+02:00"></issued>
            <valueInteger value="9"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0f0b8bdf-3324-43d6-bfcd-872a52259d46"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0f0b8bdf-3324-43d6-bfcd-872a52259d46"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-26T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-26T00:00:00+02:00"></issued>
            <valueInteger value="32"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:7217cc4c-dbd9-4962-83f4-38899e709636"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:7217cc4c-dbd9-4962-83f4-38899e709636"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-26T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-26T00:00:00+02:00"></issued>
            <valueInteger value="10289"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d4bb6747-7355-4df8-b86a-563eb41b0149"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d4bb6747-7355-4df8-b86a-563eb41b0149"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-26T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-26T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:bf56cf34-53ea-4240-ac90-d44aba26afc8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:bf56cf34-53ea-4240-ac90-d44aba26afc8"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-26T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-26T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0435244b-db09-407c-988a-18ef89cccd50"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0435244b-db09-407c-988a-18ef89cccd50"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-26T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-26T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:eb92c207-170c-458a-b28f-1372470ca495"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:eb92c207-170c-458a-b28f-1372470ca495"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-26T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-26T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8fe56b9e-8427-41af-8d0d-f0df2e54ec21"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8fe56b9e-8427-41af-8d0d-f0df2e54ec21"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-26T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-26T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0dade289-98bc-4594-bbf8-baf9b65a2451"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0dade289-98bc-4594-bbf8-baf9b65a2451"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-26T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:34d6d6d7-6656-49ca-9f77-3e2d4cb44f17"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:4f7f5065-5392-44ca-bc59-fbdbfc89b4e9"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:db967c06-812d-4fbb-9950-abd029b3a967"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:80675262-1444-499a-bc41-121609b17d2f"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:a5ec5bbc-0ba9-4258-84c1-f3b2545cf59e"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fee426b1-f653-441e-bfcd-d23cf5269b95"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f79ca930-7a31-4671-a05c-0ee57f3e3626"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:9b45b8a0-1a5c-4616-a04b-7bfd72d99dcb"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:34d6d6d7-6656-49ca-9f77-3e2d4cb44f17"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:34d6d6d7-6656-49ca-9f77-3e2d4cb44f17"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4f7f5065-5392-44ca-bc59-fbdbfc89b4e9"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4f7f5065-5392-44ca-bc59-fbdbfc89b4e9"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:db967c06-812d-4fbb-9950-abd029b3a967"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:db967c06-812d-4fbb-9950-abd029b3a967"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:80675262-1444-499a-bc41-121609b17d2f"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:80675262-1444-499a-bc41-121609b17d2f"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a5ec5bbc-0ba9-4258-84c1-f3b2545cf59e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a5ec5bbc-0ba9-4258-84c1-f3b2545cf59e"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fee426b1-f653-441e-bfcd-d23cf5269b95"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fee426b1-f653-441e-bfcd-d23cf5269b95"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f79ca930-7a31-4671-a05c-0ee57f3e3626"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f79ca930-7a31-4671-a05c-0ee57f3e3626"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9b45b8a0-1a5c-4616-a04b-7bfd72d99dcb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9b45b8a0-1a5c-4616-a04b-7bfd72d99dcb"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:04f78273-5a8e-470c-8a4a-61a3959ea6df"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:04f78273-5a8e-470c-8a4a-61a3959ea6df"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-26T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:5d582d4d-025f-4e27-9796-8086d8a26be5"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:47dd6c71-65ac-47db-a2f8-8d911fda6d21"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0f0b8bdf-3324-43d6-bfcd-872a52259d46"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:7217cc4c-dbd9-4962-83f4-38899e709636"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d4bb6747-7355-4df8-b86a-563eb41b0149"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:bf56cf34-53ea-4240-ac90-d44aba26afc8"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0435244b-db09-407c-988a-18ef89cccd50"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:eb92c207-170c-458a-b28f-1372470ca495"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:8fe56b9e-8427-41af-8d0d-f0df2e54ec21"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0dade289-98bc-4594-bbf8-baf9b65a2451"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:24371065-ec12-4969-ae91-348e4a198575"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:24371065-ec12-4969-ae91-348e4a198575"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-27T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-27T00:00:00+02:00"></issued>
            <valueInteger value="11"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:89d42d9e-e496-4795-b4cb-ccd6ba553afb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:89d42d9e-e496-4795-b4cb-ccd6ba553afb"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-27T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-27T00:00:00+02:00"></issued>
            <valueInteger value="21"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8563cdef-1344-47fc-9818-294641975366"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8563cdef-1344-47fc-9818-294641975366"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-27T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-27T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ebf190c7-3050-412b-b116-6545c389f819"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ebf190c7-3050-412b-b116-6545c389f819"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-27T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-27T00:00:00+02:00"></issued>
            <valueInteger value="8083"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:98db7530-ec28-42d2-8f74-43da534824ff"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:98db7530-ec28-42d2-8f74-43da534824ff"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-27T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-27T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:16120e02-c192-44ff-9e22-91bfcbc5e9c2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:16120e02-c192-44ff-9e22-91bfcbc5e9c2"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-27T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-27T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:eced2045-5fc8-4c42-a602-c3e62b57321a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:eced2045-5fc8-4c42-a602-c3e62b57321a"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-27T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-27T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9942fb1b-e476-4425-a45d-0c9e24dc653a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9942fb1b-e476-4425-a45d-0c9e24dc653a"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-27T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-27T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ec36a016-3cae-43af-97ab-98b7e2222792"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ec36a016-3cae-43af-97ab-98b7e2222792"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-27T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-27T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:7048a206-aed6-44f7-8ff6-1a3ff8d957c4"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:7048a206-aed6-44f7-8ff6-1a3ff8d957c4"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-27T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:e9eed08f-77aa-4bbc-bebd-cb90d6add535"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:da26e492-5621-47cc-8266-b0ee590b21b6"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:8a23b087-ddb7-4c2b-af32-a4412247c67f"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:bd50177f-79d0-4822-ae6f-d6b83ae7468f"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fcbd3269-bb1c-46dc-94ff-5ede6d93d2de"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:32a770d8-fb8c-4c45-800f-328cba9f77a4"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:40818d91-ce22-4103-8613-a7584ee09ca7"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:81e8b55d-9a73-41c1-b978-9c1767c6032b"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e9eed08f-77aa-4bbc-bebd-cb90d6add535"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e9eed08f-77aa-4bbc-bebd-cb90d6add535"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:da26e492-5621-47cc-8266-b0ee590b21b6"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:da26e492-5621-47cc-8266-b0ee590b21b6"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8a23b087-ddb7-4c2b-af32-a4412247c67f"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8a23b087-ddb7-4c2b-af32-a4412247c67f"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:bd50177f-79d0-4822-ae6f-d6b83ae7468f"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:bd50177f-79d0-4822-ae6f-d6b83ae7468f"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fcbd3269-bb1c-46dc-94ff-5ede6d93d2de"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fcbd3269-bb1c-46dc-94ff-5ede6d93d2de"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:32a770d8-fb8c-4c45-800f-328cba9f77a4"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:32a770d8-fb8c-4c45-800f-328cba9f77a4"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:40818d91-ce22-4103-8613-a7584ee09ca7"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:40818d91-ce22-4103-8613-a7584ee09ca7"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:81e8b55d-9a73-41c1-b978-9c1767c6032b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:81e8b55d-9a73-41c1-b978-9c1767c6032b"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:18e68762-e19c-4149-b54a-2ecb59d54c23"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:18e68762-e19c-4149-b54a-2ecb59d54c23"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-27T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:24371065-ec12-4969-ae91-348e4a198575"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:89d42d9e-e496-4795-b4cb-ccd6ba553afb"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:8563cdef-1344-47fc-9818-294641975366"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ebf190c7-3050-412b-b116-6545c389f819"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:98db7530-ec28-42d2-8f74-43da534824ff"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:16120e02-c192-44ff-9e22-91bfcbc5e9c2"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:eced2045-5fc8-4c42-a602-c3e62b57321a"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:9942fb1b-e476-4425-a45d-0c9e24dc653a"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ec36a016-3cae-43af-97ab-98b7e2222792"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:7048a206-aed6-44f7-8ff6-1a3ff8d957c4"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8fa98cd6-3d0a-46e7-934d-55972ee52c01"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8fa98cd6-3d0a-46e7-934d-55972ee52c01"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-28T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-28T00:00:00+02:00"></issued>
            <valueInteger value="2"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1367856b-00df-49bd-b871-079066c1799d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1367856b-00df-49bd-b871-079066c1799d"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-28T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-28T00:00:00+02:00"></issued>
            <valueInteger value="1"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0b7e006e-520f-432a-8949-437b2707a211"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0b7e006e-520f-432a-8949-437b2707a211"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-28T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-28T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:87b58868-d9fb-4f1c-846e-619069dd71b1"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:87b58868-d9fb-4f1c-846e-619069dd71b1"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-28T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-28T00:00:00+02:00"></issued>
            <valueInteger value="9070"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8970fe86-417a-4dbd-8868-e05bb2c06fb3"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8970fe86-417a-4dbd-8868-e05bb2c06fb3"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-28T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-28T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d6ad9180-0af2-4c92-959c-e53bc2b621c1"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d6ad9180-0af2-4c92-959c-e53bc2b621c1"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-28T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-28T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:81fb021f-60da-48a0-9bb0-185550db1015"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:81fb021f-60da-48a0-9bb0-185550db1015"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-28T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-28T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d8d0ce4d-3780-4c68-ab90-50379bdad169"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d8d0ce4d-3780-4c68-ab90-50379bdad169"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-28T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-28T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3fabb837-fd3b-4365-945e-6b7e1073a0d9"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3fabb837-fd3b-4365-945e-6b7e1073a0d9"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-28T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-28T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b95a9fbe-7c38-47f0-a12c-7ebf9e404644"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b95a9fbe-7c38-47f0-a12c-7ebf9e404644"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-28T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:e7a994cc-5f25-4b25-8521-b9c3a4d54c32"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:8c26bcf2-36d0-47b7-b262-39bc7de3aff0"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:27267d3a-35b1-45e6-8ef4-735e6575f028"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:321b8d98-4904-4c05-9973-7a67ef9443a8"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:c6008d8a-475b-4474-a462-3404d33320f1"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0f53005c-d6c6-4b71-bcc1-3aee201a040c"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f675bd18-0f0e-4344-93a2-1e926e44d6f2"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:de0365cb-6403-4c1b-931f-0cc759468e39"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e7a994cc-5f25-4b25-8521-b9c3a4d54c32"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e7a994cc-5f25-4b25-8521-b9c3a4d54c32"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8c26bcf2-36d0-47b7-b262-39bc7de3aff0"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8c26bcf2-36d0-47b7-b262-39bc7de3aff0"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:27267d3a-35b1-45e6-8ef4-735e6575f028"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:27267d3a-35b1-45e6-8ef4-735e6575f028"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:321b8d98-4904-4c05-9973-7a67ef9443a8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:321b8d98-4904-4c05-9973-7a67ef9443a8"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c6008d8a-475b-4474-a462-3404d33320f1"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c6008d8a-475b-4474-a462-3404d33320f1"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0f53005c-d6c6-4b71-bcc1-3aee201a040c"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0f53005c-d6c6-4b71-bcc1-3aee201a040c"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f675bd18-0f0e-4344-93a2-1e926e44d6f2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f675bd18-0f0e-4344-93a2-1e926e44d6f2"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:de0365cb-6403-4c1b-931f-0cc759468e39"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:de0365cb-6403-4c1b-931f-0cc759468e39"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a93314fe-8a54-4476-b70f-3400e2be17f0"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a93314fe-8a54-4476-b70f-3400e2be17f0"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-28T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:8fa98cd6-3d0a-46e7-934d-55972ee52c01"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1367856b-00df-49bd-b871-079066c1799d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0b7e006e-520f-432a-8949-437b2707a211"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:87b58868-d9fb-4f1c-846e-619069dd71b1"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:8970fe86-417a-4dbd-8868-e05bb2c06fb3"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d6ad9180-0af2-4c92-959c-e53bc2b621c1"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:81fb021f-60da-48a0-9bb0-185550db1015"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d8d0ce4d-3780-4c68-ab90-50379bdad169"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:3fabb837-fd3b-4365-945e-6b7e1073a0d9"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:b95a9fbe-7c38-47f0-a12c-7ebf9e404644"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:952ffb3d-d51c-4fc7-bb5e-70c143d4ab2d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:952ffb3d-d51c-4fc7-bb5e-70c143d4ab2d"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-29T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-29T00:00:00+02:00"></issued>
            <valueInteger value="3"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5fd2b0ff-74ea-4cb6-b760-37a6e1a54a25"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5fd2b0ff-74ea-4cb6-b760-37a6e1a54a25"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-29T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-29T00:00:00+02:00"></issued>
            <valueInteger value="5"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:787e0537-b38d-49bc-a713-55a201624afa"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:787e0537-b38d-49bc-a713-55a201624afa"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-29T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-29T00:00:00+02:00"></issued>
            <valueInteger value="8"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:08283fc8-a98c-4919-8eb6-627dde75dca3"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:08283fc8-a98c-4919-8eb6-627dde75dca3"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-29T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-29T00:00:00+02:00"></issued>
            <valueInteger value="9292"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9176eb08-fca4-4196-aaff-072368314dd8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9176eb08-fca4-4196-aaff-072368314dd8"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-29T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-29T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:cf267525-b006-4988-b719-26ac3f57e1bb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:cf267525-b006-4988-b719-26ac3f57e1bb"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-29T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-29T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1a2de4ed-0374-49c6-b3f9-5415c5600673"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1a2de4ed-0374-49c6-b3f9-5415c5600673"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-29T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-29T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3eddadb5-d42b-4a77-a4f3-acf98ae738be"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3eddadb5-d42b-4a77-a4f3-acf98ae738be"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-29T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-29T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:03040492-a5c3-4aa9-a034-71c1e825bf37"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:03040492-a5c3-4aa9-a034-71c1e825bf37"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-29T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-29T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:18c75318-b1d8-4c3b-9dea-754148de91d9"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:18c75318-b1d8-4c3b-9dea-754148de91d9"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-29T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:020677da-d862-461b-b95b-c4f6c3bbd11b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:844aa030-ca7a-48c2-8e28-3559386f8577"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fe5043a5-82fe-4d84-92f9-0580d14e7ca0"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:855e67e3-4ac5-470f-acf9-79fe888b2114"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:7dd5510c-4b07-4a84-96be-fa34e689883d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:dfe74bcb-645d-4490-8eae-b78cd13406bb"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fe8a0bb4-1d8e-4062-b121-9276f943aa0d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:84144be1-dce0-41d0-a7ca-722ec54a8532"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:020677da-d862-461b-b95b-c4f6c3bbd11b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:020677da-d862-461b-b95b-c4f6c3bbd11b"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:844aa030-ca7a-48c2-8e28-3559386f8577"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:844aa030-ca7a-48c2-8e28-3559386f8577"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fe5043a5-82fe-4d84-92f9-0580d14e7ca0"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fe5043a5-82fe-4d84-92f9-0580d14e7ca0"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:855e67e3-4ac5-470f-acf9-79fe888b2114"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:855e67e3-4ac5-470f-acf9-79fe888b2114"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:7dd5510c-4b07-4a84-96be-fa34e689883d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:7dd5510c-4b07-4a84-96be-fa34e689883d"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:dfe74bcb-645d-4490-8eae-b78cd13406bb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:dfe74bcb-645d-4490-8eae-b78cd13406bb"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fe8a0bb4-1d8e-4062-b121-9276f943aa0d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fe8a0bb4-1d8e-4062-b121-9276f943aa0d"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:84144be1-dce0-41d0-a7ca-722ec54a8532"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:84144be1-dce0-41d0-a7ca-722ec54a8532"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:28a8f035-f27d-41f9-a360-3570f108271f"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:28a8f035-f27d-41f9-a360-3570f108271f"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-29T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:952ffb3d-d51c-4fc7-bb5e-70c143d4ab2d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:5fd2b0ff-74ea-4cb6-b760-37a6e1a54a25"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:787e0537-b38d-49bc-a713-55a201624afa"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:08283fc8-a98c-4919-8eb6-627dde75dca3"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:9176eb08-fca4-4196-aaff-072368314dd8"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:cf267525-b006-4988-b719-26ac3f57e1bb"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1a2de4ed-0374-49c6-b3f9-5415c5600673"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:3eddadb5-d42b-4a77-a4f3-acf98ae738be"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:03040492-a5c3-4aa9-a034-71c1e825bf37"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:18c75318-b1d8-4c3b-9dea-754148de91d9"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:91d0ac96-3d4f-4876-8df1-be0d81126a91"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:91d0ac96-3d4f-4876-8df1-be0d81126a91"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-30T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-30T00:00:00+02:00"></issued>
            <valueInteger value="67"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c226ee10-945a-4193-91a8-ef9da3abcf82"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c226ee10-945a-4193-91a8-ef9da3abcf82"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-30T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-30T00:00:00+02:00"></issued>
            <valueInteger value="44"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ed6b1402-c80f-48f0-9d37-5e0b131f4d68"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ed6b1402-c80f-48f0-9d37-5e0b131f4d68"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-30T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-30T00:00:00+02:00"></issued>
            <valueInteger value="1"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:867ecc19-4f90-4426-b46a-74162c87096b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:867ecc19-4f90-4426-b46a-74162c87096b"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-30T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-30T00:00:00+02:00"></issued>
            <valueInteger value="7006"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:07f3eb76-57a7-40b8-8bb9-4700951d0ff8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:07f3eb76-57a7-40b8-8bb9-4700951d0ff8"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-30T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-30T00:00:00+02:00"></issued>
            <valueInteger value="9"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ab2d818b-5c9d-4c8a-b43c-be5e3f8a239a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ab2d818b-5c9d-4c8a-b43c-be5e3f8a239a"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-30T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-30T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4a4558db-03fd-470d-beb3-2edb4afff07a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4a4558db-03fd-470d-beb3-2edb4afff07a"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-30T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-30T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9faba3b6-a5fb-4ddd-ae62-672f9a715457"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9faba3b6-a5fb-4ddd-ae62-672f9a715457"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-30T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-30T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:6dd28e99-aea2-4587-9608-98d55a325f1d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:6dd28e99-aea2-4587-9608-98d55a325f1d"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-30T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-30T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c3eed323-1387-4a79-b1ee-2c2c5d537550"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c3eed323-1387-4a79-b1ee-2c2c5d537550"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-30T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:d7927e83-dd7e-44cd-a056-472d23e5d22e"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:bc86253c-fd43-41b2-a199-e0459b47b90f"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:07e74d26-dc8c-4236-95f8-a8c3928a0e2a"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:77612783-8efe-4fb0-ad57-9f2de9419317"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:b85637f0-86a7-4f5b-86ff-b23e2bbf66c1"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:2fee838a-9b8a-4573-b569-4cad26c3c449"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:c2aec498-ea7b-4619-85f9-827a865b5904"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f6efdf42-ec59-436c-b9da-fcb1b7fbec2b"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d7927e83-dd7e-44cd-a056-472d23e5d22e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d7927e83-dd7e-44cd-a056-472d23e5d22e"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="3"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:bc86253c-fd43-41b2-a199-e0459b47b90f"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:bc86253c-fd43-41b2-a199-e0459b47b90f"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:07e74d26-dc8c-4236-95f8-a8c3928a0e2a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:07e74d26-dc8c-4236-95f8-a8c3928a0e2a"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:77612783-8efe-4fb0-ad57-9f2de9419317"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:77612783-8efe-4fb0-ad57-9f2de9419317"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b85637f0-86a7-4f5b-86ff-b23e2bbf66c1"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b85637f0-86a7-4f5b-86ff-b23e2bbf66c1"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2fee838a-9b8a-4573-b569-4cad26c3c449"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2fee838a-9b8a-4573-b569-4cad26c3c449"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="4"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c2aec498-ea7b-4619-85f9-827a865b5904"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c2aec498-ea7b-4619-85f9-827a865b5904"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f6efdf42-ec59-436c-b9da-fcb1b7fbec2b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f6efdf42-ec59-436c-b9da-fcb1b7fbec2b"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:98bb88f0-b634-4b43-ac9e-9e5440e0f4d6"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:98bb88f0-b634-4b43-ac9e-9e5440e0f4d6"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-30T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:91d0ac96-3d4f-4876-8df1-be0d81126a91"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:c226ee10-945a-4193-91a8-ef9da3abcf82"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ed6b1402-c80f-48f0-9d37-5e0b131f4d68"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:867ecc19-4f90-4426-b46a-74162c87096b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:07f3eb76-57a7-40b8-8bb9-4700951d0ff8"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ab2d818b-5c9d-4c8a-b43c-be5e3f8a239a"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:4a4558db-03fd-470d-beb3-2edb4afff07a"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:9faba3b6-a5fb-4ddd-ae62-672f9a715457"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:6dd28e99-aea2-4587-9608-98d55a325f1d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:c3eed323-1387-4a79-b1ee-2c2c5d537550"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e9fad078-cfd7-4c6d-b1e8-875adc133365"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e9fad078-cfd7-4c6d-b1e8-875adc133365"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-31T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-31T00:00:00+02:00"></issued>
            <valueInteger value="25"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a3b86667-f280-4e4e-bada-94c988558a9d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a3b86667-f280-4e4e-bada-94c988558a9d"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-31T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-31T00:00:00+02:00"></issued>
            <valueInteger value="40"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b5af0a8a-006b-41a6-bb0f-e0457f90603d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b5af0a8a-006b-41a6-bb0f-e0457f90603d"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-31T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-31T00:00:00+02:00"></issued>
            <valueInteger value="10"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a3365da4-76e8-496d-b173-ca6bc0833fb9"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a3365da4-76e8-496d-b173-ca6bc0833fb9"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-31T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-31T00:00:00+02:00"></issued>
            <valueInteger value="6406"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:dc26033f-d8b0-47cb-840e-f4c067518eb7"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:dc26033f-d8b0-47cb-840e-f4c067518eb7"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-31T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-31T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3f8baa05-d670-42b6-aa19-d9f5a6fb44a9"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3f8baa05-d670-42b6-aa19-d9f5a6fb44a9"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-31T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-31T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8a3a95e7-8e8d-4d0e-8d63-9614cfcb1b15"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8a3a95e7-8e8d-4d0e-8d63-9614cfcb1b15"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-31T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-31T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8d242f4d-4a39-4483-a540-b1b5841bc34e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8d242f4d-4a39-4483-a540-b1b5841bc34e"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-31T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-31T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1226c324-05ef-43fa-a0eb-71ed839c4620"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1226c324-05ef-43fa-a0eb-71ed839c4620"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-05-31T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-05-31T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ac563b65-a94b-41a3-9216-41887241377a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ac563b65-a94b-41a3-9216-41887241377a"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-31T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:4849f6f3-f8d7-4666-b01d-eebc63810bc4"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:09d110fb-8b7d-46c0-85f7-67e3e914dc2f"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:c9f7a344-a71f-4fe0-8513-53c0a9d4e5f6"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:2328117a-6a96-4c35-966c-cdb8efcb90cd"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:95f4699e-1c19-4ded-ae2c-8f068f57f5fd"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:401be697-d5bb-43cb-ad80-cb82a9422c5c"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:6b8d2988-136e-4500-bc27-2f4af41ab967"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:89f46968-6d46-49ec-8544-3faef222aa2e"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4849f6f3-f8d7-4666-b01d-eebc63810bc4"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4849f6f3-f8d7-4666-b01d-eebc63810bc4"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:09d110fb-8b7d-46c0-85f7-67e3e914dc2f"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:09d110fb-8b7d-46c0-85f7-67e3e914dc2f"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c9f7a344-a71f-4fe0-8513-53c0a9d4e5f6"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c9f7a344-a71f-4fe0-8513-53c0a9d4e5f6"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2328117a-6a96-4c35-966c-cdb8efcb90cd"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2328117a-6a96-4c35-966c-cdb8efcb90cd"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:95f4699e-1c19-4ded-ae2c-8f068f57f5fd"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:95f4699e-1c19-4ded-ae2c-8f068f57f5fd"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:401be697-d5bb-43cb-ad80-cb82a9422c5c"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:401be697-d5bb-43cb-ad80-cb82a9422c5c"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:6b8d2988-136e-4500-bc27-2f4af41ab967"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:6b8d2988-136e-4500-bc27-2f4af41ab967"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:89f46968-6d46-49ec-8544-3faef222aa2e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:89f46968-6d46-49ec-8544-3faef222aa2e"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:efcd8c76-9143-4372-ab4e-d4c2d3108ba5"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:efcd8c76-9143-4372-ab4e-d4c2d3108ba5"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-31T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:e9fad078-cfd7-4c6d-b1e8-875adc133365"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:a3b86667-f280-4e4e-bada-94c988558a9d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:b5af0a8a-006b-41a6-bb0f-e0457f90603d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:a3365da4-76e8-496d-b173-ca6bc0833fb9"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:dc26033f-d8b0-47cb-840e-f4c067518eb7"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:3f8baa05-d670-42b6-aa19-d9f5a6fb44a9"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:8a3a95e7-8e8d-4d0e-8d63-9614cfcb1b15"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:8d242f4d-4a39-4483-a540-b1b5841bc34e"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1226c324-05ef-43fa-a0eb-71ed839c4620"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ac563b65-a94b-41a3-9216-41887241377a"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:83a0d06f-7ad1-4efc-b03b-9caa21a07469"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:83a0d06f-7ad1-4efc-b03b-9caa21a07469"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-01T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-01T00:00:00+02:00"></issued>
            <valueInteger value="12"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1bd56427-d961-4dba-bebf-f39835693268"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1bd56427-d961-4dba-bebf-f39835693268"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-01T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-01T00:00:00+02:00"></issued>
            <valueInteger value="27"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:85757ced-16bb-45f7-af6f-7674e6829956"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:85757ced-16bb-45f7-af6f-7674e6829956"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-01T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-01T00:00:00+02:00"></issued>
            <valueInteger value="22"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:acce36c5-9613-4ea6-9c99-bc8599ef2497"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:acce36c5-9613-4ea6-9c99-bc8599ef2497"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-01T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-01T00:00:00+02:00"></issued>
            <valueInteger value="7945"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d2c5610a-4f18-4c9a-aa06-2e3198b6c8de"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d2c5610a-4f18-4c9a-aa06-2e3198b6c8de"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-01T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-01T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ae1dad66-f287-4971-a7d2-93326c44ab3b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ae1dad66-f287-4971-a7d2-93326c44ab3b"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-01T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-01T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8d0bdbc1-6906-4cf6-a35b-f8c474bf3b8e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8d0bdbc1-6906-4cf6-a35b-f8c474bf3b8e"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-01T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-01T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8ac41b8e-e48b-43db-b0b4-f13375b8842a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8ac41b8e-e48b-43db-b0b4-f13375b8842a"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-01T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-01T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c98f57f8-1ce5-4aea-a0ff-ffffd64c3d69"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c98f57f8-1ce5-4aea-a0ff-ffffd64c3d69"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-01T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-01T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:dacaa55a-bc30-420d-afae-a56f18ced7ba"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:dacaa55a-bc30-420d-afae-a56f18ced7ba"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-01T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:f8ead145-12d6-4d06-9adf-1d4ede7593b6"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:39b33780-4f95-44ae-8f03-650e84bb1226"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:aeceb329-77b9-4f01-b119-edd07d270537"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0771b68b-0c06-42e3-b1d5-b4a1a61bd642"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:29c41430-592a-4f4b-b137-a8aa036789e6"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1236c2be-2534-4e90-b2b4-8eab7eb8a990"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:3f060faf-8f29-4f41-8c75-d97562220ca3"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1f545567-f506-433d-bd74-4c4884b416a3"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f8ead145-12d6-4d06-9adf-1d4ede7593b6"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f8ead145-12d6-4d06-9adf-1d4ede7593b6"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:39b33780-4f95-44ae-8f03-650e84bb1226"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:39b33780-4f95-44ae-8f03-650e84bb1226"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:aeceb329-77b9-4f01-b119-edd07d270537"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:aeceb329-77b9-4f01-b119-edd07d270537"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0771b68b-0c06-42e3-b1d5-b4a1a61bd642"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0771b68b-0c06-42e3-b1d5-b4a1a61bd642"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:29c41430-592a-4f4b-b137-a8aa036789e6"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:29c41430-592a-4f4b-b137-a8aa036789e6"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1236c2be-2534-4e90-b2b4-8eab7eb8a990"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1236c2be-2534-4e90-b2b4-8eab7eb8a990"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3f060faf-8f29-4f41-8c75-d97562220ca3"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3f060faf-8f29-4f41-8c75-d97562220ca3"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1f545567-f506-433d-bd74-4c4884b416a3"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1f545567-f506-433d-bd74-4c4884b416a3"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:774a11e9-a5d1-4365-874e-1ddd66f311b8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:774a11e9-a5d1-4365-874e-1ddd66f311b8"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-01T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:83a0d06f-7ad1-4efc-b03b-9caa21a07469"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1bd56427-d961-4dba-bebf-f39835693268"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:85757ced-16bb-45f7-af6f-7674e6829956"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:acce36c5-9613-4ea6-9c99-bc8599ef2497"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d2c5610a-4f18-4c9a-aa06-2e3198b6c8de"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ae1dad66-f287-4971-a7d2-93326c44ab3b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:8d0bdbc1-6906-4cf6-a35b-f8c474bf3b8e"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:8ac41b8e-e48b-43db-b0b4-f13375b8842a"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:c98f57f8-1ce5-4aea-a0ff-ffffd64c3d69"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:dacaa55a-bc30-420d-afae-a56f18ced7ba"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d0ed5bc0-7c16-4558-a3cd-df6050fad7de"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d0ed5bc0-7c16-4558-a3cd-df6050fad7de"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-02T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-02T00:00:00+02:00"></issued>
            <valueInteger value="6"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f4bf8543-5477-4f27-9f72-e5cb5a35c991"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f4bf8543-5477-4f27-9f72-e5cb5a35c991"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-02T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-02T00:00:00+02:00"></issued>
            <valueInteger value="73"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4340f70d-0010-4c71-90c9-25ed8b50b196"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4340f70d-0010-4c71-90c9-25ed8b50b196"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-02T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-02T00:00:00+02:00"></issued>
            <valueInteger value="74"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d303b72a-2e8a-4708-8358-41e4e99b9d8a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d303b72a-2e8a-4708-8358-41e4e99b9d8a"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-02T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-02T00:00:00+02:00"></issued>
            <valueInteger value="8708"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f71ad080-69ef-4e62-8aae-4918eeb6c544"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f71ad080-69ef-4e62-8aae-4918eeb6c544"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-02T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-02T00:00:00+02:00"></issued>
            <valueInteger value="9"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4bc003f7-dcd8-4e6c-a627-32fc50952ced"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4bc003f7-dcd8-4e6c-a627-32fc50952ced"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-02T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-02T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:37b076cf-0ad8-476e-b766-3cbb7787a4fb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:37b076cf-0ad8-476e-b766-3cbb7787a4fb"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-02T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-02T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:6236a433-d3ee-4da6-b18e-f8168dd588d6"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:6236a433-d3ee-4da6-b18e-f8168dd588d6"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-02T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-02T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d3e865e7-f638-4b69-ab69-8d42c684a679"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d3e865e7-f638-4b69-ab69-8d42c684a679"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-02T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-02T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:cd8b076e-a12a-4728-88f5-6b8202ce879c"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:cd8b076e-a12a-4728-88f5-6b8202ce879c"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-02T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:9dfcf7a5-a461-46d2-b753-46316a2c7b95"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:9bd54551-9b6a-4f76-8740-45bbc84c2134"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f4cc94c5-2d27-4ebb-a3d9-3c24cdc37616"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:705b86ff-e8a5-4293-8ad8-539bd87fb349"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1c0ff3c1-0cf9-4b54-8f41-78fed082d1af"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1d69f16c-9990-48db-a625-7fffcd786c19"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:247cc434-2785-4ca2-9e04-b4b95ea12a8e"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:11f4872c-e2a2-4278-98d0-ce52d05fddfb"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9dfcf7a5-a461-46d2-b753-46316a2c7b95"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9dfcf7a5-a461-46d2-b753-46316a2c7b95"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9bd54551-9b6a-4f76-8740-45bbc84c2134"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9bd54551-9b6a-4f76-8740-45bbc84c2134"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f4cc94c5-2d27-4ebb-a3d9-3c24cdc37616"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f4cc94c5-2d27-4ebb-a3d9-3c24cdc37616"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:705b86ff-e8a5-4293-8ad8-539bd87fb349"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:705b86ff-e8a5-4293-8ad8-539bd87fb349"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1c0ff3c1-0cf9-4b54-8f41-78fed082d1af"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1c0ff3c1-0cf9-4b54-8f41-78fed082d1af"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1d69f16c-9990-48db-a625-7fffcd786c19"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1d69f16c-9990-48db-a625-7fffcd786c19"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="3"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:247cc434-2785-4ca2-9e04-b4b95ea12a8e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:247cc434-2785-4ca2-9e04-b4b95ea12a8e"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:11f4872c-e2a2-4278-98d0-ce52d05fddfb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:11f4872c-e2a2-4278-98d0-ce52d05fddfb"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2e37d66e-6e05-480e-bd8b-1764c7062d6b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2e37d66e-6e05-480e-bd8b-1764c7062d6b"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-02T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:d0ed5bc0-7c16-4558-a3cd-df6050fad7de"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f4bf8543-5477-4f27-9f72-e5cb5a35c991"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:4340f70d-0010-4c71-90c9-25ed8b50b196"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d303b72a-2e8a-4708-8358-41e4e99b9d8a"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f71ad080-69ef-4e62-8aae-4918eeb6c544"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:4bc003f7-dcd8-4e6c-a627-32fc50952ced"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:37b076cf-0ad8-476e-b766-3cbb7787a4fb"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:6236a433-d3ee-4da6-b18e-f8168dd588d6"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d3e865e7-f638-4b69-ab69-8d42c684a679"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:cd8b076e-a12a-4728-88f5-6b8202ce879c"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:33587cf2-c6e8-4cb1-94c5-29b757496058"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:33587cf2-c6e8-4cb1-94c5-29b757496058"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-03T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-03T00:00:00+02:00"></issued>
            <valueInteger value="34"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:76eeacc0-a6e8-47a3-8d44-1b0c556ff8c9"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:76eeacc0-a6e8-47a3-8d44-1b0c556ff8c9"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-03T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-03T00:00:00+02:00"></issued>
            <valueInteger value="35"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5ffbdb12-c620-4b8a-a9c5-19fad79dcc8a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5ffbdb12-c620-4b8a-a9c5-19fad79dcc8a"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-03T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-03T00:00:00+02:00"></issued>
            <valueInteger value="0"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:10ede3c7-f325-42a7-9b9c-bf16db0a0cc5"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:10ede3c7-f325-42a7-9b9c-bf16db0a0cc5"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-03T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-03T00:00:00+02:00"></issued>
            <valueInteger value="7741"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:53e09a1d-65a1-4391-90b2-0acd2a27054d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:53e09a1d-65a1-4391-90b2-0acd2a27054d"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-03T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-03T00:00:00+02:00"></issued>
            <valueInteger value="9"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d5b4292f-4a41-44f0-bb04-22a32cff034c"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d5b4292f-4a41-44f0-bb04-22a32cff034c"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-03T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-03T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:503ef0f7-fa49-4b34-ba4f-f6e245f331c4"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:503ef0f7-fa49-4b34-ba4f-f6e245f331c4"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-03T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-03T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b2fbfb13-b067-4b26-82a3-f0f1b862de13"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b2fbfb13-b067-4b26-82a3-f0f1b862de13"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-03T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-03T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:839fcb86-b58f-40c0-922b-b9bbd5acb0a1"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:839fcb86-b58f-40c0-922b-b9bbd5acb0a1"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-03T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-03T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fc5ae1b8-c2ae-464b-a703-cad80ab4652c"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fc5ae1b8-c2ae-464b-a703-cad80ab4652c"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-03T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:0a445b5f-aadb-4b80-a829-182787b2edcf"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:49c86be1-3ed2-43e5-b43a-985e3b4ac01f"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:8bc4255f-ac24-4511-9ddf-1a33f7c18d01"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:c5d2e393-60f8-4db6-bd5d-7d9c1435358b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:90680f41-f5f0-451b-acb8-d320768c68e8"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:a22e30ee-624a-4e49-9a74-9b384b153708"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:207372aa-98e4-4330-bdf8-f3306c34e487"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:bc9fa261-9919-4f04-af25-f36788344b7a"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0a445b5f-aadb-4b80-a829-182787b2edcf"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0a445b5f-aadb-4b80-a829-182787b2edcf"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:49c86be1-3ed2-43e5-b43a-985e3b4ac01f"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:49c86be1-3ed2-43e5-b43a-985e3b4ac01f"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="3"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8bc4255f-ac24-4511-9ddf-1a33f7c18d01"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8bc4255f-ac24-4511-9ddf-1a33f7c18d01"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c5d2e393-60f8-4db6-bd5d-7d9c1435358b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c5d2e393-60f8-4db6-bd5d-7d9c1435358b"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:90680f41-f5f0-451b-acb8-d320768c68e8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:90680f41-f5f0-451b-acb8-d320768c68e8"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a22e30ee-624a-4e49-9a74-9b384b153708"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a22e30ee-624a-4e49-9a74-9b384b153708"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="4"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:207372aa-98e4-4330-bdf8-f3306c34e487"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:207372aa-98e4-4330-bdf8-f3306c34e487"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="1"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:bc9fa261-9919-4f04-af25-f36788344b7a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:bc9fa261-9919-4f04-af25-f36788344b7a"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="2"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4bfdbe6a-bbc7-4b88-bedb-9a895ddb1c59"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4bfdbe6a-bbc7-4b88-bedb-9a895ddb1c59"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-03T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:33587cf2-c6e8-4cb1-94c5-29b757496058"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:76eeacc0-a6e8-47a3-8d44-1b0c556ff8c9"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:5ffbdb12-c620-4b8a-a9c5-19fad79dcc8a"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:10ede3c7-f325-42a7-9b9c-bf16db0a0cc5"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:53e09a1d-65a1-4391-90b2-0acd2a27054d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d5b4292f-4a41-44f0-bb04-22a32cff034c"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:503ef0f7-fa49-4b34-ba4f-f6e245f331c4"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:b2fbfb13-b067-4b26-82a3-f0f1b862de13"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:839fcb86-b58f-40c0-922b-b9bbd5acb0a1"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fc5ae1b8-c2ae-464b-a703-cad80ab4652c"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e7fdfee0-5d06-4e35-857c-14913e1e8adc"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e7fdfee0-5d06-4e35-857c-14913e1e8adc"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-04T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-04T00:00:00+02:00"></issued>
            <valueInteger value="56"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:12a4923e-7ffe-4483-a0e9-8583eb9d8cb2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:12a4923e-7ffe-4483-a0e9-8583eb9d8cb2"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-04T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-04T00:00:00+02:00"></issued>
            <valueInteger value="18"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0daa3896-28d8-4d9f-942d-53e1f9b8d4a8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0daa3896-28d8-4d9f-942d-53e1f9b8d4a8"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-04T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-04T00:00:00+02:00"></issued>
            <valueInteger value="10"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9d1fb79c-6c37-46e2-a6d8-87152231d307"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9d1fb79c-6c37-46e2-a6d8-87152231d307"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-04T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-04T00:00:00+02:00"></issued>
            <valueInteger value="7848"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:03d8cc5e-ea43-41ae-9ecf-99dde7b5a06c"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:03d8cc5e-ea43-41ae-9ecf-99dde7b5a06c"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-04T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-04T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b1306eaa-36f0-4b67-b2e4-823064140b01"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b1306eaa-36f0-4b67-b2e4-823064140b01"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-04T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-04T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f98e2527-86ca-4c94-8866-631651815f5e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f98e2527-86ca-4c94-8866-631651815f5e"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-04T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-04T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:80184f83-0da9-4fdf-a96e-0c2ed14a4bed"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:80184f83-0da9-4fdf-a96e-0c2ed14a4bed"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-04T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-04T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:878763e1-2ac3-476a-b93b-40ff65e69cdf"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:878763e1-2ac3-476a-b93b-40ff65e69cdf"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-04T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-04T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0c75875c-4681-405f-943f-2815b4b716d5"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0c75875c-4681-405f-943f-2815b4b716d5"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-04T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:ee23286c-4506-4359-9414-1ed0df666eef"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fb45e6c4-8bb6-4a64-be8c-ed7300db2e11"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:16b0ba21-3b04-48a6-9006-4040dde27613"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1de2e768-3035-4bf1-8b86-942fb1ce325f"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:e5e3a186-f39d-47c4-8f83-64e5a54e53b9"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:4c93eeb8-a1a6-4616-9b6a-3826aec1d585"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:5b6835ac-e7d5-4565-8a1b-8d4fee1bf231"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ce98b61e-6c69-4d95-9462-89c236dae366"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ee23286c-4506-4359-9414-1ed0df666eef"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ee23286c-4506-4359-9414-1ed0df666eef"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fb45e6c4-8bb6-4a64-be8c-ed7300db2e11"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fb45e6c4-8bb6-4a64-be8c-ed7300db2e11"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:16b0ba21-3b04-48a6-9006-4040dde27613"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:16b0ba21-3b04-48a6-9006-4040dde27613"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1de2e768-3035-4bf1-8b86-942fb1ce325f"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1de2e768-3035-4bf1-8b86-942fb1ce325f"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e5e3a186-f39d-47c4-8f83-64e5a54e53b9"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e5e3a186-f39d-47c4-8f83-64e5a54e53b9"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4c93eeb8-a1a6-4616-9b6a-3826aec1d585"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4c93eeb8-a1a6-4616-9b6a-3826aec1d585"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5b6835ac-e7d5-4565-8a1b-8d4fee1bf231"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5b6835ac-e7d5-4565-8a1b-8d4fee1bf231"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ce98b61e-6c69-4d95-9462-89c236dae366"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ce98b61e-6c69-4d95-9462-89c236dae366"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ef3e5876-6092-4077-8a12-70431aa32be5"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ef3e5876-6092-4077-8a12-70431aa32be5"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-04T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:e7fdfee0-5d06-4e35-857c-14913e1e8adc"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:12a4923e-7ffe-4483-a0e9-8583eb9d8cb2"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0daa3896-28d8-4d9f-942d-53e1f9b8d4a8"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:9d1fb79c-6c37-46e2-a6d8-87152231d307"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:03d8cc5e-ea43-41ae-9ecf-99dde7b5a06c"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:b1306eaa-36f0-4b67-b2e4-823064140b01"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f98e2527-86ca-4c94-8866-631651815f5e"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:80184f83-0da9-4fdf-a96e-0c2ed14a4bed"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:878763e1-2ac3-476a-b93b-40ff65e69cdf"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0c75875c-4681-405f-943f-2815b4b716d5"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e7117ae7-e934-4b75-a24c-5f116c8e4713"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e7117ae7-e934-4b75-a24c-5f116c8e4713"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-05T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-05T00:00:00+02:00"></issued>
            <valueInteger value="13"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:bfa92095-fb2a-4ee7-84bb-d9fd0602b19d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:bfa92095-fb2a-4ee7-84bb-d9fd0602b19d"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-05T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-05T00:00:00+02:00"></issued>
            <valueInteger value="47"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:6e6cb3a8-d667-495b-a7f6-fed27dffa621"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:6e6cb3a8-d667-495b-a7f6-fed27dffa621"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-05T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-05T00:00:00+02:00"></issued>
            <valueInteger value="3"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2e773b01-77c1-4ee2-8c62-533604975779"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2e773b01-77c1-4ee2-8c62-533604975779"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-05T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-05T00:00:00+02:00"></issued>
            <valueInteger value="4793"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:7365958d-b2ef-4e3c-8c0e-80279cdf5da3"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:7365958d-b2ef-4e3c-8c0e-80279cdf5da3"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-05T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-05T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:69236d8a-90b2-4249-8892-74dd4e416026"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:69236d8a-90b2-4249-8892-74dd4e416026"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-05T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-05T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:27446442-1385-440b-9b05-1ad0137c9681"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:27446442-1385-440b-9b05-1ad0137c9681"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-05T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-05T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:40a26f36-8fdf-4e92-83ce-e682146a27e2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:40a26f36-8fdf-4e92-83ce-e682146a27e2"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-05T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-05T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:6baddb29-9f41-461e-8271-17d0739995b2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:6baddb29-9f41-461e-8271-17d0739995b2"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-05T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-05T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2200581d-d8f8-4eaa-b2b2-392dc25c29b8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2200581d-d8f8-4eaa-b2b2-392dc25c29b8"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-05T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:ab00eabc-07e5-46e3-a91e-80fe7c8ec955"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:5938b1b8-df77-4f91-bb66-ca431bc42e79"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:a0824f2e-e4c1-4aae-8ab9-46374c7bbe84"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d8e108ab-6b7f-4dbd-a84c-d79989cf3166"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:62da7206-5399-42fc-95ba-b941672286e2"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:65555990-361c-43a8-ad7a-1ffc28512155"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1e01be32-deb4-472a-bc53-0dc5cb2778a3"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:e529c33c-5e8b-4298-9bef-0a997a0c346a"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ab00eabc-07e5-46e3-a91e-80fe7c8ec955"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ab00eabc-07e5-46e3-a91e-80fe7c8ec955"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5938b1b8-df77-4f91-bb66-ca431bc42e79"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5938b1b8-df77-4f91-bb66-ca431bc42e79"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a0824f2e-e4c1-4aae-8ab9-46374c7bbe84"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a0824f2e-e4c1-4aae-8ab9-46374c7bbe84"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d8e108ab-6b7f-4dbd-a84c-d79989cf3166"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d8e108ab-6b7f-4dbd-a84c-d79989cf3166"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:62da7206-5399-42fc-95ba-b941672286e2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:62da7206-5399-42fc-95ba-b941672286e2"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:65555990-361c-43a8-ad7a-1ffc28512155"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:65555990-361c-43a8-ad7a-1ffc28512155"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1e01be32-deb4-472a-bc53-0dc5cb2778a3"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1e01be32-deb4-472a-bc53-0dc5cb2778a3"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e529c33c-5e8b-4298-9bef-0a997a0c346a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e529c33c-5e8b-4298-9bef-0a997a0c346a"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:70f1e060-0804-43f0-b2f2-732567736815"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:70f1e060-0804-43f0-b2f2-732567736815"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-05T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:e7117ae7-e934-4b75-a24c-5f116c8e4713"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:bfa92095-fb2a-4ee7-84bb-d9fd0602b19d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:6e6cb3a8-d667-495b-a7f6-fed27dffa621"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:2e773b01-77c1-4ee2-8c62-533604975779"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:7365958d-b2ef-4e3c-8c0e-80279cdf5da3"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:69236d8a-90b2-4249-8892-74dd4e416026"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:27446442-1385-440b-9b05-1ad0137c9681"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:40a26f36-8fdf-4e92-83ce-e682146a27e2"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:6baddb29-9f41-461e-8271-17d0739995b2"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:2200581d-d8f8-4eaa-b2b2-392dc25c29b8"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3ef0ada0-b5ae-4465-afbc-174e0df101cf"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3ef0ada0-b5ae-4465-afbc-174e0df101cf"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <valueInteger value="81"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:72cbf6ce-03b4-4eb5-a08c-bba7f90aa5a3"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:72cbf6ce-03b4-4eb5-a08c-bba7f90aa5a3"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <valueInteger value="29"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f87369b5-9f26-41a8-907d-fc10e4da63f2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f87369b5-9f26-41a8-907d-fc10e4da63f2"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <valueInteger value="20"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a62ceb6b-7bf2-4882-bca4-39379b2bd057"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a62ceb6b-7bf2-4882-bca4-39379b2bd057"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <valueInteger value="5770"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9505f913-5651-43e2-9dc0-5f81d2b23c93"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9505f913-5651-43e2-9dc0-5f81d2b23c93"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d1d09928-a6cc-4151-9465-0f250a872d9f"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d1d09928-a6cc-4151-9465-0f250a872d9f"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:6e38c6c2-131d-4be8-a043-e5251a5c3f68"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:6e38c6c2-131d-4be8-a043-e5251a5c3f68"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b8e40949-5cb9-4ac1-a14a-ac1fea3fc54b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b8e40949-5cb9-4ac1-a14a-ac1fea3fc54b"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0f3e3e37-aa5c-4fa0-92a2-6ee82b9209fa"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0f3e3e37-aa5c-4fa0-92a2-6ee82b9209fa"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:64250dab-e86e-4f84-ab92-750002dd4dce"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:64250dab-e86e-4f84-ab92-750002dd4dce"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-06T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:fdb72f70-1f92-4209-ade2-c23d0f83ba38"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:1713ff79-a591-4656-b761-04a374bb3ee0"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f32122a5-d8a7-4c73-9779-94a5cbacdd4d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0ef8efbf-803f-4375-8bb4-4cf3e1888194"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fe652106-5ac0-46ce-900f-c7df1f51d35d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:21abfcd3-409b-4171-8c43-ee286a5c2cb6"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:bdde299e-59c9-4686-b512-a83ba60fcd5d"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:450c3f32-68b4-44ec-8fa8-6df1e6723525"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fdb72f70-1f92-4209-ade2-c23d0f83ba38"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fdb72f70-1f92-4209-ade2-c23d0f83ba38"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1713ff79-a591-4656-b761-04a374bb3ee0"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1713ff79-a591-4656-b761-04a374bb3ee0"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f32122a5-d8a7-4c73-9779-94a5cbacdd4d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f32122a5-d8a7-4c73-9779-94a5cbacdd4d"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0ef8efbf-803f-4375-8bb4-4cf3e1888194"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0ef8efbf-803f-4375-8bb4-4cf3e1888194"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fe652106-5ac0-46ce-900f-c7df1f51d35d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fe652106-5ac0-46ce-900f-c7df1f51d35d"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:21abfcd3-409b-4171-8c43-ee286a5c2cb6"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:21abfcd3-409b-4171-8c43-ee286a5c2cb6"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:bdde299e-59c9-4686-b512-a83ba60fcd5d"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:bdde299e-59c9-4686-b512-a83ba60fcd5d"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:450c3f32-68b4-44ec-8fa8-6df1e6723525"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:450c3f32-68b4-44ec-8fa8-6df1e6723525"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f6b5c0c5-1586-4e06-b5e0-36cd32d69e0e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f6b5c0c5-1586-4e06-b5e0-36cd32d69e0e"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-06T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:3ef0ada0-b5ae-4465-afbc-174e0df101cf"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:72cbf6ce-03b4-4eb5-a08c-bba7f90aa5a3"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f87369b5-9f26-41a8-907d-fc10e4da63f2"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:a62ceb6b-7bf2-4882-bca4-39379b2bd057"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:9505f913-5651-43e2-9dc0-5f81d2b23c93"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d1d09928-a6cc-4151-9465-0f250a872d9f"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:6e38c6c2-131d-4be8-a043-e5251a5c3f68"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:b8e40949-5cb9-4ac1-a14a-ac1fea3fc54b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0f3e3e37-aa5c-4fa0-92a2-6ee82b9209fa"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:64250dab-e86e-4f84-ab92-750002dd4dce"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:36c741e8-720c-4f53-9763-6d04ddfe8e83"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - geringe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:36c741e8-720c-4f53-9763-6d04ddfe8e83"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - geringe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <valueInteger value="81"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c3996d4a-8a41-4d17-a151-39a91a690357"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - mittlere Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c3996d4a-8a41-4d17-a151-39a91a690357"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - mittlere Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <valueInteger value="29"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e659ab12-ad0a-4bf7-8d19-acd5897efb29"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - hohe Intensit&#xe4;t
                    (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e659ab12-ad0a-4bf7-8d19-acd5897efb29"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - hohe Intensit&#xe4;t (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <valueInteger value="20"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4bb09837-7141-4470-8c44-961327e28329"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Bewegung - Schritte (Tracker)</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4bb09837-7141-4470-8c44-961327e28329"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Bewegung - Schritte (Tracker)"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <valueInteger value="5688"></valueInteger>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5984339a-7346-42e6-9cf7-1221a005a8b8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Nahrungsmitteleinnahme</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5984339a-7346-42e6-9cf7-1221a005a8b8"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Nahrungsmitteleinnahme"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:054de98d-9bee-41f8-91a0-58ae16a8896c"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Anzahl Zigaretten</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:054de98d-9bee-41f8-91a0-58ae16a8896c"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Anzahl Zigaretten"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:764d8236-f921-4d8c-84e1-ee72d95ef8f2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Genussmittel - Portionen Alkohol</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:764d8236-f921-4d8c-84e1-ee72d95ef8f2"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Genussmittel - Portionen Alkohol"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d211ad14-ef55-47a3-8187-b8bb5970c24c"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - Achtsamkeit</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d211ad14-ef55-47a3-8187-b8bb5970c24c"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - Achtsamkeit"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:59b3428c-8359-437d-a2a0-1b698ad096f5"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Entspannung - andere Technik</div>
            </text>
            <identifier>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:59b3428c-8359-437d-a2a0-1b698ad096f5"></value>
            </identifier>
            <status value="registered"></status>
            <code>
                <text value="Entspannung - andere Technik"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveInstant value="2024-06-06T00:00:00+02:00"></effectiveInstant>
            <issued value="2024-06-06T00:00:00+02:00"></issued>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:110d519e-2a36-4ea6-99a0-d8210ae06b03"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:110d519e-2a36-4ea6-99a0-d8210ae06b03"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="Anteile der Ern&#xe4;hrung"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-06T00:00:00+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <hasMember>
                <reference value="urn:uuid:3db47d76-b2c2-4ddd-8e27-fe29dcfec9e8"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:72c5fc48-9929-47a9-9e8c-45463ff04049"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:cbe40662-afc7-4293-993c-86c63c29b1d6"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:33f8a86c-4351-4962-a29a-84fea7baa48b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:205e1db3-7b93-4358-bfe2-73e79e9af1bc"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:6641e3bf-8a34-4eae-9317-2301d1856e8b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:147e3c9d-d634-4590-b7b6-b270541da293"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:9f775ca6-852f-4c22-80bc-599db04b3a45"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3db47d76-b2c2-4ddd-8e27-fe29dcfec9e8"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3db47d76-b2c2-4ddd-8e27-fe29dcfec9e8"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="vegetables"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:72c5fc48-9929-47a9-9e8c-45463ff04049"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:72c5fc48-9929-47a9-9e8c-45463ff04049"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="fruits"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:cbe40662-afc7-4293-993c-86c63c29b1d6"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:cbe40662-afc7-4293-993c-86c63c29b1d6"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="wholeGrain"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:33f8a86c-4351-4962-a29a-84fea7baa48b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:33f8a86c-4351-4962-a29a-84fea7baa48b"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="lowFatMilk"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:205e1db3-7b93-4358-bfe2-73e79e9af1bc"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:205e1db3-7b93-4358-bfe2-73e79e9af1bc"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="goodFats"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:6641e3bf-8a34-4eae-9317-2301d1856e8b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:6641e3bf-8a34-4eae-9317-2301d1856e8b"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="salt"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:147e3c9d-d634-4590-b7b6-b270541da293"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:147e3c9d-d634-4590-b7b6-b270541da293"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="redMeat"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9f775ca6-852f-4c22-80bc-599db04b3a45"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9f775ca6-852f-4c22-80bc-599db04b3a45"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="229957008"></code>
                    <display value="Food composition types (substance)"></display>
                </coding>
            </category>
            <code>
                <text value="sugar"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="0"></value>
            </valueQuantity>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a9ea3010-9571-4f5b-801a-6455f1823558"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Zusammenfassung mehrerer Einzelwerte,
                    die als Tagebucheintrag bzw. Bluthochdruck-Protokoll fungieren</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a9ea3010-9571-4f5b-801a-6455f1823558"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-06T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:36c741e8-720c-4f53-9763-6d04ddfe8e83"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:c3996d4a-8a41-4d17-a151-39a91a690357"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:e659ab12-ad0a-4bf7-8d19-acd5897efb29"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:4bb09837-7141-4470-8c44-961327e28329"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:5984339a-7346-42e6-9cf7-1221a005a8b8"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:054de98d-9bee-41f8-91a0-58ae16a8896c"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:764d8236-f921-4d8c-84e1-ee72d95ef8f2"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d211ad14-ef55-47a3-8187-b8bb5970c24c"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:59b3428c-8359-437d-a2a0-1b698ad096f5"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:110d519e-2a36-4ea6-99a0-d8210ae06b03"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:031db8a7-73b3-4fc3-971f-41e26e570e56"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:031db8a7-73b3-4fc3-971f-41e26e570e56"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-22T15:30:53+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="138"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="86"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ab39c047-3dfc-4a62-97c6-7148eb7d4f07"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ab39c047-3dfc-4a62-97c6-7148eb7d4f07"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-22T15:30:53+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="78"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b75dee2a-c221-4cee-98f1-0ca49ffe9a78"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b75dee2a-c221-4cee-98f1-0ca49ffe9a78"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-22T15:30:53+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:7aae2235-e2c0-4abd-a85f-de5a910d2450"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:7aae2235-e2c0-4abd-a85f-de5a910d2450"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-22T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:031db8a7-73b3-4fc3-971f-41e26e570e56"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ab39c047-3dfc-4a62-97c6-7148eb7d4f07"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:b75dee2a-c221-4cee-98f1-0ca49ffe9a78"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ded14ad7-c114-4ffa-a43a-8927e73f1e5b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ded14ad7-c114-4ffa-a43a-8927e73f1e5b"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-23T08:46:54+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="136"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="78"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:aaf872d4-df7b-412a-a7ae-cec0b8c72833"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:aaf872d4-df7b-412a-a7ae-cec0b8c72833"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-23T08:46:54+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="75"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e8cda6c2-ef3e-4d69-8f48-0d2bd50ce4aa"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e8cda6c2-ef3e-4d69-8f48-0d2bd50ce4aa"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-23T08:46:54+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:7115fae1-66b5-4beb-a124-4fba06374b4e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:7115fae1-66b5-4beb-a124-4fba06374b4e"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-23T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:ded14ad7-c114-4ffa-a43a-8927e73f1e5b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:aaf872d4-df7b-412a-a7ae-cec0b8c72833"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:e8cda6c2-ef3e-4d69-8f48-0d2bd50ce4aa"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ab141d66-e714-4ffc-a353-0fa5dcfa753c"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ab141d66-e714-4ffc-a353-0fa5dcfa753c"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-24T10:51:58+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="132"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="72"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0cceb73a-f9ba-4a0a-9d00-0170c5100d22"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0cceb73a-f9ba-4a0a-9d00-0170c5100d22"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-24T10:51:58+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="71"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:0f8798a6-6ff0-48ad-95e2-413c9230e3de"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:0f8798a6-6ff0-48ad-95e2-413c9230e3de"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-24T10:51:58+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3a7c17ce-aa93-4641-8af7-10efddc63509"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3a7c17ce-aa93-4641-8af7-10efddc63509"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-24T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:ab141d66-e714-4ffc-a353-0fa5dcfa753c"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0cceb73a-f9ba-4a0a-9d00-0170c5100d22"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:0f8798a6-6ff0-48ad-95e2-413c9230e3de"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d8dea393-e099-456a-b65a-514f53b305fb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d8dea393-e099-456a-b65a-514f53b305fb"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-25T14:13:47+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="128"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="75"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:db8c962e-b222-4afa-9452-e3d45798fe51"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:db8c962e-b222-4afa-9452-e3d45798fe51"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-25T14:13:47+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="70"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:eec1cb87-ae5d-47f2-bb0f-f288d1244284"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:eec1cb87-ae5d-47f2-bb0f-f288d1244284"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-25T14:13:47+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:304e0713-36fa-44ad-9a09-a86cbaa226bc"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:304e0713-36fa-44ad-9a09-a86cbaa226bc"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-25T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:d8dea393-e099-456a-b65a-514f53b305fb"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:db8c962e-b222-4afa-9452-e3d45798fe51"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:eec1cb87-ae5d-47f2-bb0f-f288d1244284"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f79ae4c5-986a-4465-acc6-80ba1181df83"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f79ae4c5-986a-4465-acc6-80ba1181df83"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-29T12:00:07+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="124"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="83"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:62f9f351-80cc-486f-b3f2-3b9e9550ac50"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:62f9f351-80cc-486f-b3f2-3b9e9550ac50"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-29T12:00:07+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="79"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d339e0ba-7b84-4905-a616-97f3ee9660b2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d339e0ba-7b84-4905-a616-97f3ee9660b2"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-29T12:00:07+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f7f62238-1d9b-47fe-8b72-b06db697fe5a"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f7f62238-1d9b-47fe-8b72-b06db697fe5a"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-29T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:f79ae4c5-986a-4465-acc6-80ba1181df83"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:62f9f351-80cc-486f-b3f2-3b9e9550ac50"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:d339e0ba-7b84-4905-a616-97f3ee9660b2"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:233bba9d-0387-4c32-ad3c-d1cef04faf51"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:233bba9d-0387-4c32-ad3c-d1cef04faf51"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-30T08:52:29+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="128"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="74"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f49d2791-6d29-48e9-9e5b-c40700a64cdf"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f49d2791-6d29-48e9-9e5b-c40700a64cdf"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-30T08:52:29+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="74"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ea23675b-79cc-4b37-a01d-188435958b07"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ea23675b-79cc-4b37-a01d-188435958b07"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-30T08:52:29+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:66286d0b-710d-4ce3-88bf-0eea6e00c2bf"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:66286d0b-710d-4ce3-88bf-0eea6e00c2bf"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-30T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:233bba9d-0387-4c32-ad3c-d1cef04faf51"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:f49d2791-6d29-48e9-9e5b-c40700a64cdf"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ea23675b-79cc-4b37-a01d-188435958b07"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:005d6ffe-105c-4857-bfed-6d7c9e59096f"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:005d6ffe-105c-4857-bfed-6d7c9e59096f"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-31T08:29:37+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="136"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="73"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:56e5d6da-3cb0-4a54-8cd9-ca9b030a859e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:56e5d6da-3cb0-4a54-8cd9-ca9b030a859e"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-31T08:29:37+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="65"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b957a4c0-a92a-44aa-942a-6467e73fcbae"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b957a4c0-a92a-44aa-942a-6467e73fcbae"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-31T08:29:37+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1a96855f-c41a-448a-914e-fb7b46b9c8ed"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1a96855f-c41a-448a-914e-fb7b46b9c8ed"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-31T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:005d6ffe-105c-4857-bfed-6d7c9e59096f"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:56e5d6da-3cb0-4a54-8cd9-ca9b030a859e"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:b957a4c0-a92a-44aa-942a-6467e73fcbae"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:bb36558b-066f-45ef-b4af-caa584df13c3"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:bb36558b-066f-45ef-b4af-caa584df13c3"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-31T11:53:01+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="122"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="73"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a6582784-cd64-4d82-8a5c-1c0fc47fe07b"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a6582784-cd64-4d82-8a5c-1c0fc47fe07b"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-31T11:53:01+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="63"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:7f34a3fc-95f6-43ab-bc0b-44c4266a2c62"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:7f34a3fc-95f6-43ab-bc0b-44c4266a2c62"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-31T11:53:01+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ce547c5c-164f-4426-8dff-75739716ece5"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ce547c5c-164f-4426-8dff-75739716ece5"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-31T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:bb36558b-066f-45ef-b4af-caa584df13c3"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:a6582784-cd64-4d82-8a5c-1c0fc47fe07b"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:7f34a3fc-95f6-43ab-bc0b-44c4266a2c62"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:985824bd-7a3e-4d55-9392-574933bf1f14"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:985824bd-7a3e-4d55-9392-574933bf1f14"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-01T14:40:27+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="124"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="83"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:77442bf0-b08f-4cb4-bea3-a2da598e35cd"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:77442bf0-b08f-4cb4-bea3-a2da598e35cd"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-01T14:40:27+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="68"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:75bc5c0d-a55c-4b13-be02-2b3fb0b191f2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:75bc5c0d-a55c-4b13-be02-2b3fb0b191f2"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-01T14:40:27+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:621af218-62d5-4b7f-9422-4a2b1b05e1d5"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:621af218-62d5-4b7f-9422-4a2b1b05e1d5"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-01T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:985824bd-7a3e-4d55-9392-574933bf1f14"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:77442bf0-b08f-4cb4-bea3-a2da598e35cd"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:75bc5c0d-a55c-4b13-be02-2b3fb0b191f2"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e6f81379-b1ea-46c6-953c-5d981f7d5e46"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e6f81379-b1ea-46c6-953c-5d981f7d5e46"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-02T19:52:40+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="128"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="76"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:fd9d4422-72f0-43ce-9c27-27d78faa8769"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:fd9d4422-72f0-43ce-9c27-27d78faa8769"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-02T19:52:40+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="73"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3bdba90e-87ce-4adb-a1ac-d191b978e7f3"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3bdba90e-87ce-4adb-a1ac-d191b978e7f3"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-02T19:52:40+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a99e5b9d-e7a7-44ca-88c5-940ee68cfd30"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a99e5b9d-e7a7-44ca-88c5-940ee68cfd30"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-02T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:e6f81379-b1ea-46c6-953c-5d981f7d5e46"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:fd9d4422-72f0-43ce-9c27-27d78faa8769"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:3bdba90e-87ce-4adb-a1ac-d191b978e7f3"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:49b2c118-50d3-4041-8058-410dd310a0fe"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:49b2c118-50d3-4041-8058-410dd310a0fe"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-26T20:10:23+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="139"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="83"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:7f975c66-1a84-4e9c-bab5-62cfbc326388"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:7f975c66-1a84-4e9c-bab5-62cfbc326388"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-26T20:10:23+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="85"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b9beff8a-9b7a-43aa-9d1e-3e8cd60569f2"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b9beff8a-9b7a-43aa-9d1e-3e8cd60569f2"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-26T20:10:23+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:3cdd5668-62ce-4449-a359-5469f5d400df"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:3cdd5668-62ce-4449-a359-5469f5d400df"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-05-26T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:49b2c118-50d3-4041-8058-410dd310a0fe"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:7f975c66-1a84-4e9c-bab5-62cfbc326388"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:b9beff8a-9b7a-43aa-9d1e-3e8cd60569f2"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c709b32b-1ce0-4a10-bfee-5fb80b08100e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c709b32b-1ce0-4a10-bfee-5fb80b08100e"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-05T14:42:17+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="134"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="76"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4c7317f9-6a58-4560-aaed-672fe32cdbcb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4c7317f9-6a58-4560-aaed-672fe32cdbcb"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-05T14:42:17+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="68"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:ab65f232-697d-45cf-b613-386160dbbf34"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:ab65f232-697d-45cf-b613-386160dbbf34"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-05T14:42:17+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4caa77d8-c224-4b37-b08f-7912baf54535"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4caa77d8-c224-4b37-b08f-7912baf54535"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-05T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:c709b32b-1ce0-4a10-bfee-5fb80b08100e"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:4c7317f9-6a58-4560-aaed-672fe32cdbcb"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:ab65f232-697d-45cf-b613-386160dbbf34"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e9f95b0e-c5e8-4250-838b-1a72ae5b826e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e9f95b0e-c5e8-4250-838b-1a72ae5b826e"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="85354-9"></code>
                    <display value="Blood pressure panel with all children optional"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                    <code value="75367002"></code>
                    <display value="Blood pressure (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-06T12:31:52+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8480-6"></code>
                        <display value="Systolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271649006"></code>
                        <display value="Systolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="124"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
            <component>
                <code>
                    <coding>
                        <system value="http://loinc.org"></system>
                        <version value="2.72"></version>
                        <code value="8462-4"></code>
                        <display value="Diastolic blood pressure"></display>
                    </coding>
                    <coding>
                        <system value="http://snomed.info/sct"></system>
                        <version
                            value="http://snomed.info/sct/900000000000207008/version/20220331"></version>
                        <code value="271650006"></code>
                        <display value="Diastolic blood pressure (observable entity)"></display>
                    </coding>
                </code>
                <valueQuantity>
                    <value value="78"></value>
                    <unit value="mm Hg"></unit>
                    <system value="http://unitsofmeasure.org"></system>
                    <code value="mm[Hg]"></code>
                </valueQuantity>
            </component>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:4c42a6c5-f33f-4d0b-99d4-468e7b55ecff"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:4c42a6c5-f33f-4d0b-99d4-468e7b55ecff"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8867-4"></code>
                    <display value="Heart rate"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="364075005"></code>
                    <display value="Heart rate (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-06T12:31:52+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="79"></value>
                <unit value="per minute"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="/min"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:2b3bfe03-1eb8-417f-b5db-2782597baf97"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:2b3bfe03-1eb8-417f-b5db-2782597baf97"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <text value="home"></text>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-06T12:31:52+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:de767908-054b-45fe-a34c-d62fda397a0e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Tracking der Blutdruckwerte,
                    Verwendung zur sp&#xe4;teren Verlaufskontrolle inkl. individueller
                    R&#xfc;ckmeldung, Abbildung im medizinischen Bericht (Daten&#xfc;bersicht
                    f&#xfc;r medizinisches Fachpersonal)</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:de767908-054b-45fe-a34c-d62fda397a0e"></value>
            </identifier>
            <status value="final"></status>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="51855-5"></code>
                    <display value="Patient Note"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2024-06-06T00:00:00+02:00"></effectiveDateTime>
            <hasMember>
                <reference value="urn:uuid:e9f95b0e-c5e8-4250-838b-1a72ae5b826e"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:4c42a6c5-f33f-4d0b-99d4-468e7b55ecff"></reference>
            </hasMember>
            <hasMember>
                <reference value="urn:uuid:2b3bfe03-1eb8-417f-b5db-2782597baf97"></reference>
            </hasMember>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:b40becef-e400-4e44-bdba-30ccb674bbfb"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Body_Weight|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:b40becef-e400-4e44-bdba-30ccb674bbfb"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="29463-7"></code>
                    <display value="Body weight"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="27113001"></code>
                    <display value="Body weight (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2021-07-05T09:54:01+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="70"></value>
                <unit value="kg"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="kg"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:65dba314-d69d-4fd0-a143-b9b0c825369e"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Body_Weight|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:65dba314-d69d-4fd0-a143-b9b0c825369e"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="29463-7"></code>
                    <display value="Body weight"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="27113001"></code>
                    <display value="Body weight (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2021-06-30T10:52:41+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="65"></value>
                <unit value="kg"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="kg"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:49fbe5e7-e94b-4950-b5a1-3df291ec8193"></fullUrl>
    <resource>
        <Observation xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Body_Height|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:49fbe5e7-e94b-4950-b5a1-3df291ec8193"></value>
            </identifier>
            <status value="final"></status>
            <category>
                <coding>
                    <system value="http://terminology.hl7.org/CodeSystem/observation-category"></system>
                    <code value="vital-signs"></code>
                </coding>
            </category>
            <code>
                <coding>
                    <system value="http://loinc.org"></system>
                    <version value="2.72"></version>
                    <code value="8302-2"></code>
                    <display value="Body height"></display>
                </coding>
                <coding>
                    <system value="http://snomed.info/sct"></system>
                    <version value="http://snomed.info/sct/2011000195101/version/20230607"></version>
                    <code value="1153637007"></code>
                    <display value="Body height (observable entity)"></display>
                </coding>
            </code>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <effectiveDateTime value="2021-05-07T17:40:42+02:00"></effectiveDateTime>
            <performer>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </performer>
            <valueQuantity>
                <value value="174"></value>
                <unit value="cm"></unit>
                <system value="http://unitsofmeasure.org"></system>
                <code value="cm"></code>
            </valueQuantity>
            <device>
                <reference value="https:/Device/device664486c2d3d25d1dc7774ea7"></reference>
            </device>
        </Observation>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></fullUrl>
    <resource>
        <Questionnaire xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Questionnaire|1.1.0"></profile>
            </meta>
            <language value="de-CH"></language>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Global Physical Activity Questionnaire</div>
            </text>
            <url value="https://app.somn.io/Questionnaire/preGPAQ/664486c2d3d25d1dc7774ea7"></url>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></value>
            </identifier>
            <name value="PreGPAQ"></name>
            <title value="Global Physical Activity Questionnaire"></title>
            <status value="active"></status>
            <subjectType value="Patient"></subjectType>
            <publisher value="mementor DE GmbH"></publisher>
            <contact>
                <name value="mementor DE GmbH"></name>
                <telecom>
                    <system value="email"></system>
                    <value value="support@mementor.de"></value>
                    <use value="work"></use>
                </telecom>
            </contact>
            <description
                value="Erfasst durchschnittliche k&#xf6;rperliche Aktivit&#xe4;t in den Bereichen Arbeit, Freizeit und Transport in Minuten"></description>
            <purpose value="Unterst&#xfc;tzung zur Behandlung von Hypertonie"></purpose>
            <item>
                <linkId value="P1activityVigWorkYes"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P2activityNoDaysVigWork"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P3activityVigWorkMinutes"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P4activityModWorkYes"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P5activityNoDaysModWork"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P6activityModWorkMinutes"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P7activityTravelYes"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P8activityNoDaysTravel"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P9activityMinutesTravel"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P10activityVigSportsYes"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P11activityNoDaysVigSports"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P12activityMinutesVigSports"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P13activityModSportsYes"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P14activityNoDayModSports"></linkId>
                <type value="string"></type>
            </item>
            <item>
                <linkId value="P15activityMinutesModSports"></linkId>
                <type value="string"></type>
            </item>
        </Questionnaire>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:db43558c-abdf-4c1d-8c2f-302fe959dea8"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Arbeit (intensive Aktivit&#xe4;t):
                    Beinhaltet deine Arbeit intensive k&#xf6;rperliche Aktivit&#xe4;t, bei der
                    Atmung und Puls stark zunehmen, wie z. B. schwere Lastentragen oder Heben,
                    Graben oder Bauarbeiten, mit einer Dauer von mindestens zehn Minuten?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:db43558c-abdf-4c1d-8c2f-302fe959dea8"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P1activityVigWorkYes"></linkId>
                <text
                    value="Beinhaltet deine Arbeit intensive k&#xf6;rperliche Aktivit&#xe4;t, bei der Atmung und Puls stark zunehmen, wie z. B. schwere Lastentragen oder Heben, Graben oder Bauarbeiten, mit einer Dauer von mindestens zehn Minuten?"></text>
                <answer>
                    <valueString value="no"></valueString>
                </answer>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9ceba3a0-8c22-449d-842f-fdd0d1d1ada7"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Arbeit (intensive Aktivit&#xe4;t): An
                    wie vielen Tagen in einer gew&#xf6;hnlichen Woche bet&#xe4;tigst du dich bei
                    der Arbeit k&#xf6;rperlich intensiv?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9ceba3a0-8c22-449d-842f-fdd0d1d1ada7"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P2activityNoDaysVigWork"></linkId>
                <text
                    value="An wie vielen Tagen in einer gew&#xf6;hnlichen Woche bet&#xe4;tigst du dich bei der Arbeit k&#xf6;rperlich intensiv?"></text>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:48772957-b4be-459f-a26a-03c41210835e"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Arbeit (intensive Aktivit&#xe4;t): Wie
                    viel Zeit verbringst du an einem gew&#xf6;hnlichen Tag bei der Arbeit mit
                    intensiver k&#xf6;rperlicher Aktivit&#xe4;t?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:48772957-b4be-459f-a26a-03c41210835e"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P3activityVigWorkMinutes"></linkId>
                <text
                    value="Wie viel Zeit verbringst du an einem gew&#xf6;hnlichen Tag bei der Arbeit mit intensiver k&#xf6;rperlicher Aktivit&#xe4;t?"></text>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:22189656-4fb9-4655-a0c1-45cb123daf85"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Arbeit (moderate Aktivit&#xe4;t):
                    Beinhaltet deine Arbeit moderate k&#xf6;rperliche Aktivit&#xe4;t, bei der
                    Atmung und Puls leicht zunehmen, wie flottes Gehen oder Tragen leichter
                    Lasten, mit einer Dauer von mindestens zehn Minuten?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:22189656-4fb9-4655-a0c1-45cb123daf85"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P4activityModWorkYes"></linkId>
                <text
                    value="Beinhaltet deine Arbeit moderate k&#xf6;rperliche Aktivit&#xe4;t, bei der Atmung und Puls leicht zunehmen, wie flottes Gehen oder Tragen leichter Lasten, mit einer Dauer von mindestens zehn Minuten?"></text>
                <answer>
                    <valueString value="no"></valueString>
                </answer>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d907b272-538c-49f4-8c8d-a6124737de32"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Arbeit (moderate Aktivit&#xe4;t): An
                    wie vielen Tagen in einer gew&#xf6;hnlichen Woche f&#xfc;hrst du bei der
                    Arbeit moderate k&#xf6;rperliche Aktivit&#xe4;t aus?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d907b272-538c-49f4-8c8d-a6124737de32"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P5activityNoDaysModWork"></linkId>
                <text
                    value="An wie vielen Tagen in einer gew&#xf6;hnlichen Woche f&#xfc;hrst du bei der Arbeit moderate k&#xf6;rperliche Aktivit&#xe4;t aus?"></text>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f9614659-1001-4136-b08d-13220452f19e"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Arbeit (moderate Aktivit&#xe4;t): Wie
                    viel Zeit verbringst du an einem gew&#xf6;hnlichen Tag bei der Arbeit mit
                    moderater k&#xf6;rperlicher Aktivit&#xe4;t?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f9614659-1001-4136-b08d-13220452f19e"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P6activityModWorkMinutes"></linkId>
                <text
                    value="Wie viel Zeit verbringst du an einem gew&#xf6;hnlichen Tag bei der Arbeit mit moderater k&#xf6;rperlicher Aktivit&#xe4;t?"></text>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:304b5cf6-2102-4944-9104-3a02e72c48ce"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Fortbewegung: Gehst du zu Fu&#xdf;
                    oder f&#xe4;hrst du mit dem Fahrrad, um von einem Ort zum anderen zu kommen,
                    mit einer Dauer von mindestens zehn Minuten?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:304b5cf6-2102-4944-9104-3a02e72c48ce"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P7activityTravelYes"></linkId>
                <text
                    value="Gehst du zu Fu&#xdf; oder f&#xe4;hrst du mit dem Fahrrad, um von einem Ort zum anderen zu kommen, mit einer Dauer von mindestens zehn Minuten?"></text>
                <answer>
                    <valueString value="yes"></valueString>
                </answer>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:d326c2f4-597a-4a02-9360-2b031fe218ea"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Fortbewegung: An wie vielen Tagen in
                    einer gew&#xf6;hnlichen Woche gehst du zu Fu&#xdf; oder f&#xe4;hrst du mit
                    dem Fahrrad, um von einem Ort zum anderen zu kommen, mit einer Dauer von
                    mindestens zehn Minuten?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:d326c2f4-597a-4a02-9360-2b031fe218ea"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P8activityNoDaysTravel"></linkId>
                <text
                    value="An wie vielen Tagen in einer gew&#xf6;hnlichen Woche gehst du zu Fu&#xdf; oder f&#xe4;hrst du mit dem Fahrrad, um von einem Ort zum anderen zu kommen, mit einer Dauer von mindestens zehn Minuten?"></text>
                <answer>
                    <valueString value="5"></valueString>
                </answer>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:7db575dd-db09-4d5f-9107-c229fb85b83b"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Fortbewegung: Wie viel Zeit
                    investierst du an einem gew&#xf6;hnlichen Tag, um zu Fu&#xdf; oder mit dem
                    Fahrrad von einem Ort zum anderen zu kommen?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:7db575dd-db09-4d5f-9107-c229fb85b83b"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P9activityMinutesTravel"></linkId>
                <text
                    value="Wie viel Zeit investierst du an einem gew&#xf6;hnlichen Tag, um zu Fu&#xdf; oder mit dem Fahrrad von einem Ort zum anderen zu kommen?"></text>
                <answer>
                    <valueString value="30"></valueString>
                </answer>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1a53d20d-6258-4cbd-a705-60b37219d040"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Freizeit (intensive Aktivit&#xe4;t):
                    Zuletzt m&#xf6;chte ich dich zum Bereich Freizeit befragen: Betreibst du in
                    der Freizeit intensive k&#xf6;rperliche Aktivit&#xe4;t oder Sport, bei dem
                    Atmung und Puls stark zunehmen, wie Laufen oder Fu&#xdf;ball mit einer Dauer
                    von mindestens zehn Minuten?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1a53d20d-6258-4cbd-a705-60b37219d040"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P10activityVigSportsYes"></linkId>
                <text
                    value="Zuletzt m&#xf6;chte ich dich zum Bereich Freizeit befragen: Betreibst du in der Freizeit intensive k&#xf6;rperliche Aktivit&#xe4;t oder Sport, bei dem Atmung und Puls stark zunehmen, wie Laufen oder Fu&#xdf;ball mit einer Dauer von mindestens zehn Minuten?"></text>
                <answer>
                    <valueString value="yes"></valueString>
                </answer>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:bcf0de4f-7f77-4531-b9b9-9edc4cf15038"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Freizeit (intensive Aktivit&#xe4;t):
                    An wie vielen Tagen in einer gew&#xf6;hnlichen Woche betreibst du intensive
                    k&#xf6;rperliche Aktivit&#xe4;t oder Sport in der Freizeit?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:bcf0de4f-7f77-4531-b9b9-9edc4cf15038"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P11activityNoDaysVigSports"></linkId>
                <text
                    value="An wie vielen Tagen in einer gew&#xf6;hnlichen Woche betreibst du intensive k&#xf6;rperliche Aktivit&#xe4;t oder Sport in der Freizeit?"></text>
                <answer>
                    <valueString value="2"></valueString>
                </answer>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:e8a60781-0b91-400c-9f8f-0ebcfc6e15a7"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Freizeit (intensive Aktivit&#xe4;t):
                    Wie viel Zeit investierst du an einem gew&#xf6;hnlichen Tag w&#xe4;hrend
                    deiner Freizeit in intensive k&#xf6;rperliche Aktivit&#xe4;t oder Sport?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:e8a60781-0b91-400c-9f8f-0ebcfc6e15a7"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P12activityMinutesVigSports"></linkId>
                <text
                    value="Wie viel Zeit investierst du an einem gew&#xf6;hnlichen Tag w&#xe4;hrend deiner Freizeit in intensive k&#xf6;rperliche Aktivit&#xe4;t oder Sport?"></text>
                <answer>
                    <valueString value="60"></valueString>
                </answer>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:bf2f61ba-6378-4b94-9913-d0326e77703e"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Freizeit (moderate Aktivit&#xe4;t):
                    Betreibst du in der Freizeit moderate k&#xf6;rperliche Aktivit&#xe4;t oder
                    Sport, bei dem Atmung und Puls leicht zunehmen, wie flottes Gehen, Fahrrad
                    fahren, Schwimmen oder Volleyball, mit einer Dauer von mindestens zehn
                    Minuten?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:bf2f61ba-6378-4b94-9913-d0326e77703e"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P13activityModSportsYes"></linkId>
                <text
                    value="Betreibst du in der Freizeit moderate k&#xf6;rperliche Aktivit&#xe4;t oder Sport, bei dem Atmung und Puls leicht zunehmen, wie flottes Gehen, Fahrrad fahren, Schwimmen oder Volleyball, mit einer Dauer von mindestens zehn Minuten?"></text>
                <answer>
                    <valueString value="yes"></valueString>
                </answer>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:8c1eb793-c423-4659-9a8d-7319853bcb19"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Freizeit (moderate Aktivit&#xe4;t): An
                    wie vielen Tagen in einer gew&#xf6;hnlichen Woche betreibst du moderate
                    k&#xf6;rperliche Aktivit&#xe4;t oder Sport in der Freizeit?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:8c1eb793-c423-4659-9a8d-7319853bcb19"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P14activityNoDayModSports"></linkId>
                <text
                    value="An wie vielen Tagen in einer gew&#xf6;hnlichen Woche betreibst du moderate k&#xf6;rperliche Aktivit&#xe4;t oder Sport in der Freizeit?"></text>
                <answer>
                    <valueString value="2"></valueString>
                </answer>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:f9c4bb86-91a8-4858-8c75-f78ba3a8990d"></fullUrl>
    <resource>
        <QuestionnaireResponse xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:16+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse|1.1.0"></profile>
            </meta>
            <text>
                <status value="extensions"></status>
                <div xmlns="http://www.w3.org/1999/xhtml">Freizeit (moderate Aktivit&#xe4;t):
                    Wie viel Zeit investierst du an einem gew&#xf6;hnlichen Tag in der Freizeit
                    in moderate k&#xf6;rperliche Aktivit&#xe4;t oder Sport?</div>
            </text>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:f9c4bb86-91a8-4858-8c75-f78ba3a8990d"></value>
            </identifier>
            <questionnaire value="urn:uuid:c9a1c753-5227-46df-860f-be3337a01c02"></questionnaire>
            <status value="completed"></status>
            <subject>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </subject>
            <authored value="2024-06-02T19:46:41+02:00"></authored>
            <source>
                <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
            </source>
            <item>
                <linkId value="P15activityMinutesModSports"></linkId>
                <text
                    value="Wie viel Zeit investierst du an einem gew&#xf6;hnlichen Tag in der Freizeit in moderate k&#xf6;rperliche Aktivit&#xe4;t oder Sport?"></text>
                <answer>
                    <valueString value="30"></valueString>
                </answer>
            </item>
        </QuestionnaireResponse>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:9b9d251c-494e-4602-942d-c588c8b532fd"></fullUrl>
    <resource>
        <Appointment xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:17+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Appointment|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:9b9d251c-494e-4602-942d-c588c8b532fd"></value>
            </identifier>
            <status value="proposed"></status>
            <appointmentType>
                <text value="nextModule krankheitsbild"></text>
            </appointmentType>
            <start value="2024-05-18T11:00:29+02:00"></start>
            <end value="2024-05-18T11:00:29+02:00"></end>
            <participant>
                <actor>
                    <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
                </actor>
                <status value="accepted"></status>
            </participant>
        </Appointment>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:5bbf4e48-5661-4f26-8497-b59990f25108"></fullUrl>
    <resource>
        <Appointment xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:17+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Appointment|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:5bbf4e48-5661-4f26-8497-b59990f25108"></value>
            </identifier>
            <status value="proposed"></status>
            <appointmentType>
                <text value="nextModule tagebuch"></text>
            </appointmentType>
            <start value="2024-05-22T15:00:33+02:00"></start>
            <end value="2024-05-22T15:00:33+02:00"></end>
            <participant>
                <actor>
                    <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
                </actor>
                <status value="accepted"></status>
            </participant>
        </Appointment>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:a86a00fc-4604-4ff7-8a82-1dfce0b12061"></fullUrl>
    <resource>
        <Appointment xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:17+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Appointment|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:a86a00fc-4604-4ff7-8a82-1dfce0b12061"></value>
            </identifier>
            <status value="proposed"></status>
            <appointmentType>
                <text value="nextModule treatment"></text>
            </appointmentType>
            <start value="2024-05-25T12:00:10+02:00"></start>
            <end value="2024-05-25T12:00:10+02:00"></end>
            <participant>
                <actor>
                    <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
                </actor>
                <status value="accepted"></status>
            </participant>
        </Appointment>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:1085fd86-0cba-4f6c-9ffc-b8648ab7a61b"></fullUrl>
    <resource>
        <Appointment xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:17+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Appointment|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:1085fd86-0cba-4f6c-9ffc-b8648ab7a61b"></value>
            </identifier>
            <status value="proposed"></status>
            <appointmentType>
                <text value="nextModule entwicklung"></text>
            </appointmentType>
            <start value="2024-05-31T12:00:17+02:00"></start>
            <end value="2024-05-31T12:00:17+02:00"></end>
            <participant>
                <actor>
                    <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
                </actor>
                <status value="accepted"></status>
            </participant>
        </Appointment>
    </resource>
</entry>
<entry>
    <fullUrl value="urn:uuid:69af3a58-3181-4872-8704-06c56cd78251"></fullUrl>
    <resource>
        <Appointment xmlns="http://hl7.org/fhir">
            <meta>
                <versionId value="1.0"></versionId>
                <lastUpdated value="2024-06-06T14:09:17+02:00"></lastUpdated>
                <profile
                    value="https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Appointment|1.1.0"></profile>
            </meta>
            <identifier>
                <type>
                    <coding>
                        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"></system>
                        <version value="2.9"></version>
                        <code value="RI"></code>
                        <display value="Resource identifier"></display>
                    </coding>
                </type>
                <system value="urn:ietf:rfc:3986"></system>
                <value value="urn:uuid:69af3a58-3181-4872-8704-06c56cd78251"></value>
            </identifier>
            <status value="proposed"></status>
            <appointmentType>
                <text value="nextModule bewegung"></text>
            </appointmentType>
            <start value="2024-06-05T10:00:14+02:00"></start>
            <end value="2024-06-05T10:00:14+02:00"></end>
            <participant>
                <actor>
                    <reference value="urn:uuid:35bc1945-bda5-4f32-a620-5c7cddd1b0f2"></reference>
                </actor>
                <status value="accepted"></status>
            </participant>
        </Appointment>
    </resource>
</entry>
</Bundle>`;
