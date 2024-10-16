import { Component, Host, Prop, h } from "@stencil/core";
import { DiGAVitalSignDetails } from "../../utils/recordData";

@Component({
  tag: "mio-viewer-diga-detail-vitalsign",
  styleUrl: "mio-viewer-diga-detail-vitalsign.css",
  shadow: true,
})
export class MioViewerDigaDetailVitalsign {
  /**
   * Beschreibt ein Vitalzeichen
   * orientiert an https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Blood_Pressure
   * und https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Heart_Rate
   */
  @Prop() vitalSignDetails!: DiGAVitalSignDetails;
  render() {
    return (
      <Host>
        <div id="heading">
          <div id="category">Vitalzeichen</div>
          <div id="headingName">{this.vitalSignDetails.heading}</div>
          <div id="recordDate">{this.vitalSignDetails.recordDate}</div>
        </div>
        <div id="body">
          <div class="code-entry">
            <div class="code-description">durchgeführt von:</div>
            <div class="code-text">{this.vitalSignDetails.performer}</div>
          </div>
          <div id="measurements">
            {this.vitalSignDetails.measurements.map(data => (
              <div class="code-entry">
                <div class="code-description">{data.name}:</div>
                <div class="code-text">{data.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Host>
    );
  }
}
