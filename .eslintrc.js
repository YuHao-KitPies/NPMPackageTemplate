module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2020": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 11
    },
    "parser": "babel-eslint",
    "rules": {
    },
    "overrides": [
        {
            "files": ["src/**/*.ts", "test/**/*.ts"],
            "extends": [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier/@typescript-eslint",
                "plugin:prettier/recommended"
            ],
            "parser": "@typescript-eslint/parser",
            "plugins": [
                "@typescript-eslint"
            ],
        }
    ]
};
