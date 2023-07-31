<template>
  <div id="app" :dir="lang">
    <router-view />
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      lang: localStorage.getItem("lang"),
    };
  },
  mounted() {
    localStorage.setItem("lang", "en");
    if (this.lang === "en") {
      this.lang = "ltr";
    } else {
      this.lang = "rtl";
    }
  },
};
</script>
