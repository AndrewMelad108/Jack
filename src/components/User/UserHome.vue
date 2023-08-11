<template>
  <section class="AllServices px-12 py-4">
    <!-- start header section -->
    <header class="grid md:grid-cols-2 grid-cols-1 justify-between">
      <WelcomeMassage name="User" />
      <InputSearch class="self-center" />
    </header>
    <!-- end header section -->
    <!-- start services section -->
    <div class="capitalize flex justify-between mb-6 md:text-lg text-sm mt-10">
      <h1 class="font-bold">{{ $t("Services in Riyadh, Saudi Arabia") }}</h1>
      <span
        class="cursor-pointer text-text-color"
        @click="showAllServices = !showAllServices"
        >{{ $t("See All") }}</span
      >
    </div>
    <div
      v-if="!showAllServices"
      class="mt-4 lg:flex hidden w-full h-[300px] md:gap-4"
    >
      <div
        class="h-62 w-3/12 px-2 bg-white rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <img
          src="../../assets/images/Servies/towing_and_shipping.png"
          alt="towing_and_shipping"
          loading="lazy"
          class="block h-22 mx-auto mb-4"
        />
        <p class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("towing and shipping") }}
        </p>
      </div>
      <div
        class="h-62 w-3/12 px-2 bg-white rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <img
          src="../../assets/images/Servies/spare_parts.png"
          alt="spare_parts"
          loading="lazy"
          class="block h-22 mx-auto mb-4"
        />
        <p class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("Spare Parts") }}
        </p>
      </div>
      <div
        class="h-62 w-3/12 px-2 bg-white rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <img
          src="../../assets/images/Servies/shipping_and_forwarding.png"
          alt="shipping_and_forwarding"
          loading="lazy"
          class="block h-22 mx-auto mb-4"
        />
        <p class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("shipping and forwarding") }}
        </p>
      </div>
      <div
        class="h-62 w-3/12 px-2 bg-white rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <img
          src="../../assets/images/Servies/sell_your_broken_car.png"
          alt="sell_your_broken_car"
          loading="lazy"
          class="block h-22 mx-auto mb-4"
        />
        <p class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("sell your broken car") }}
        </p>
      </div>
    </div>
    <div
      v-else
      class="show_all_services grid md:grid-cols-3 grid-cols-2 gap-10"
    >
      <div
        class="h-62 max-w-[220px] bg-white rounded-xl capitalize text-center font-bold px-2 py-6"
      >
        <img
          src="../../assets/images/Servies/towing_and_shipping.png"
          alt="towing_and_shipping"
          loading="lazy"
          class="block h-20 mx-auto mb-4"
        />
        <p class="w-22 break-words md:text-md sm:text-sm">
          {{ $t("towing and shipping") }}
        </p>
      </div>
      <div
        class="h-62 max-w-[220px] bg-white rounded-xl capitalize text-center font-bold px-2 py-6"
      >
        <img
          src="../../assets/images/Servies/spare_parts.png"
          alt="spare_parts"
          loading="lazy"
          class="block h-20 mx-auto mb-4"
        />
        <p class="w-22 break-words md:text-md sm:text-sm">
          {{ $t("spare parts") }}
        </p>
      </div>
      <div
        class="h-62 max-w-[220px] bg-white rounded-xl capitalize text-center font-bold px-2 py-6"
      >
        <img
          src="../../assets/images/Servies/shipping_and_forwarding.png"
          alt="shipping_and_forwarding"
          loading="lazy"
          class="block h-20 mx-auto mb-4"
        />
        <p class="w-22 break-words md:text-md sm:text-sm">
          {{ $t("shipping and forwarding") }}
        </p>
      </div>
      <div
        class="h-62 max-w-[220px] bg-white rounded-xl capitalize text-center font-bold px-2 py-6"
      >
        <img
          src="../../assets/images/Servies/sell_your_broken_car.png"
          alt="sell_your_broken_car"
          loading="lazy"
          class="block h-20 mx-auto mb-4"
        />
        <p class="w-22 break-words md:text-md sm:text-sm">
          {{ $t("sell your broken car") }}
        </p>
      </div>
      <div
        class="h-62 max-w-[220px] bg-white rounded-xl capitalize text-center font-bold px-2 py-6"
      >
        <img
          src="../../assets/images/Servies/delivery_services.png"
          alt="delivery_services"
          loading="lazy"
          class="block h-20 mx-auto mb-4"
        />
        <p class="w-22 break-words md:text-md sm:text-sm">
          {{ $t("delivery services") }}
        </p>
      </div>
      <div
        class="h-62 max-w-[220px] bg-white rounded-xl capitalize text-center font-bold px-2 py-6"
      >
        <img
          src="../../assets/images/Servies/car_maintenance_and_care.png"
          alt="car_maintenance_and_care"
          loading="lazy"
          class="block h-20 mx-auto mb-4"
        />
        <p class="w-22 break-words md:text-md sm:text-sm">
          {{ $t("car maintenance and care") }}
        </p>
      </div>
    </div>
    <!-- end services section -->
    <!-- start orders section -->
    <div class="Your_orders">
      <div class="capitalize flex justify-between text-lg my-10">
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
  name: "UserAllServices",
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
