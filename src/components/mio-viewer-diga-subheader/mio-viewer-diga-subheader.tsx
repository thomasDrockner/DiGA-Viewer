import {
  Component,
  Host,
  Prop,
  getAssetPath,
  h,
  Event,
  EventEmitter,
} from "@stencil/core";
import { DiGADetails } from "../../utils/digaData";

@Component({
  tag: "mio-viewer-diga-subheader",
  styleUrl: "mio-viewer-diga-subheader.css",
  shadow: true,
})
export class MioViewerDigaSubheader {
  /**
   * Beschreibt eine DiGA
   * orientiert an https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Device_DIGA
   */
  @Prop() diga: DiGADetails = {
    diGAName: "actensio App",
    prescriber: "Dr. Müller",
    startDate: "01.01.2024",
    endDate: "31.06.2024",
    status: "aktiv",
    version: "1.0",
    lastUpdate: "06.06.2024",
  };
  /**
   * Event wird ausgelöst, wenn der Nutzer den Hinweis anklickt
   */
  @Event() noticeOpen: EventEmitter;

  private infoIconPath = getAssetPath("assets/info.svg");

  render() {
    return (
      <Host>
        {this.diga && (
          <div>
            <div id="subheader-title">
              {this.diga.diGAName}
              <div
                id="hinweis"
                onClick={this.noticeOpen.emit}
              >
                <img src={this.infoIconPath} />
                Hinweis{" "}
              </div>
            </div>
            <div id="subheader-subtitle">
              <span class="subheader-detail">
                <span class="subheader-detail-description">Verordnungszeitraum:</span>
                <span class="subheader-detail-content">
                  {this.diga.startDate} - {this.diga.endDate}
                </span>
              </span>
              <span class="subheader-detail">
                <span class="subheader-detail-description">Status</span>
                <span class="subheader-detail-content">{this.diga.status}</span>
              </span>
              <span class="subheader-detail">
                <span class="subheader-detail-description">Version:</span>
                <span class="subheader-detail-content">{this.diga.version}</span>
              </span>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
