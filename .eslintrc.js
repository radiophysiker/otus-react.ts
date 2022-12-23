module.exports = {
    env: {
        browser: true,
        es2020: true,
        "jest/globals": true,
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        // "plugin:import/typescript",
        "plugin:jest/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-function-return-type": 0,
        "react/prop-types": 0,
    },
    plugins: [
        "@typescript-eslint",
        "jest",
        "prettier"
    ],
    parserOptions: {
        sourceType: "module",
        parser: "babel-eslint",
        ecmaVersion: 2020,
    },
    overrides: [
        {
            files: ["webpack.config.js"],
            rules: {
                "@typescript-eslint/no-var-requires": ["off"],
            },
        },
    ],
};
