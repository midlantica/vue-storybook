const path = require('path')
const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js') // or your own config file
require('storybook-tailwind-foundations/initialize.js')
  .default(tailwindConfigPath)


module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    '../node_modules/storybook-tailwind-foundations/**/*.stories.js'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-tailwind-dark-mode",
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}