import { Component, Host, h, State, getAssetPath, Listen, Prop } from "@stencil/core";

import {
  DiGAEntryDetails,
  DiGAEntrySummaryCategory,
  DiGAPatientDetails,
} from "../../utils/recordData";
import { parseBundleData } from "../../utils/parsing/parseBundleData";
import { extractDiGAViewerData } from "../../utils/parsing/extractDiGAViewerData";
import { FilterStates } from "../../components";

//import { bundlePlaceholder } from "./mio-viewer-diga-placeholder-data";

@Component({
  tag: "mio-viewer-diga",
  styleUrl: "mio-viewer-diga.css",
  shadow: true,
})
export class MioViewerDiga {
  /**
   *
   */
  @Prop() base64FhirData!: string;

  private base64ToText(base64: string) {
    const binString = atob(base64);
    return new TextDecoder().decode(Uint8Array.from(binString, m => m.codePointAt(0)));
  }

  @State() filterStates: FilterStates;
  @State() selectedEntry: string = "";
  @State() showDetails: boolean = false;
  @State() showNotice: boolean = true;

  private searchIconPath = getAssetPath("assets/search.svg");

  @Listen("noticeOpen")
  handleNoticeOpen() {
    this.showNotice = true;
  }

  @Listen("noticeClose")
  handleNoticeClose(_: globalThis.Event) {
    this.showNotice = false;
  }

  @Listen("entrySelected")
  diseaseSelectedHandler(event: CustomEvent<string>) {
    this.selectedEntry = event.detail;
    this.showDetails = true;
  }

  @Listen("detailsHidden")
  detailsHiddenHandler(_: CustomEvent) {
    this.showDetails = false;
    this.selectedEntry = "";
  }

  @Listen("filtersApplied")
  filtersAppliedHandler(event: CustomEvent<FilterStates>) {
    this.filterStates = event.detail;
    this.applyFilter();
  }

  // =================================================

  private filteredRecordSummaryCategories: DiGAEntrySummaryCategory[];
  private filteredEntryDetails: DiGAEntryDetails[];
  private filterCategories: string[] = [];

  private recordSummaryCategories: DiGAEntrySummaryCategory[];
  private entryDetails: DiGAEntryDetails[];
  private entryDetailsById: Record<string, DiGAEntryDetails>;
  private patientDetails: DiGAPatientDetails;

  private parseBundleInput() {
    const parsedBundle = parseBundleData(this.base64ToText(this.base64FhirData));
    ({
      summaryCategories: this.recordSummaryCategories,
      entryDetails: this.entryDetails,
      detailsById: this.entryDetailsById,
      patientDetails: this.patientDetails,
    } = extractDiGAViewerData(parsedBundle));
  }

  private populateFilterData() {
    this.filterCategories = this.recordSummaryCategories.map(category => category.name);
    this.filterStates = {
      categoryFilters: {},
    };

    for (const category of this.filterCategories) {
      this.filterStates.categoryFilters[category] = true;
    }
  }

  private applyFilter() {
    this.filteredRecordSummaryCategories = this.recordSummaryCategories.filter(
      cat => this.filterStates.categoryFilters[cat.name],
    );
    this.filteredEntryDetails = this.entryDetails.filter(
      cat => this.filterStates.categoryFilters[cat.categoryName],
    );
    if (
      !this.filteredEntryDetails.includes(this.entryDetailsById[this.selectedEntry])
    ) {
      this.showDetails = false;
    }
  }

  componentWillLoad() {
    this.parseBundleInput();
    this.populateFilterData();
    this.applyFilter();
  }

  private detailList() {
    if (this.showDetails) {
      return (
        <mio-viewer-diga-detail
          entryName={this.selectedEntry}
          entryDetails={this.entryDetailsById[this.selectedEntry]}
        />
      );
    }
  }

  render() {
    return (
      <Host>
        {this.showNotice && <mio-viewer-diga-notice />}
        <mio-viewer-diga-header patient={this.patientDetails} />
        <div id="body">
          <mio-viewer-diga-subheader />
          <div id="filters">
            <div id="search-container">
              <img src={this.searchIconPath} />
              <input
                id="search-input"
                placeholder="Suche..."
                disabled
              />
            </div>
            <div id="date-filter-container">
              <div class="date-filter">
                <label htmlFor="filter-start">von:</label>
                <input
                  type="date"
                  id="filter-start"
                  class="date-input"
                  disabled
                />
              </div>
              <div class="date-filter">
                <label htmlFor="filter-end">bis:</label>
                <input
                  type="date"
                  id="filter-end"
                  class="date-input"
                  disabled
                />
              </div>
              <input
                type="submit"
                id="date-filter-btn"
                value="Filter anwenden"
                disabled
              />
            </div>
            <mio-viewer-diga-filter-menu filterCategories={this.filterCategories} />
          </div>
          <div id="side-by-side-layout">
            <mio-viewer-diga-record-overview
              recordSummaryCategories={this.filteredRecordSummaryCategories}
              selectedEntry={this.selectedEntry}
            />
            {this.detailList()}
          </div>
        </div>
      </Host>
    );
  }
}
