import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import viteTsconfigPaths from "vite-tsconfig-paths";
import packageJson from "./package.json";

const ReactCompilerConfig = {};

const packages = ["zustand", "i18next", "react-router-dom"];

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "import.meta.env.VITE_REACT_APP_VERSION": JSON.stringify(
      packageJson.version
    ),
  },
  server: {
    port: 3006,
    host: "localhost",
    fs: {
      allow: [".."],
    },
  },
  build: {
    minify: "terser",
    minifySyntax: true,
    cssMinify: true,
    brotliSize: true,
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      format: {
        comments: false,
      },
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          for (let thePackage of packages) {
            if (id.includes(thePackage)) {
              return thePackage;
            }
          }
        },
      },
    },
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
        },
      }),
    ],
  },
  plugins: [react(), eslint(), viteTsconfigPaths()],
});
