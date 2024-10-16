import { Component, Host, h, Prop } from "@stencil/core";
import { DiGAQuestionnaireDetails } from "../../utils/recordData";

@Component({
  tag: "mio-viewer-diga-detail-questionaire",
  styleUrl: "mio-viewer-diga-detail-questionaire.css",
  shadow: true,
})
export class MioViewerDigaDetailQuestionaire {
  /**
   * Beschreibt einen Fragebogen
   * orientiert an https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Questionnaire
   * und https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_QuestionnaireResponse
   */
  @Prop() questionnaireDetails!: DiGAQuestionnaireDetails;

  render() {
    return (
      <Host>
        <div id="heading">
          <div id="category">Fragebogen</div>
          <div id="headingName">{this.questionnaireDetails.heading}</div>
          <div id="status">aktiv</div>
          <div id="recordDate">{this.questionnaireDetails.recordDate}</div>
        </div>

        <div id="body">
          <div class="code-entry">
            <div class="code-description">subjectType:</div>
            <div class="code-text">Patient</div>
          </div>
          <div class="code-entry">
            <div class="code-description">Herausgeber:</div>
            <div class="code-text">{this.questionnaireDetails.publisher}</div>
          </div>
          <div class="code-entry">
            <div class="code-description">Beschreibung:</div>
            <div class="code-text">{this.questionnaireDetails.detail}</div>
          </div>
          <div class="code-entry">
            <div class="code-description">Zweck:</div>
            <div class="code-text">{this.questionnaireDetails.purpose}</div>
          </div>
          <div id="questionnaire-table">
            {this.questionnaireDetails.questionData.map(data => (
              <table>
                <tr class="question-heading">Frage:</tr>
                <tr class="question">{data.question}</tr>
                <tr class="answer-heading">Antwort:</tr>
                <tr class="answer">{data.answer}</tr>
              </table>
            ))}
          </div>
        </div>
      </Host>
    );
  }
}
