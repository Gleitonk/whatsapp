module.exports = {
  extends: "@rocketseat/eslint-config/react",
  rules: {
    camelcase: "off",
    "no-undef": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        endOfLine: "auto",
      },
    ],
  },
};
