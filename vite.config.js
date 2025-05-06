import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPresetEnv  from 'postcss-preset-env';

export default defineConfig({
    content: [
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
  plugins: [
      react(),
      postcssPresetEnv({
          /* pluginOptions */
          features: {},
      })
  ],
})
