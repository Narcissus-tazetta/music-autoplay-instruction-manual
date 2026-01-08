import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    // GitHub Pages project site: https://<user>.github.io/<repo>/
    base: "/music-autoplay-instruction-manual/",
    plugins: [react()],
});
