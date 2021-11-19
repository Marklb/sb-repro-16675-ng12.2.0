// I am using Windows, so I can't run Compodoc from builder without #16728.
// import { setCompodocJson } from "@storybook/addon-docs/angular";

// // @ts-ignore
// // eslint-disable-next-line import/extensions, import/no-unresolved
// import docJson from "../documentation.json";

// setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}
