import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {heroui} from "@heroui/react";

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
      tailwindcss(),
      heroui
  ],
})
