<template>
  <section class="SellerOrders md:px-12 px-4 py-4">
    <!-- start header section -->
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="Seller" />
      <InputSearch />
    </header>
    <!-- end header section -->

    <!-- start orders section -->
    <div class="Your_orders">
      <div class="capitalize flex justify-between items-center text-lg my-10">
        <h1 class="font-bold">{{ $t("Your Orders") }}</h1>
        <span
          class="cursor-pointer text-text-color"
          @click="
            $router.push({
              name: 'User.Orders',
            })
          "
          >{{ $t("See All") }}</span
        >
      </div>
      <UserOrdersList />
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";
import UserOrdersList from "@/components/User/UserOrdersList.vue";
export default {
  name: "SellerOrders",
  data() {
    return {
      showAllServices: false,
    };
  },
  components: {
    WelcomeMassage,
    InputSearch,
    UserOrdersList,
  },
};
</script>

<style></style>
