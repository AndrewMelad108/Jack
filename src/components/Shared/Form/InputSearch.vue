<template>
  <section class="InputSearch">
    <div class="relative">
      <input
        type="text"
        :placeholder="$t('search services')"
        class="p-2 rounded-lg w-[100%] focus:outline-0 placeholder:pl-2 placeholder:capitalize md:placeholder:text-lg placeholder:text-sm relative"
      />
      <img
        src="../../../assets/images/Search.png"
        alt="Search-icon"
        loading="lazy"
        class="absolute bottom-3 right-3"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "InputSearch",
  data() {
    return {};
  },
};
</script>

<style></style>
