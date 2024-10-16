import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "mio-viewer",
  globalStyle: "src/global/global.css",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      copy: [
        {
          src: "fonts",
          dest: "fonts",
        },
        {
          src: "assets",
          dest: "build/assets",
        },
      ],
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
