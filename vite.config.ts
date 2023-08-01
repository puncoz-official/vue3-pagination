import vue from "@vitejs/plugin-vue"
import { resolve } from "node:path"
import { defineConfig } from "vite"
import dtsPlugin from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            isProduction: true,
        }),
        dtsPlugin({
            insertTypesEntry: true,
        }),
    ],

    resolve: {
        alias: {
            "@": resolve(__dirname, "./Pagination"),
            "#": resolve(__dirname, "./Pagination/@types"),
        },
    },

    build: {
        cssCodeSplit: false,
        minify: true,
        reportCompressedSize: true,

        lib: {
            entry: resolve(__dirname, "Pagination/index.ts"),
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
