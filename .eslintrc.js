module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11
    },
    "plugins": [
        "@typescript-eslint", 
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error"
    }
};
