<template>
  <div class="language-switcher" @click="toggleLanguage()">
    <button
      class="px-4 py-2 block ml-auto rounded-lg border-0 hover:text-main-color hover:bg-green-50 font-bold transition-all ease-in-out duration-500 dark:border-gray-700 bg-main-color text-white"
    >
      {{ lang === "ar" ? "English" : "العربيه" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "switch-input",
  data() {
    return {
      lang: "", // تحديث القيمة الابتدائية لتكون فارغة
    };
  },
  created() {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      this.lang = savedLang;
      const newDir = this.lang === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = newDir;
    }
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
      localStorage.setItem("lang", this.lang);
    },
  },
};
</script>

<style scoped></style>
