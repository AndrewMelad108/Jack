<template>
  <section class="Header py-8 md:flex hidden justify-around items-center px-40">
    <div class="logo-image w-3/6">
      <img
        src="../../../assets//images/logo.png"
        alt="logo-image"
        loading="lazy"
        class="h-10"
      />
    </div>
    <div
      class="header-links flex justify-around text-xl font-bold text-[#858585] w-3/6"
    >
      <router-link
        class="hover:text-black"
        :to="{ path: '/User/all-servies' }"
        >{{ $t("Home") }}</router-link
      >
      <router-link
        class="hover:text-black"
        :to="{ path: '/User/all-servies' }"
        >{{ $t("Servies") }}</router-link
      >
      <router-link class="hover:text-black" :to="{ name: 'LogIn' }">{{
        $t("Join")
      }}</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
