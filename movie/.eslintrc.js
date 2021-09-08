module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        // vue
        // 'plugin:vue/vue3-essential', //LV1
        'plugin:vue/vue3-strongly-recommended', // LV 2
        // 'plugin:vue/vue3-recommended', // LV 3
        
        //js
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
          }],
          "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
          }],
            
    },
}