import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100
      },
    },
    include: ["./src/**/*.test.ts"]
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      // Nom global de la librairie (utile pour les builds UMD)
      name: "scheduler-engine",
      // Nom des fichiers de sortie
      fileName: (format) => `scheduler-engine.${format}.js`,
    },
    rollupOptions: {
      external: ["date-fns"],
      output: {
        globals: {
          "date-fns": "dateFns",
        },
      },
    },
  },
});
