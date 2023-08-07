<template>
  <section
    class="Header py-8 md:flex hidden justify-around items-center max-md:px-40 px-20"
  >
    <div class="logo-image max-md:w-4/6 w-4/6">
      <img
        src="../../../assets//images/logo.png"
        alt="logo-image"
        loading="lazy"
        class="h-10"
      />
    </div>
    <div
      class="header-links flex justify-around text-xl font-bold text-[#858585] max-md:w-2/6 w-2/6"
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
    </div>
  </section>
</template>

<script>
export default {
  props: ["checked"],
};
</script>

<style></style>
