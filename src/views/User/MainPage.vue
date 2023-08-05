<template>
  <section class="MainPage relative min-h-full">
    <UserHeader :checked="checkUser" />
    <UserHeaderPhone />
    <div class="mainPage-content">
      <div
        class="intro-section bg-main-color w-[100%] h-[500px] flex md:flex-row flex-col items-center justify-around"
      >
        <div class="intro-description capitalize space-y-10">
          <h1 class="intro-title text-white md:text-5xl text-3xl text-center">
            {{ $t("vehicle service") }}
          </h1>
          <button
            @click="goHome()"
            class="join-btn md:p-8 p-4 font-bold text-xl block mx-auto rounded-lg md:w-64 w-52 text-center text-main-color bg-white"
          >
            {{ $t("join now") }}
          </button>
        </div>
        <div class="md:w-90 md:min-h-[200px]">
          <img
            src="../../assets/images/Banner.png"
            alt="Banner-image"
            loading="lazy"
          />
        </div>
      </div>
      <servicesFeature />
      <WhyUs />
      <WhatTheyThink />
    </div>
    <UserFooter />
  </section>
</template>

<script>
import UserHeader from "@/components/User/MainPage/UserHeader.vue";
import UserHeaderPhone from "@/components/User/UserHeaderPhone.vue";
import servicesFeature from "@/components/User/MainPage/Services.vue";
import WhyUs from "@/components/User/MainPage/WhyUs.vue";
import WhatTheyThink from "@/components/User/MainPage/WhatTheyThink.vue";
import UserFooter from "@/components/User/MainPage/UserFooter.vue";
export default {
  name: "MainPage",
  data() {
    return { checkUser: true };
  },
  components: {
    UserHeader,
    UserFooter,
    UserHeaderPhone,
    servicesFeature,
    WhyUs,
    WhatTheyThink,
  },
  methods: {
    goHome() {
      this.$router.push({
        path: "/User/all-servies",
      });
    },
  },
};
</script>

<style></style>
