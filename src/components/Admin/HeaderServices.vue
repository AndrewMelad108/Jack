<template>
  <section class="header-services items-center grid md:grid-cols-3 grid-cols-1">
    <WelcomeMassage
      name="admin"
      class="md:col-start-1 md:col-end-3 col-start-1 col-end-2"
    />
    <ServiceRatio class="md:col-start-3 md:col-end-4 col-start-1 col-end-2" />
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import ServiceRatio from "@/components/Admin/ServiceRatio.vue";
export default {
  components: {
    WelcomeMassage,
    ServiceRatio,
  },
};
</script>

<style></style>
