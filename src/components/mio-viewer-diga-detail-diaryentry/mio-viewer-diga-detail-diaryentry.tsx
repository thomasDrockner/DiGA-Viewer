import { Component, Host, Prop, h } from "@stencil/core";
import { DiGADiaryEntryDetails } from "../../utils/recordData";

@Component({
  tag: "mio-viewer-diga-detail-diaryentry",
  styleUrl: "mio-viewer-diga-detail-diaryentry.css",
  shadow: true,
})
export class MioViewerDigaDetailDiaryentry {
  /**
   * Beschreibt einen Tagebucheintrag
   * orientiert an https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Diary_Entry
   */
  @Prop() diaryEntryDetails!: DiGADiaryEntryDetails;

  render() {
    return (
      <Host>
        <div id="heading">
          <div id="category">Patientenberichte</div>
          <div id="headingName">{this.diaryEntryDetails.heading}</div>
          <div id="recordDate">{this.diaryEntryDetails.recordDate}</div>
        </div>
        <div id="body">
          <div class="code-entry">
            <div class="code-description">Beschreibung:</div>
            <div class="code-text">{this.diaryEntryDetails.detail}</div>
          </div>
          <div id="table-heading">Einträge:</div>
          <table id="diary-table">
            {this.diaryEntryDetails.hasMember.map(data => (
              <tr>
                <td class="name">{data.name}</td>
                <td class="value">{data.value}</td>
              </tr>
            ))}
          </table>
        </div>
      </Host>
    );
  }
}
