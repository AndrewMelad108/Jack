<template>
  <section class="UserOffers p-4 py-4">
    <!-- start header section -->
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="User" />
      <InputSearch />
    </header>
    <!-- end header section -->

    <!-- start orders section -->
    <div class="Your_orders">
      <div class="capitalize flex justify-between items-center text-lg my-10">
        <h1 class="font-bold">{{ $t("Sent Offers") }}</h1>
      </div>
    </div>
    <div>
      <div
        v-for="Order in Orders"
        :key="Order.id"
        class="Offers rounded-xl bg-white pt-4 capitalize justify-between text-md my-10 gap-6"
      >
        <div class="flex px-4 mb-4 items-start md:flex-row flex-col">
          <img
            src="../../assets/images/1668693618-Magnet.png"
            alt="Orders-image"
            loading="lazy"
            class="rounded-full h-16 p-2"
          />
          <!-- order in lg screen-->
          <div class="md:grid hidden grid-cols-3 gap-4 w-full justify-between">
            <h1 class="font-bold pl-4">{{ $t(Order.user) }}</h1>
            <span class="cursor-pointer text-center font-bold">Cost </span>
            <span class="cursor-pointer text-right font-bold"
              >{{ $t(Order.type) }}
            </span>
            <span class="flex items-center md:text-md text-sm"
              ><img
                src="../../assets/images/location-pin.png"
                alt="location-image"
                class="px-1 md:pl-4 pl-2 text-cover-color"
              />
              {{ $t(Order.location) }}</span
            >
            <span class="cursor-pointer text-center">{{ Order.Cost }}</span>
            <span class="cursor-pointer text-right">{{ Order.date }}</span>
            <div
              v-if="Order.showOrders"
              class="px-4 my-2 md:col-start-1 md:col-end-4 col-start-1 col-end-2"
            >
              <h1 class="text-md font-bold">Requirments</h1>
              <p class="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                provident,
              </p>
              <h1 class="text-md font-bold">Offer</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                provident,
              </p>
            </div>
          </div>
          <!-- order in md screen-->
          <div class="md:hidden flex gap-4 flex-col">
            <h1 class="font-bold">{{ $t(Order.user) }}</h1>
            <span class="flex items-center text-text-color md:text-md text-sm"
              ><img
                src="../../assets/images/location-pin.png"
                alt="location-image"
              />
              {{ $t(Order.location) }}</span
            >
            <span class="font-bold">Cost </span>
            <span>{{ Order.Cost }}</span>
            <span>{{ Order.date }}</span>
            <span class="font-bold">{{ $t(Order.type) }} </span>
            <div v-if="Order.showOrders" class="my-4">
              <h1 class="text-md font-bold">Requirments</h1>
              <p class="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                provident,
              </p>
              <h1 class="text-md font-bold">Offer</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                provident,
              </p>
            </div>
          </div>
        </div>

        <div
          class="p-2 md:col-start-1 md:col-end-3 col-start-1 col-end-2 rounded-b-lg bg-[#EDEDED]"
        >
          <img
            src="../../assets/images/chevronbottom.png"
            alt="chevronbottom"
            loading="lazy"
            class="block mx-auto cursor-pointer"
            v-if="!Order.showOrders"
            @click="showOrderDetails(Order.id)"
          />
          <img
            src="../../assets/images/chevronbottom.png"
            alt="chevronbottom"
            loading="lazy"
            class="block mx-auto cursor-pointer rotate-180"
            v-if="Order.showOrders"
            @click="showOrderDetails(Order.id)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";

export default {
  name: "SellerOffers",
  data() {
    return {
      Orders: [
        {
          id: 1,
          user: "John Doe",
          date: "Due 12:00",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          Cost: 5000,
          type: "shipping",
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOrders: false,
        },
        {
          id: 2,
          user: "John Doe",
          date: "Due 12:00",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          Cost: 5000,
          type: "shipping",
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOrders: false,
        },
        {
          id: 3,
          user: "John Doe",
          date: "Due 12:00",
          type: "shipping",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          Cost: 5000,
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOrders: false,
        },
        {
          id: 4,
          user: "John Doe",
          date: "Due 12:00",
          type: "shipping",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          Cost: 5000,
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOrders: false,
        },
      ],
    };
  },
  methods: {
    showOrderDetails(OrderID) {
      console.log(OrderID);
      let showDetails = this.Orders.map((Order) => {
        return Order.id === OrderID
          ? (Order.showOrders = !Order.showOrders)
          : "";
      });
      console.log(showDetails);
    },
  },
  components: {
    WelcomeMassage,
    InputSearch,
  },
};
</script>

<style></style>
