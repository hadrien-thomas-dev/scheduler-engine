import { defineConfig } from "vite";

export default defineConfig({
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