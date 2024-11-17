import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Omogućuje pristup s vanjskih uređaja
    port: 3000, // Možeš odabrati bilo koji slobodan port
  },
});
