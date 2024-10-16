import { Component, Host, Prop, h } from "@stencil/core";
import { DiGAGoalDetails } from "../../utils/recordData";

@Component({
  tag: "mio-viewer-diga-detail-goal",
  styleUrl: "mio-viewer-diga-detail-goal.css",
  shadow: true,
})
export class MioViewerDigaDetailGoal {
  /**
   * Beschreibt ein Ziel
   * orientiert an https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Goal
   */
  @Prop() goalDetails!: DiGAGoalDetails;

  render() {
    return (
      <Host>
        <div id="heading">
          <div id="category">Ziel</div>
          <div id="status">{this.goalDetails.detail}</div>
          <div id="recordDate">{this.goalDetails.recordDate}</div>
        </div>
        <div id="body">
          <div class="code-entry">
            <div class="code-description">Beschreibung:</div>
            <div class="code-text">{this.goalDetails.detail}</div>
          </div>

          <div class="code-entry">
            <div class="code-description">durchgeführt von:</div>
            <div class="code-text">{this.goalDetails.expressedBy}</div>
          </div>
        </div>
      </Host>
    );
  }
}
