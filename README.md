# Prototyp für den MIO Viewer DiGA-Toolkit

Dies ist das Repository für den JavaScript Prototypen für die Anzeige des MIO DiGA-Toolkit V1.1.0.
Die Entwicklung fand in Rahmen der Masterarbeit "Visualisierung von Daten aus digitalen Gesundheitsanwendungen (DiGA)
in Form einer Webkomponente (MIO-Viewer) im Kontext der elektronischen Patientenakte" von Thomas Drockner, 04.11.2024, in Zusammenarbeit mit der mio42 GmbH statt.
Es handelt sich bei diesem Prototypen um eine Webkomponente basierend auf den aktuellen Webstandards HTML5 und JavaScript, welche MIO-Daten aus Base64-codierten Datenstring einliest.
Für das Einlesen der MIO-Daten wird eine interne Parsing-Funktion genutzt. 
In der aktuellen Version werden die folgenden Profile eingelesen: 
- KBV_PR_MIO_DIGA_Patient
- KBV_PR_MIO_DIGA_Observation_Free
- KBV_PR_MIO_DIGA_Observation_Nutrition_Intake
- KBV_PR_MIO_DIGA_Observation_Nutrition_Intake_Food_Composition_Types

Für die Entwicklung der Webkomponenten wird TypeScript mit StencilJS genutzt.

Diese README soll einen Überblick über die wichtigsten technischen Informationen zur Nutzung der App geben.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Verwendete Bibliotheken / Pakete (Dependencies)

Dependencies der Komponenten:
- [StencilJS](http://stenciljs.com) 4.12.2

Die Webkomponenten werden von StencilJS in eine Bibliothek von Standard-Webkomponenten (HTML5 + JS) kompiliert und können als solche genutzt werden.

Dependencies für die Entwicklung:
- NodeJs v20.11.0
- TypeScript 5.5.4

Für eine komplette Übersicht der Peer-Dependencies der einzelnen Bibliotheken liefern wir die `stencil-prototyp/package-lock.json` mit.


### Übergeben der MIO-Daten

In der index.html ist ein MIO-Beispiel als Base64-codierter String.
Dieser String kann der Webkomponente als Wert für die Property `base-6-4-fhir-data` folgenderweise übergeben werden:

```
<mio-viewer-diga base-6-4-fhir-data="<base64StringGoesHere>" />
```

Die Webkomponente erwartet als Eingabe ein FHIR-Bundle konform zum Profil `KBV_PR_MIO_DiGA_Bundle`. Dieses kann von dem Primärsystem in eigener Weise geladen und in Base64 codiert werden und dann an die Komponenten übergeben werden.

### Anpassen der Darstellung / des Designs

Das Design kann per CSS-Variablen konfiguriert werden.
Die aktuelle Auswahl und Standardwerte der angebotenen CSS-Variable finden Sie in `stencil-prototyp/src/global.css`

## Nutzung der Unterkomponenten als Webkomponenten

Die Viewer-Komponente agiert als eine übergreifende Rahmenkomponente, welche Unterkomponenten enthält.
Diese wurden ebenfalls mit StencilJS erstellt und können einzeln genutzt oder angepasst werden.
Die Verwendung der Komponenten ist equivalent zur Verwendung der Viewer-Komponente selbst.

## Weiterentwicklung / Development Setup

Die folgenden Abschnitte sind vor allem relevant für die aktive Entwicklung / Build der Komponenten von einer eigenen Maschine.

### NodeJS

Installieren Sie eine aktuelle Version von NodeJs. Wir empfehlen den Download der LTS-Version von der [offiziellen Webseite](https://nodejs.org/en/)

### Erstmaliges Set-Up

```bash
# clone the repo
git clone https://github.com/thomasDrockner/DiGA-Viewer.git

# navigate to project directory
cd DiGA-Viewer

# install dependencies
npm install

# run dev server
npm start
```
Es sollten alle benötigten Pakete installiert werden.

### Editor

Für die Frontend-Entwicklung empfehlen wir die Verwendung von [VSCode](https://code.visualstudio.com/download)

### VS Code Erweiterungen (Empfohlen)

Für einheitlichen Code-Stil empfehlen wir die Nutzung von Formatierungs- und Linting-Plugins.
Bitte installieren Sie [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
Bitte installieren Sie [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
Regeln für das Zusammenspiel von Prettier und ESLint werden in der `package.json` konfiguriert

### Lokales Ausführen der Applikation

Öffnen Sie ein Terminal / eine Kommandozeile und navigieren Sie in den Projekt-Ordner.
Falls noch nicht geschehen, installieren Sie einmalig alle Dependencies mit `npm install`.
Starten Sie den Entwicklungsserver mit `npm start`

Die StencilJS-App sollte auf `localhost:3333` verfügbar sein.

### Entwicklung - Arbeitsablauf

Öffnen Sie das gesamte Repository in Ihrem Editor.
Zum Ausführen der Applikation, folgen Sie dem vorherigen Abschnitt.

Wenn Sie die Dateien bearbeiten, sollte die Web-Applikation in Ihrem Browser automatisch aktualisiert werden.

Sie können neue Komponenten über das Terminal erstellen, indem Sie `stencil generate` verwenden.
Für weitere Informationen empfehlen wir die Dokumentation der [Stencil CLI](https://stenciljs.com/docs/cli)

### Erzeugen der Statischen Anwendungsdateien (Production Build)

Wir haben alle `output_targets` von StencilJS aktiviert: `dist`, `dist-custom-elements`, `www` und hoffen damit Flexibilität in der Nutzung zu ermöglichen.
Mehr Informationen zu den Output Targets hier: https://stenciljs.com/docs/output-targets
Die Dateien werden in den `dist` sowie in den `www` Ordner erzeugt.
