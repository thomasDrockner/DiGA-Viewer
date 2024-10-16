import { Component, Host, Prop, h } from "@stencil/core";
import { DiGAEnvironmentalFactorDetails } from "../../utils/recordData";

@Component({
  tag: "mio-viewer-diga-detail-environmentalfactor",
  styleUrl: "mio-viewer-diga-detail-environmentalfactor.css",
  shadow: true,
})
export class MioViewerDigaDetailEnvironmentalfactor {
  /**
   * Beschreibt einen Umweltfaktor
   * orientiert an https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Environmental_Factor
   */
  @Prop() environmentalFactorDetails!: DiGAEnvironmentalFactorDetails;

  render() {
    return (
      <Host>
        <div id="heading">
          <div id="category">{this.environmentalFactorDetails.categoryName}</div>
          <div id="status">final</div>
          <div id="recordDate">{this.environmentalFactorDetails.recordDate}</div>
        </div>
        <div id="body">
          <div class="code-entry">
            <div class="code-description">Beschreibung:</div>
            <div class="code-text">{this.environmentalFactorDetails.detail}</div>
          </div>

          <div class="code-entry">
            <div class="code-description">durchgeführt von:</div>
            <div class="code-text">Max Mustermann</div>
          </div>
        </div>
      </Host>
    );
  }
}
