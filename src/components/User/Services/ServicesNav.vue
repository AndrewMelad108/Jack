<template>
  <section
    class="ServicesNav flex justify-end lg:gap-8 gap-2 mt-2 text-md text-text-color font-bold lg:px-4"
  >
    <router-link
      v-for="service in services"
      :key="service.index"
      :to="{ name: service.routerData }"
      ><img
        :src="service.image"
        :alt="service.alt"
        loading="lazy"
        class="h-14"
        :title="service.alt"
    /></router-link>
  </section>
</template>

<script>
export default {
  name: "ServicesNav",
  data() {
    return {
      services: [
        {
          image: require("../../../assets/images/Servies/towing_and_shipping.png"),
          routerData: "Customer.Towing",
          alt: "towing_and_shipping",
        },
        {
          image: require("../../../assets/images/Servies/car_maintenance_and_care.png"),
          alt: "car_maintenance_and_care",
          routerData: "Customer.Repairing",
        },
        {
          image: require("../../../assets/images/Servies/shipping_and_forwarding.png"),
          alt: "shipping_and_forwarding",
          routerData: "Customer.Baggage Transfer",
        },
        {
          image: require("../../../assets/images/Servies/spare_parts.png"),
          alt: "spare_parts",
          routerData: "Customer.Spare Parts",
        },
        {
          image: require("../../../assets/images/Servies/delivery_services.png"),
          routerData: "Customer.Delivery",
          alt: "delivery_services",
        },
        {
          image: require("../../../assets/images/Servies/sell_your_broken_car.png"),
          alt: "sell_your_broken_car",
          routerData: "Customer.Selling Cars",
        },
      ],
    };
  },
};
</script>
