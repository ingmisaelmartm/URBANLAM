import { defineConfig } from "vite";

export default defineConfig({
  root: "src",           // Carpeta editable
  build: {
    outDir: "../dist",   // Carpeta de salida
    emptyOutDir: true
  }
});
