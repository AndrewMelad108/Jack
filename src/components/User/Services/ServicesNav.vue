<template>
  <section
    class="ServicesNav flex justify-end lg:gap-8 gap-2 mt-2 text-md text-text-color font-bold lg:px-4"
  >
    <router-link
      :to="{ name: `User.${service}` }"
      v-for="service in services"
      :key="service.index"
      >{{ $t(service) }}</router-link
    >
  </section>
</template>

<script>
export default {
  name: "ServicesNav",
  data() {
    return {
      services: [
        "Towing",
        "Repairing",
        "Spare Parts",
        "Baggage Transfer",
        "Delivery",
        "Selling Cars",
      ],
    };
  },
};
</script>

<style></style>
