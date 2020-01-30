module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ["airbnb-base", "plugin:@typescript-eslint/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["@typescript-eslint", "import"],
    rules: {
        "import/no-unresolved": "off",
        "no-console": "off",
        "prefer-destructuring": "off"
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".ts"]
            }
        }   
    },

};
