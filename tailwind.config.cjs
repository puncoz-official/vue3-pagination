/** @type {import("tailwindcss").Config} */
module.exports = {
    prefix: "pg-",
    darkMode: ["class", "[data-theme=\"dark\"]"],
    important: ".pg__pagination",
    content: [
        "./Pagination/**/*.{vue,ts}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "select": "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
}

