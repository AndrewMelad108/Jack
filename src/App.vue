<template>
  <div id="app" :dir="lang">
    <router-view />
    <div class="flex">
      <!-- <p class="pr-4">this is p</p> -->
      <span class="bg-red-500 ml-10 w-24 inline-block">{{ $t("arabic") }}</span>
    </div>
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
