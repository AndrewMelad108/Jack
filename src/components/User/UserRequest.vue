<template>
  <section class="UserRequest pt-10 px-12 py-4">
    <!-- start header section -->
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="User" />
      <InputSearch />
    </header>
    <!-- end header section -->

    <!-- start UserRequest section -->
    <div class="Your_orders">
      <div class="capitalize flex justify-between items-center text-lg my-10">
        <h1 class="font-bold">{{ $t("Your Requests") }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";
export default {
  name: "UserRequest",
  data() {
    return {
      showAllServices: false,
    };
  },
  components: {
    WelcomeMassage,
    InputSearch,
  },
};
</script>

<style></style>
