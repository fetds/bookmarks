const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  theme : {
    extend : {
      boxShadow : require("./tailwind/box_shadow")
    },

    fontFamily : {
      "sans" : ["Inter", ...fontFamily.sans]
    }
  },

  plugins : [
    require("@tailwindcss/custom-forms")
  ],

  purge : {
    enabled : process.env.NODE_ENV === "production",
    content : [
      "./components/**/*.{js,jsx}",
      "./pages/**/*.{js,jsx}"
    ]
  },

  variants : {
    cursor  : ["disabled", "hover"],
    opacity : ["disabled", "focus", "hover"]
  }
};
