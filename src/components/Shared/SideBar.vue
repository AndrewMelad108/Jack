<template>
  <section
    class="w-[220px] bg-main-color md:block hidden rounded-s-xl rounded-e-xl h-[100vh] min-h-full"
  >
    <div class="logo">
      <img
        src="../../assets/images/logo.png"
        class="mt-10 block mx-auto"
        alt="logo-image"
      />
    </div>
    <div class="p-8 mt-10 space-y-8">
      <router-link
        class="text-white block text-xl"
        v-for="link in links"
        :key="link.index"
        :to="
          link === 'Home'
            ? { name: 'HomePage' }
            : link === 'Control Panel'
            ? { path: '/User/Home' }
            : { name: `${link}` }
        "
        :class="{
          'bg-white text-[#24c6c9] py-1 pl-2 rounded-lg': $route.name === link,
        }"
        >{{ $t(link) }}
      </router-link>
    </div>
  </section>

  <!--  v-if="!toggleSidebar" -->
</template>

<script>
export default {
  name: "SideBar",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
