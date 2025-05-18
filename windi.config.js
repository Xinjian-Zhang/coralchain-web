import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  theme: {
    extend: {
    },
  },
  plugins: [
    plugin(({ addBase }) => {
    }),
  ],
})
