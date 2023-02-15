import "../src/assets/css/main.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: true,
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'light', value: '#f5f5f5' },
      { name: 'dark', value: '#121212' },
    ],
  }
}