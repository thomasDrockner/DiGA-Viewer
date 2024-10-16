import {
  Component,
  State,
  Prop,
  Event,
  EventEmitter,
  Host,
  h,
  Fragment,
  getAssetPath,
} from "@stencil/core";
import { DiGAEntrySummary, DiGAEntrySummaryCategory } from "../../utils/recordData";

enum SortMode {
  LatestRecord,
  EntryType,
}

function getSummaryCompareFn(
  sortMode: SortMode,
): (a: DiGAEntrySummary, b: DiGAEntrySummary) => number {
  switch (sortMode) {
    case SortMode.LatestRecord:
      return (a, b) =>
        new Date(b.recordDate).getTime() - new Date(a.recordDate).getTime();
    case SortMode.EntryType:
      return (a, b) => a.heading.localeCompare(b.heading);
    default:
      return (_0, _1) => 0;
  }
}

@Component({
  tag: "mio-viewer-diga-record-overview-section",
  styleUrl: "mio-viewer-diga-record-overview-section.css",
  shadow: true,
})
export class MioViewerDigaRecordOverviewSection {
  /**
   * Beschreibt den vom Nutzer ausgewählten Eintrag innerhalb der Liste
   */
  @Prop() selectedEntry: string;
  /**
   * Beschreibt eine Liste der gesamten Einträgen nach Kategorien sortiert
   */
  @Prop() recordSummaryCategory: DiGAEntrySummaryCategory;
  /**
   * Event wird ausgelöst sobald der Nutzer einen Eintrag auswählt
   * dabei wird id des ausgewählten Eintrags übertragen
   */
  @Event() entrySelected: EventEmitter<string>;

  @State() sortMode: SortMode;

  @State() sortReversed: boolean = false;

  @State() listExpanded: boolean = false;

  private listExpandable: boolean = false;

  private chevronDownIconPath = getAssetPath("assets/chevron-down.svg");

  private chevronUpIconPath = getAssetPath("assets/chevron-up.svg");

  private sortedRecordSummaries: DiGAEntrySummary[];

  private changeSortMode(newSortMode: SortMode) {
    if (newSortMode === this.sortMode) {
      this.sortReversed = !this.sortReversed;
      this.sortedRecordSummaries.reverse();
    } else {
      this.sortReversed = false;
      this.sortedRecordSummaries = Array.from(this.recordSummaryCategory.entries).sort(
        getSummaryCompareFn(newSortMode),
      );
      this.sortMode = newSortMode;
    }
    this.listExpanded = true;
  }

  private sortByLatestRecord = _ => {
    this.changeSortMode(SortMode.LatestRecord);
  };

  private sortByEntryType = _ => {
    this.changeSortMode(SortMode.EntryType);
  };

  private toggleExpand = _ => {
    this.listExpanded = !this.listExpanded;
  };

  componentWillLoad() {
    this.changeSortMode(SortMode.LatestRecord);

    if (this.sortedRecordSummaries.length > 3) {
      this.listExpandable = true;
      this.listExpanded = false;
    }
  }

  private renderTableRows(summaries: DiGAEntrySummary[]) {
    return (
      <>
        {summaries.map(entry => (
          <tr
            class={
              this.selectedEntry === entry.id
                ? "overview-section-row-selected"
                : "overview-section-row"
            }
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => this.entrySelected.emit(entry.id)}
          >
            <td class="td-datetime">
              {new Date(entry.recordDate).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </td>
            <td class="td-entry">
              <div class="entry-heading">{entry.heading}</div>
              <div class="entry-detail">{entry.detail}</div>
            </td>
          </tr>
        ))}
      </>
    );
  }

  render() {
    return (
      <Host>
        <div id="header">
          {this.recordSummaryCategory.name}
          {this.listExpandable && (
            <img
              class="expand-icon"
              onClick={this.toggleExpand}
              src={
                this.listExpanded ? this.chevronUpIconPath : this.chevronDownIconPath
              }
            />
          )}
        </div>
        <div id="content">
          <table>
            <thead>
              <tr>
                <th
                  class="th-datetime"
                  onClick={this.sortByLatestRecord}
                >
                  <div class="th-content">
                    Zeitpunkt
                    <mio-viewer-diga-list-sort-indicator
                      active={SortMode.LatestRecord === this.sortMode}
                      reversed={this.sortReversed}
                    />
                  </div>
                </th>
                <th
                  class="th-entry-type"
                  onClick={this.sortByEntryType}
                >
                  <div class="th-content">
                    {this.recordSummaryCategory.dataDescription}
                    <mio-viewer-diga-list-sort-indicator
                      active={SortMode.EntryType === this.sortMode}
                      reversed={this.sortReversed}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="tbody">
              {!this.listExpandable || this.listExpanded
                ? this.renderTableRows(this.sortedRecordSummaries)
                : this.renderTableRows(this.sortedRecordSummaries.slice(0, 3))}
            </tbody>
          </table>
          {this.listExpandable && (
            <img
              class="expand-icon-bottom"
              onClick={this.toggleExpand}
              src={
                this.listExpanded ? this.chevronUpIconPath : this.chevronDownIconPath
              }
            />
          )}
        </div>
      </Host>
    );
  }
}
