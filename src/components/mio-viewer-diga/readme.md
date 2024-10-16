# mio-viewer-diga



<!-- Auto Generated Below -->


## Properties

| Property                      | Attribute            | Description | Type     | Default     |
| ----------------------------- | -------------------- | ----------- | -------- | ----------- |
| `base64FhirData` _(required)_ | `base-6-4-fhir-data` |             | `string` | `undefined` |


## Dependencies

### Depends on

- [mio-viewer-diga-detail](../mio-viewer-diga-detail)
- [mio-viewer-diga-notice](../mio-viewer-diga-notice)
- [mio-viewer-diga-header](../mio-viewer-diga-header)
- [mio-viewer-diga-subheader](../mio-viewer-diga-subheader)
- [mio-viewer-diga-filter-menu](../mio-viewer-diga-filter-menu)
- [mio-viewer-diga-record-overview](../mio-viewer-diga-record-overview)

### Graph
```mermaid
graph TD;
  mio-viewer-diga --> mio-viewer-diga-detail
  mio-viewer-diga --> mio-viewer-diga-notice
  mio-viewer-diga --> mio-viewer-diga-header
  mio-viewer-diga --> mio-viewer-diga-subheader
  mio-viewer-diga --> mio-viewer-diga-filter-menu
  mio-viewer-diga --> mio-viewer-diga-record-overview
  mio-viewer-diga-detail --> mio-viewer-diga-detail-questionaire
  mio-viewer-diga-detail --> mio-viewer-diga-detail-vitalsign
  mio-viewer-diga-detail --> mio-viewer-diga-detail-observation
  mio-viewer-diga-detail --> mio-viewer-diga-detail-nutrition
  mio-viewer-diga-detail --> mio-viewer-diga-detail-environmentalfactor
  mio-viewer-diga-detail --> mio-viewer-diga-detail-goal
  mio-viewer-diga-detail --> mio-viewer-diga-detail-appointment
  mio-viewer-diga-detail --> mio-viewer-diga-detail-diaryentry
  mio-viewer-diga-record-overview --> mio-viewer-diga-record-overview-section
  mio-viewer-diga-record-overview-section --> mio-viewer-diga-list-sort-indicator
  style mio-viewer-diga fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
