// محتوى ملف postcss.config.js
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-rtl")(),
    // أي إضافات أخرى تخص postcss تضاف هنا
  ],
};
