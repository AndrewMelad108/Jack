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
    localStorage.setItem("lang", "ar");
    if (this.lang === "en") {
      this.lang = "ltr";
    } else {
      this.lang = "rtl";
    }
  },
};
</script>
<style>
html,
#app,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
