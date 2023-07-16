import vue              from "@vitejs/plugin-vue"
import { resolve }      from "node:path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@demo": resolve(__dirname, "./demo"),
            "#demo": resolve(__dirname, "./demo/@types"),
            "@lib": resolve(__dirname, "./lib/Pagination"),
            "#lib": resolve(__dirname, "./lib/Pagination/@types"),
        },
    },
    server: {
        port: 3000,
    },
    build: {
        outDir: resolve(__dirname, "build"),
    },
})
