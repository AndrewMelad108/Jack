<template>
  <section class="Header py-4 md:flex hidden justify-around items-center px-20">
    <div class="logo-image w-3/6">
      <img
        src="../../../assets//images/logo.png"
        alt="logo-image"
        loading="lazy"
        class="h-10"
      />
    </div>
    <div
      class="header-links flex items-center gap-4 justify-around text-xl font-bold text-[#858585] w-3/6"
    >
      <router-link class="hover:text-black" :to="{ path: '/User/home' }">{{
        $t("Home")
      }}</router-link>
      <router-link
        class="hover:text-black"
        :to="{ path: '/User/all-servies' }"
        >{{ $t("Servies") }}</router-link
      >
      <router-link
        v-if="checked"
        class="hover:text-black text-main-color"
        :to="{ name: 'LogIn' }"
        >{{ $t("Join") }}</router-link
      >
      <SwitchLang />
    </div>
  </section>
</template>

<script>
import SwitchLang from "@/components/Shared/Form/SwitchLang.vue";

export default {
  props: ["checked"],
  components: {
    SwitchLang,
  },
};
</script>

<style></style>
