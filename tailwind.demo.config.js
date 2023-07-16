const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import("tailwindcss").Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./index.html",
        "./demo/**/*.{vue,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}

