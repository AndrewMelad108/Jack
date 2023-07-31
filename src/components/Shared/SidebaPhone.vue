<template>
  <section
    v-if="closeSidebar"
    class="SidebaPhone w-[220px] bg-[#24c6c9] absolute left-0 top-0 z-40 rounded-s-xl rounded-e-xl h-[100vh] min-h-full"
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
    <div class="p-8 mt-10 space-y-8">
      <router-link
        class="text-white block text-xl"
        v-for="link in links"
        :key="link.index"
        :to="{ name: `${link}` }"
        >{{ $t(link) }}
      </router-link>
    </div>
  </section>

  <!--  v-if="!toggleSidebar" -->
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
  },
  data() {
    return {};
  },
  methods: {
    changeCloseSidebarValue() {
      this.$emit("changeCloseSidebarValue");
    },
  },
};
</script>

<style></style>
