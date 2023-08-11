<template>
  <section class="services">
    <h1 class="text-center md:text-5xl text-2xl font-bold mt-10 mb-4">
      {{ $t("Featured Servies") }}
    </h1>
    <span class="line block w-24 bg-main-color h-2 rounded-full mx-auto"></span>
    <div
      class="services-content w-[100%] capitalize justify-center md:px-20 px-10 mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-center gap-6"
    >
      <div
        @click="
          $router.push({
            name: 'User.Towing',
          })
        "
        class="bg-green-100 cursor-pointer py-10 space-y-12 rounded-2xl text-main-color text-2xl font-bold min-h-[350px]"
      >
        <img
          src="../../../assets/images/Servies/towing_and_shipping.png"
          alt="towing_and_shipping"
          loading="lazy"
          class="block mx-auto"
        />
        <p class="text-2xl break-words w-40 mx-auto">
          {{ $t("towing and shipping") }}
        </p>
      </div>
      <div
        @click="
          $router.push({
            name: 'User.Repairing',
          })
        "
        class="bg-green-100 cursor-pointer py-10 space-y-12 rounded-2xl text-main-color text-2xl font-bold min-h-[350px]"
      >
        <img
          src="../../../assets/images/Servies/car_maintenance_and_care.png"
          alt="car_maintenance_and_care"
          loading="lazy"
          class="block mx-auto"
        />
        <p class="text-2xl break-words w-40 mx-auto">
          {{ $t("car maintenance and care") }}
        </p>
      </div>
      <div
        @click="
          $router.push({
            name: 'User.Spare Parts',
          })
        "
        class="bg-green-100 py-10 cursor-pointer space-y-12 rounded-2xl text-main-color text-2xl font-bold min-h-[350px]"
      >
        <img
          src="../../../assets/images/Servies/spare_parts.png"
          alt="spare_parts.png"
          loading="lazy"
          class="block mx-auto"
        />
        <p class="text-2xl break-words w-40 mx-auto">
          {{ $t("spare parts request") }}
        </p>
      </div>
      <div
        @click="
          $router.push({
            name: 'User.Baggage Transfer',
          })
        "
        class="bg-green-100 py-10 cursor-pointer space-y-12 rounded-2xl text-main-color text-2xl font-bold min-h-[350px]"
      >
        <img
          src="../../../assets/images/Servies/shipping_and_forwarding.png"
          alt="shipping_and_forwarding.png"
          loading="lazy"
          class="block mx-auto"
        />
        <p class="text-2xl break-words w-40 mx-auto">
          {{ $t("shipping and forwarding") }}
        </p>
      </div>
      <div
        @click="
          $router.push({
            name: 'User.Delivery',
          })
        "
        class="bg-green-100 py-10 cursor-pointer space-y-12 rounded-2xl text-main-color text-2xl font-bold min-h-[350px]"
      >
        <img
          src="../../../assets/images/Servies/delivery_services.png"
          alt="delivery_services.png"
          loading="lazy"
          class="block mx-auto"
        />
        <p class="text-2xl break-words w-40 mx-auto">
          {{ $t("delivery services") }}
        </p>
      </div>
      <div
        @click="
          $router.push({
            name: 'User.Selling Cars',
          })
        "
        class="bg-green-100 py-10 cursor-pointer space-y-12 rounded-2xl text-main-color text-2xl font-bold min-h-[350px]"
      >
        <img
          src="../../../assets/images/Servies/sell_your_broken_car.png"
          alt="sell_your_broken_car.png"
          loading="lazy"
          class="block mx-auto"
        />
        <p class="text-2xl break-words w-40 mx-auto">
          {{ $t("sell your broken car") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "servicesFeature",
};
</script>

<style></style>
