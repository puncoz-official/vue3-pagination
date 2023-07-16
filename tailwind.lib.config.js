/** @type {import("tailwindcss").Config} */
module.exports = {
    prefix: "pg-",
    content: [
        "./lib/Pagination/**/*.{vue,ts}",
    ],
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
}

