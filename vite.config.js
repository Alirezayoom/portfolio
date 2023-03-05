import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(
  {
    plugins: [react()],
  },
  ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
      define: {
        __APP_ENV__: env.APP_ENV,
      },
    };
  }
);
