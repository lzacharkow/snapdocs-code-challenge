module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "no-console": [0],
      "no-tabs": [0],
      "indent": [0],
      "max-len": [0],
      "no-underscore-dangle": [0],
      "import/no-extraneous-dependencies": [0],
      "react/jsx-indent": [0],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/forbid-prop-types": [0],
      "react/jsx-indent-props": [0],
      "react/jsx-first-prop-new-line": [0],
      "react/jsx-closing-bracket-location": [0],
      "react/jsx-max-props-per-line": [0],
      "padded-blocks": [0],
      "no-plusplus": [0],
      "jsx-a11y/accessible-emoji": [0]
    },
    "globals": {
      "window": true,
      "google": true,
      "document": true,
    }
};
