import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import postcssLogical from "postcss-logical";
import postcssPresetEnv from "postcss-preset-env";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssLogical({ dir: "ltr" }),
        autoprefixer({ grid: "autoplace" }),
        postcssPresetEnv(),
      ],
    },
  },
});
