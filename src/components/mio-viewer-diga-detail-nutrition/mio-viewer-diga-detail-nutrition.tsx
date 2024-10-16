import { Component, Host, h, Prop } from "@stencil/core";
import { DiGANutritionDetails } from "../../utils/recordData";

@Component({
  tag: "mio-viewer-diga-detail-nutrition",
  styleUrl: "mio-viewer-diga-detail-nutrition.css",
  shadow: true,
})
export class MioViewerDigaDetailNutrition {
  /**
   * Beschreibt eine Nahrungsmittelaufnahme
   * orientiert an https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake
   * und https://fhir.kbv.de/StructureDefinition/KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types
   */
  @Prop() nutritionDetails!: DiGANutritionDetails;

  render() {
    return (
      <Host>
        <div id="heading">
          <div id="headingName">{this.nutritionDetails.heading}</div>
          <div id="recordDate">
            {new Date(this.nutritionDetails.recordDate).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </div>
        </div>
        <div id="body">
          <div id="table-heading">{this.nutritionDetails.detail}:</div>
          <table id="nutrition-table">
            {this.nutritionDetails.parts.map(data => (
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
