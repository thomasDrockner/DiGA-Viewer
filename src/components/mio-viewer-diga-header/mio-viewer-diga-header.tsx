import { Component, Host, h, getAssetPath, Prop } from "@stencil/core";
import { DiGAPatientDetails } from "../../utils/recordData";

@Component({
  tag: "mio-viewer-diga-header",
  styleUrl: "mio-viewer-diga-header.css",
  shadow: true,
})
export class MioViewerDigaHeader {
  /**
   * Beschreibt einen Patienten
   * orientiert an https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Patient
   */
  @Prop() patient!: DiGAPatientDetails;

  private appLogoPath = getAssetPath("assets/logo-diga.svg");

  render() {
    return (
      <Host>
        <div id="header-app-logo">
          <img src={this.appLogoPath} />
        </div>
        <div id="header-main">
          <div id="header-title">
            {this.patient.name}
            <div />
            <div id="header-subtitle">
              {this.patient.birthDate && (
                <span class="header-detail">
                  <span class="header-detail-description">Geburtsdatum:</span>
                  <span class="header-detail-content">{this.patient.birthDate}</span>
                </span>
              )}
              {this.patient.gender && (
                <span class="header-detail">
                  <span class="header-detail-description">Geschlecht:</span>
                  <span class="header-detail-content">{this.patient.gender}</span>
                </span>
              )}
              <span class="header-detail">
                <span class="header-detail-description">Versichertennummer:</span>
                <span class="header-detail-content">{this.patient.identifier}</span>
              </span>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
