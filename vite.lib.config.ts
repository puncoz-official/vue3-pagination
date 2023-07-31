import vue from "@vitejs/plugin-vue"
import { resolve } from "node:path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            isProduction: true,
        }),
    ],

    resolve: {
        alias: {
            "@lib": resolve(__dirname, "./lib/Pagination"),
            "#lib": resolve(__dirname, "./lib/Pagination/@types"),
        },
    },

    build: {
        cssCodeSplit: false,

        lib: {
            entry: resolve(__dirname, "lib/Pagination/index.ts"),
            name: "@puncoz/vue3-pagination",
            fileName: (format) => `vue3-pagination.${format}.js`,
        },

        outDir: resolve(__dirname, "dist"),

        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["vue"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
})
