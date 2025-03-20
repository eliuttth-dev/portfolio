// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: '0.0.0.0', // Allows access from other devices
    port: 4321,
    allowedHosts: [
      '177d-85-251-218-228.ngrok-free.app',
    ],
  },
});
