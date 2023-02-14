import "../src/assets/css/main.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: false,
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: 'whitesmoke' },
      { name: 'dark', value: 'black' },
    ],
  },
}