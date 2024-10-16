import { Component, Host, h, Event, EventEmitter, Prop, State } from "@stencil/core";
import { FilterStates } from "../../utils/recordFilters";

@Component({
  tag: "mio-viewer-diga-filter-menu",
  styleUrl: "mio-viewer-diga-filter-menu.css",
  shadow: true,
})
export class MioViewerDigaFilterMenu {
  /**
   * Event wird ausgelöst wenn ein Filter-Button geklickt wird,
   * dabei werden die ausgewählten Filter in FilterStates übergeben
   */
  @Event() filtersApplied: EventEmitter<FilterStates>;
  /**
   * Beschreibt alle Kategorien die innerhalb des Bundles verwendet werden
   */
  @Prop() filterCategories: string[];

  @State() filterStates: FilterStates;

  componentWillLoad() {
    this.filterStates = {
      categoryFilters: {},
    };

    for (const category of this.filterCategories) {
      this.filterStates.categoryFilters[category] = true;
    }
  }

  private toggleCategory = category => {
    this.filterStates = {
      ...this.filterStates,
      categoryFilters: {
        ...this.filterStates.categoryFilters,
        [category]: !this.filterStates.categoryFilters[category],
      },
    };
    this.filtersApplied.emit(this.filterStates);
  };

  render() {
    return (
      <Host>
        {this.filterCategories.map(category => (
          <button
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => this.toggleCategory(category)}
            class={
              this.filterStates.categoryFilters[category] ? "selected" : "disabled"
            }
          >
            {category}
          </button>
        ))}
      </Host>
    );
  }
}
