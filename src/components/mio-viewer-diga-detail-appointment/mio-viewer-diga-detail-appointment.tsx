import { Component, Host, Prop, h } from "@stencil/core";
import { DiGAAppointmentDetails } from "../../utils/recordData";

@Component({
  tag: "mio-viewer-diga-detail-appointment",
  styleUrl: "mio-viewer-diga-detail-appointment.css",
  shadow: true,
})
export class MioViewerDigaDetailAppointment {
  /**
   * Beschreibt einen Termin
   * orientiert an https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Appointment
   */
  @Prop() appointmentDetails!: DiGAAppointmentDetails;

  render() {
    return (
      <Host>
        <div id="heading">
          <div id="category">{this.appointmentDetails.categoryName}</div>
          <div id="headingName">{this.appointmentDetails.heading}</div>
          <div id="status">{this.appointmentDetails.detail}</div>
          <div id="recordDate">
            {new Date(this.appointmentDetails.recordDate).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </div>
        </div>
        <div id="body">
          <div id="start-ende">
            <div class="code-entry">
              <div class="code-description">Start:</div>
              <div class="code-text">25.05.2024</div>
            </div>
            <div class="code-entry">
              <div class="code-description">Ende:</div>
              <div class="code-text">25.05.2024</div>
            </div>
          </div>

          <div class="code-entry">
            <div class="code-description">Teilnehmende:</div>
            <div class="code-text">Max Mustermann</div>
            <div class="code-status">akzeptiert</div>
          </div>
        </div>
      </Host>
    );
  }
}
