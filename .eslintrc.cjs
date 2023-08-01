"use strict"

require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "@vue/typescript/recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier",
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prettier/prettier": [
            "error",
            {
                "printWidth": 200,
                "tabWidth": 4,
                "useTabs": false,
                "semi": false,
                "singleQuote": false,
                "trailingComma": "es5",
                "bracketSpacing": true,
                "jsxBracketSameLine": true,
                "arrowParens": "always",
                "requirePragma": true,
                "insertPragma": true,
                "proseWrap": "always",
            },
        ],
        "quotes": [
            "error",
            "double",
        ],
        "no-multi-spaces": [
            2,
            {
                "exceptions": {
                    "ExportNamedDeclaration": true,
                    "ImportDeclaration": true,
                },
            },
        ],
        "semi": 0,
        "indent": [
            "error",
            4,
        ],
        "comma-dangle": [
            "error",
            "always-multiline",
        ],
        "vue/max-attributes-per-line": [
            "error",
            {
                "singleline": {
                    "max": 4,
                },
                "multiline": {
                    "max": 1,
                },
            },
        ],
        "vue/first-attribute-linebreak": [
            "error", {
                "singleline": "ignore",
                "multiline": "beside",
            }],
        "vue/html-closing-bracket-spacing": [
            "error",
            {
                "startTag": "never",
                "endTag": "never",
                "selfClosingTag": "never",
            },
        ],
        "vue/multi-word-component-names": "off",
        "vue/html-closing-bracket-newline": [
            "error",
            {
                "singleline": "never",
                "multiline": "never",
            },
        ],
        "vue/html-indent": [
            "error",
            4,
            {
                "attribute": 1,
                "baseIndent": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
                "ignores": [],
            },
        ],
        "vue/script-indent": [
            "error",
            4,
            {
                "baseIndent": 1,
                "switchCase": 0,
                "ignores": [],
            },
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always",
            },
        ],
    },
    "overrides": [
        {
            "files": [
                "*.vue",
            ],
            "rules": {
                "indent": "off",
            },
        },
    ],
}
