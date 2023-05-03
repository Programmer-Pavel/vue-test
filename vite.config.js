import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/css/_fonts.scss";
          @import "./src/assets/css/_variables.scss";
          @import "./src/assets/css/_normalize.scss";
        `,
      },
    },
  },
});
