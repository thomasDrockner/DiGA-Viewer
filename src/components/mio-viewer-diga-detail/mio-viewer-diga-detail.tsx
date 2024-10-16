import {
  Component,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  getAssetPath,
  Fragment,
} from "@stencil/core";
import { DiGAEntryDetails } from "../../utils/recordData";

@Component({
  tag: "mio-viewer-diga-detail",
  styleUrl: "mio-viewer-diga-detail.css",
  shadow: true,
})
export class MioViewerDigaDetail {
  /**
   * Beschreibt den Namen des ausgewählten Eintrags
   */
  @Prop() entryName: string;
  /**
   * Beschreibt die Attribute des ausgewählten Eintrags
   */
  @Prop() entryDetails!: DiGAEntryDetails;

  /**
   * Event wird ausgelöst, wenn die Detail-Ansischt geschlossen wird
   */
  @Event() detailsHidden: EventEmitter;

  private hideDetails = () => this.detailsHidden.emit();

  private closeLogoPath = getAssetPath("assets/close_cross.svg");

  render() {
    return (
      <Host>
        <div
          id="record-list"
          part="content"
        >
          <div class="header">
            <div class="closeLogo">
              <img
                src={this.closeLogoPath}
                onClick={this.hideDetails}
              />
            </div>
          </div>
          <div>
            {this.entryDetails.detailType === "Questionnaire" ? (
              <mio-viewer-diga-detail-questionaire
                questionnaireDetails={this.entryDetails}
              />
            ) : this.entryDetails.detailType === "VitalSign" ? (
              <mio-viewer-diga-detail-vitalsign vitalSignDetails={this.entryDetails} />
            ) : this.entryDetails.detailType === "ObservationFree" ? (
              <mio-viewer-diga-detail-observation
                observationDetails={this.entryDetails}
              />
            ) : this.entryDetails.detailType === "NutritionIntake" ? (
              <mio-viewer-diga-detail-nutrition nutritionDetails={this.entryDetails} />
            ) : this.entryDetails.detailType === "EnvironmentalFactor" ? (
              <mio-viewer-diga-detail-environmentalfactor
                environmentalFactorDetails={this.entryDetails}
              />
            ) : this.entryDetails.detailType === "Goal" ? (
              <mio-viewer-diga-detail-goal goalDetails={this.entryDetails} />
            ) : this.entryDetails.detailType === "Appointment" ? (
              <mio-viewer-diga-detail-appointment
                appointmentDetails={this.entryDetails}
              />
            ) : this.entryDetails.detailType === "DiaryEntry" ? (
              <mio-viewer-diga-detail-diaryentry
                diaryEntryDetails={this.entryDetails}
              />
            ) : (
              <>
                Dieses Profil mit der id: {this.entryDetails} kann leider noch nicht
                angezeigt werden
              </>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
