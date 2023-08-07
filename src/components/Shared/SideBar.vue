<template>
  <section
    class="min-w-[220px] bg-main-color md:block hidden rounded-s-xl rounded-e-xl min-h-[100vh]"
  >
    <div class="logo">
      <img
        src="../../assets/images/logo.png"
        class="mt-10 block mx-auto"
        alt="logo-image"
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
    type: {
      type: String,
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
