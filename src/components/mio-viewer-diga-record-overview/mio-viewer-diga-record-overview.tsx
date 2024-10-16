import { Component, Host, h, Prop } from "@stencil/core";
import { DiGAEntrySummaryCategory } from "../../utils/recordData";

@Component({
  tag: "mio-viewer-diga-record-overview",
  styleUrl: "mio-viewer-diga-record-overview.css",
  shadow: true,
})
export class MioViewerDigaRecordOverview {
  /**
   * Beschreibt den vom Nutzer ausgewählten Eintrag innerhalb der Liste
   */
  @Prop() selectedEntry: string;
  /**
   * Beschreibt eine Liste der gesamten Einträgen nach Kategorien sortiert
   */
  @Prop() recordSummaryCategories: DiGAEntrySummaryCategory[];

  render() {
    return (
      <Host>
        {this.recordSummaryCategories.map(category => (
          <mio-viewer-diga-record-overview-section
            recordSummaryCategory={category}
            selectedEntry={this.selectedEntry}
            key={category.name}
          />
        ))}
      </Host>
    );
  }
}
