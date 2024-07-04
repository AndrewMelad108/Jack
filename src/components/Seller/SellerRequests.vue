<template>
  <section class="md:p-4 p-2">
    <div class="capitalize flex justify-between text-md my-10">
      <h1 class="font-bold">{{ $t("Services in Riyadh, Saudi Arabia") }}</h1>
    </div>
    <SellerRequestsList />
  </section>
</template>

<script>
import SellerRequestsList from "../../components/Seller/SellerRequestsList.vue";
export default {
  name: "RequestsList",
  data() {
    return {};
  },
  components: { SellerRequestsList },
};
</script>

<style></style>
