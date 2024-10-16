import { Component, Host, h, Prop, getAssetPath } from "@stencil/core";

@Component({
  tag: "mio-viewer-diga-list-sort-indicator",
  styleUrl: "mio-viewer-diga-list-sort-indicator.css",
  shadow: true,
})
export class MioViewerDigaListSortIndicator {
  /**
   * Beschreibt ob der Sortier-Zustand einer Liste aktiv ist
   */
  @Prop() active: boolean;
  /**
   * Beschreibt ob der Sortier-Zustand einer Liste rückwärts sortiert ist
   */
  @Prop() reversed: boolean;

  private upArrowInactivePath = getAssetPath("assets/arrow_drop_up_inactive.svg");
  private upArrowActivePath = getAssetPath("assets/arrow_drop_up_active.svg");
  private downArrowInactivePath = getAssetPath("assets/arrow_drop_down_inactive.svg");
  private downArrowActivePath = getAssetPath("assets/arrow_drop_down_active.svg");

  get upArrowPath(): string {
    if (this.active && this.reversed) {
      return this.upArrowActivePath;
    }
    return this.upArrowInactivePath;
  }

  get downArrowPath(): string {
    if (this.active && !this.reversed) {
      return this.downArrowActivePath;
    }
    return this.downArrowInactivePath;
  }

  render() {
    return (
      <Host>
        <img src={this.upArrowPath} />
        <img src={this.downArrowPath} />
      </Host>
    );
  }
}
