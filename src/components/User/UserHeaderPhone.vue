<template>
  <section class="HeaderPhone md:hidden block">
    <div
      class="bg-main-color relative py-2 px-10 w-[100%] h-12 md:hidden flex justify-between items-center"
    >
      <img
        src="../../assets//images/icons/menu.svg"
        class="h-8 cursor-pointer justify-self-start w-1/6"
        @click="showLinks = !showLinks"
        alt="menu-icon"
        loading="lazy"
      />
      <div class="logo-image w-5/6">
        <img
          src="../../assets//images/logo.png"
          class="h-8 cursor-pointer block mx-auto justify-self-start"
          alt="logo-image"
          loading="lazy"
        />
      </div>
    </div>
    <div
      class="links absolute left-0 right-0 z-[999] bg-white space-y-4 pl-20 py-4 font-bold text-text-color"
      v-if="showLinks"
    >
      <router-link
        class="hover:text-black block text-lg"
        :to="{ path: '/User/all-servies' }"
        >{{ $t("Home") }}</router-link
      >
      <router-link
        class="hover:text-black block text-lg"
        :to="{ path: '/User/all-servies' }"
        >{{ $t("Servies") }}</router-link
      >
      <router-link
        class="hover:text-black block text-lg"
        :to="{ name: 'LogIn' }"
        >{{ $t("Join") }}</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderPhone",
  data() {
    return {
      showLinks: false,
    };
  },
};
</script>

<style></style>
