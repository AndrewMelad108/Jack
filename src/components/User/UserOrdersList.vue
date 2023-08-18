<template>
  <section class="ordersList">
    <div>
      <div
        v-for="order in orders"
        :key="order.id"
        class="orders rounded-xl bg-white pt-4 capitalize grid md:grid-cols-2 grid-cols-1 md:justify-between text-md my-10 gap-6"
      >
        <h1 class="font-bold pl-4">{{ $t(order.services) }}</h1>
        <span class="cursor-pointer pr-4 text-text-color md:text-right pl-4">{{
          order.date
        }}</span>
        <span class="flex items-center md:text-md text-sm"
          ><img
            src="../../assets/images/location-pin.png"
            alt="location-image"
            class="px-1 md:pl-4 pl-2"
          />
          {{ $t(order.location) }}</span
        >
        <span
          class="cursor-pointer md:pr-4 pl-4 text-main-color md:text-right"
          >{{ order.prices }}</span
        >
        <h1
          class="font-bold md:col-start-1 pl-4 md:col-end-3 col-start-1 col-end-2"
          v-if="order.showOrders"
        >
          {{ $t("Requirments") }}
        </h1>
        <p
          class="md:col-start-1 pl-4 md:col-end-3 col-start-1 col-end-2"
          v-if="order.showOrders"
        >
          {{ order.Requirments_Details }}
        </p>
        <h1
          class="font-bold md:col-start-1 pl-4 md:col-end-3 col-start-1 col-end-2"
          v-if="order.showOrders"
        >
          {{ $t("Offer") }}
        </h1>
        <p
          class="md:col-start-1 pl-4 md:col-end-3 col-start-1 col-end-2"
          v-if="order.showOrders"
        >
          {{ order.Offer_Details }}
        </p>
        <button
          v-if="order.showOrders"
          class="md:col-start-1 md:col-end-3 col-start-1 col-end-2 block w-44 mr-3 font-bold ml-auto border-2 rounded-lg border-main-color p-2 text-main-color"
        >
          {{ $t("Mark completed") }}
        </button>
        <div
          class="p-2 md:col-start-1 md:col-end-3 col-start-1 col-end-2 rounded-b-lg bg-[#EDEDED]"
        >
          <img
            src="../../assets/images/chevronbottom.png"
            alt="chevronbottom"
            loading="lazy"
            class="block mx-auto cursor-pointer"
            v-if="!order.showOrders"
            @click="showOrdersDetails(order.id)"
          />
          <img
            src="../../assets/images/chevronbottom.png"
            alt="chevronbottom"
            loading="lazy"
            class="block mx-auto cursor-pointer rotate-180"
            v-if="order.showOrders"
            @click="showOrdersDetails(order.id)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ordersList",
  data() {
    return {
      orders: [
        {
          id: 1,
          services: "Towing and Shipping",
          date: "Due 12:00",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          prices: "5000",
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOrders: false,
        },
        {
          id: 2,
          services: "Towing and Shipping",
          date: "Due 12:00",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          prices: "5000",
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOrders: false,
        },
        {
          id: 3,
          services: "Towing and Shipping",
          date: "Due 12:00",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          prices: "5000",
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOrders: false,
        },
        {
          id: 4,
          services: "Towing and Shipping",
          date: "Due 12:00",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          prices: "5000",
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOrders: false,
        },
      ],
    };
  },

  methods: {
    showOrdersDetails(orderId) {
      let selectOrder = this.orders.map((order) => {
        return order.id === orderId
          ? (order.showOrders = !order.showOrders)
          : "";
      });
      console.log(selectOrder);
    },
  },
};
</script>

<style></style>
