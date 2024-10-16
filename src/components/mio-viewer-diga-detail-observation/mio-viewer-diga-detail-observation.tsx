import { Component, Host, h, Prop } from "@stencil/core";
import { DiGAObservationDetails } from "../../utils/recordData";

@Component({
  tag: "mio-viewer-diga-detail-observation",
  styleUrl: "mio-viewer-diga-detail-observation.css",
  shadow: true,
})
export class MioViewerDigaDetailObservation {
  /**
   * Beschreibt ein freies Ergebnis oder einen freien Befund
   * orientiert an https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Free
   */
  @Prop() observationDetails!: DiGAObservationDetails;

  render() {
    return (
      <Host>
        <div id="heading">
          <div id="category">{this.observationDetails.categoryName}</div>
          <div id="headingName">{this.observationDetails.heading}</div>
          <div id="recordDate">
            {new Date(this.observationDetails.recordDate).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </div>
        </div>
        <div id="body">
          <div class="code-entry">
            <div class="code-description">Wert:</div>
            <div class="code-text">{this.observationDetails.detail}</div>
          </div>
        </div>
      </Host>
    );
  }
}
