const _ = require("lodash");
const { colors } = require("tailwindcss/defaultTheme");

module.exports = _.reduce(colors, function(result, shades, color) {
  if (typeof shades === "object") {
    _.map(shades, function(value, shade) {
      result[`${color}-${shade}`] = `0 0 0 3px ${value}`;
    });
  }

  return result;
}, {});
