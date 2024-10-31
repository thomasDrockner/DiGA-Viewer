import { Component, Event, EventEmitter, Host, getAssetPath, h } from "@stencil/core";

@Component({
  tag: "mio-viewer-diga-notice",
  styleUrl: "mio-viewer-diga-notice.css",
  shadow: true,
})
export class MioViewerDigaNotice {
  /**
   * Emitted when user closes the modal.
   *
   * A parent component should listen to this event and close the popup.
   */
  @Event({ bubbles: true, composed: true }) noticeClose: EventEmitter;

  private closeLogoPath = getAssetPath("assets/close_cross.svg");

  private closeNotice = () => {
    this.noticeClose.emit();
  };

  render() {
    return (
      <Host>
        <div id="modal-container">
          <img
            src={this.closeLogoPath}
            id="closeLogo"
            onClick={this.closeNotice}
          ></img>
          <div id="content-container">
            Dies ist der Prototyp eines MIO Viewer für digitale Gesundheitsanwendungen
            im Rahmen der Masterarbeit im Fachbereich Medizinische Informatik
            <br /> zum Thema "Visualisierung von Daten aus digitalen
            Gesundheitsanwendungen (DiGA) in Form einer Webkomponente (MIO Viewer) im
            Kontext der elektronischen Patientenakte".
            <br />
            Die Testdaten sind an die Bundle-Struktur der DiGA actensio, mementor GmbH,
            orientiert.
            <br />
            Folgende Daten werden aus dem Bundle geparst:
            <ul>
              <li>Patient-Header basiert auf KBV_PR_MIO_DIGA_Patient</li>
              <li>
                Nahrungsmittelaufnahme basiert auf
                KBV_PR_MIO_DIGA_Observation_Nutrition_Intake und
                KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types
              </li>
              <li>
                Sonstige Befunde und Ergebnisse basiert auf
                KBV_PR_MIO_DIGA_Observation_Free
              </li>
            </ul>
            Für die restlichen Komponenten sind die Daten zu Demonstrationszwecken
            hard-gecoded
            <br />
            Die Suchfunktion und Datumsfilter sind zum aktuellen Zeitpunkt noch nicht
            implementiert
          </div>
          <div id="footer">
            <button onClick={this.closeNotice}>Schließen</button>
          </div>
        </div>
      </Host>
    );
  }
}
