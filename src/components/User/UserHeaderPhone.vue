<template>
  <section class="HeaderPhone md:hidden block">
    <div
      class="bg-main-color relative py-2 px-10 w-[100%] h-12 md:hidden flex justify-between items-center"
    >
      <img
        src="../../assets//images/icons/menu.svg"
        class="h-5 cursor-pointer justify-self-start w-5"
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
      class="links absolute left-0 right-0 bg-white space-y-4 pl-10 py-4 font-bold text-text-color shadow-md shadow-text-color z-50"
      v-if="showLinks"
    >
      <button
        @click="goUserPages('User.Home')"
        class="hover:text-black block text-lg"
      >
        {{ $t("Home") }}
      </button>
      <button @click="goUserServices()" class="hover:text-black block text-lg">
        {{ $t("Servies") }}
      </button>
      <button class="hover:text-black block text-lg" :to="{ name: 'LogIn' }">
        {{ $t("Join") }}
      </button>
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
  methods: {
    goUserPages() {
      if (
        localStorage.getItem("role") === "User" &&
        this.$route.name !== "User.Home"
      ) {
        this.$router.push({
          name: "User.Home",
        });
      }
    },
    goUserServices() {
      if (localStorage.getItem("role") === "User") {
        this.$router.push({
          name: "User.Towing",
        });
      }
    },
  },
};
</script>

<style></style>
