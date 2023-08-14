<template>
  <div class="language-switcher">
    <button
      class="px-4 py-2 block ml-auto m-4 rounded-lg border-0 hover:text-main-color hover:bg-green-50 font-bold transition-all ease-in-out duration-500 dark:border-gray-700 bg-main-color text-white"
      @click="toggleLanguage"
    >
      {{ lang === "ar" ? "English" : "Arabic" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "switch-input",
  data() {
    return {
      lang: false,
    };
  },

  methods: {
    toggleLanguage() {
      this.lang = this.lang === "en" ? "ar" : "en";
      const newDir = this.lang === "ar" ? "rtl" : "ltr";

      this.$store.commit("setLang", {
        lang: this.lang,
        isRTL: newDir === "rtl",
      });

      document.documentElement.dir = newDir;
    },
  },
};
</script>

<style scoped></style>
