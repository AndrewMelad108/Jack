<template>
  <section
    class="Header py-4 md:flex hidden justify-around items-center lg:px-10"
  >
    <div class="logo-image w-3/6">
      <img
        src="../../../assets//images/logo.png"
        alt="logo-image"
        loading="lazy"
        class="h-10"
      />
    </div>
    <div
      class="header-links flex items-center justify-around text-xl font-bold text-[#858585] w-3/6"
    >
      <button @click="goUserPages('User.Home')" class="hover:text-black">
        {{ $t("Home") }}
      </button>
      <button
        @click="goUserPages('User.Towing')"
        class="hover:text-black"
        :to="{ name: 'User.Towing' }"
      >
        {{ $t("Servies") }}
      </button>
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
  data() {
    return {};
  },
  components: {
    SwitchLang,
  },
  methods: {
    goUserPages(value) {
      if (localStorage.getItem("role") === "User") {
        this.$router.push({
          name: value,
        });
      }
    },
  },
};
</script>

<style></style>
