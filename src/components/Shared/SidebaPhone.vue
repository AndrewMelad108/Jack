<template>
  <section
    v-if="closeSidebar"
    class="SidebaPhone w-[270px] bg-[#24c6c9] absolute left-0 top-0 bottom-0 z-40 rounded-s-xl rounded-e-xl min-h-[100vh]"
  >
    <img
      src="../../assets/images/icons/close-icon.svg"
      class="py-2 px-4 h-10 cursor-pointer mr-auto"
      alt="close-icon"
      loading="lazy"
      @click="changeCloseSidebarValue()"
    />
    <div class="logo">
      <img
        src="../../assets/images/logo.png"
        class="mt-10 block mx-auto"
        alt="logo-image"
        loading="lazy"
      />
    </div>
    <div class="p-8 mt-10 text-white space-y-8">
      <router-link
        :class="{
          'py-1 pl-2 rounded-lg bg-white text-main-color':
            $route.name === type + '.' + link,
        }"
        class="block text-xl"
        v-for="link in links"
        :key="link.index"
        :to="{ name: type + '.' + link }"
        >{{ $t(link) }}
      </router-link>
      <button class="text-xl capitalize" @click="Logout()">
        {{ $t("Logout") }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "SidebaPhone",
  props: {
    links: {
      type: Array,
      required: true,
    },
    closeSidebar: {
      type: Boolean,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    changeCloseSidebarValue() {
      this.$emit("changeCloseSidebarValue");
    },
    Logout() {
      this.$router.push({
        name: "MainPage",
      });
    },
  },
};
</script>

<style></style>
