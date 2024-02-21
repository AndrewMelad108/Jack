<template>
  <section class="Seller-AllServices p-4">
    <!-- start header section -->
    <header class="grid md:grid-cols-2 grid-cols-1 justify-between">
      <WelcomeMassage name="Seller" />
      <InputSearch class="self-center" />
    </header>
    <!-- end header section -->
    <!-- start services section -->
    <div class="capitalize mb-6 md:text-lg text-sm mt-10">
      <h1 class="font-bold">{{ $t("Overview") }}</h1>
    </div>
    <div class="mt-4 lg:flex hidden w-full max-h-[300px] md:gap-4">
      <div
        class="h-52 w-3/12 px-2 content-center bg-white rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <h1 class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("Balance (SAR)") }}
        </h1>
        <p class="mt-16 text-main-color font-bold text-4xl">1234</p>
      </div>
      <div
        class="h-52 w-3/12 px-2 content-center bg-white rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <h1 class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("Pending Orders") }}
        </h1>
        <p class="mt-16 text-main-color font-bold text-4xl">03</p>
      </div>
      <div
        class="h-52 w-3/12 px-2 content-center bg-white rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <h1 class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("New Requests") }}
        </h1>
        <p class="mt-16 text-main-color font-bold text-4xl">12</p>
      </div>
      <div
        class="h-52 w-3/12 px-2 content-center bg-white rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <h1 class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("Unread Messages") }}
        </h1>
        <p class="mt-16 text-main-color font-bold text-4xl">123</p>
      </div>
    </div>

    <!-- end services section -->
    <!-- start orders section -->
    <div class="Your_orders">
      <div class="capitalize flex justify-between text-lg my-10">
        <h1 class="font-bold">{{ $t("Services in Riyadh, Saudi Arabia") }}</h1>
        <span
          class="cursor-pointer text-text-color"
          @click="
            $router.push({
              name: 'Customer.Orders',
            })
          "
          >{{ $t("See All") }}</span
        >
      </div>
      <SellerRequestsList />
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";
import SellerRequestsList from "@/components/Seller/SellerRequestsList.vue";
export default {
  name: "SellerAllServices",
  data() {
    return {
      showAllServices: false,
    };
  },
  components: {
    WelcomeMassage,
    InputSearch,
    SellerRequestsList,
  },
};
</script>

<style></style>
