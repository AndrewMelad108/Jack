de
<template>
  <div class="ShippingAndForwarding min-h-[100vh] my-10">
    <HeaderServices />
    <div classs="services-des pt-4">
      <img
        src="../../../assets/images/Servies/delivery_services.png"
        alt="ShippingAndForwarding"
        loading="lazy"
        class="h-20"
      />
      <h1 class="text-black py-4 font-bold text-xl capitalize">
        {{ $t("Free services and delivering household needs") }}
      </h1>
    </div>
    <div class="Towing-content grid lg:grid-cols-2 grid-cols-1 gap-6 mt-2">
      <div class="lists">
        <h1 class="text-main-color py-4 font-bold text-2xl">
          {{ $t("Search Scope") }}
        </h1>
        <InputAdd @AddOptions="AddOptions" />
        <ServicesTables :options="SearchScope" />
      </div>
      <div class="lists">
        <h1 class="text-main-color py-4 font-bold text-2xl">
          {{ $t("Service Type") }}
        </h1>
        <InputAdd @AddOptions="AddOptions" />
        <ServicesTables :options="ServiceType" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderServices from "@/components/Admin/HeaderServices.vue";
import ServicesTables from "@/components/Admin/ServicesTables.vue";
import InputAdd from "@/components/Admin/Form/InputAdd.vue";
export default {
  name: "ShippingAndForwarding_servies",
  data() {
    return {
      SearchScope: [
        {
          id: 1,
          name: "All",
        },
        {
          id: 2,
          name: "My Area",
        },
        {
          id: 3,
          name: "Others",
        },
      ],
      ServiceType: [
        {
          id: 1,
          name: "In-store pickup",
        },
        {
          id: 2,
          name: "Home delivery",
        },
        {
          id: 3,
          name: "Third-party delivery",
        },
      ],
    };
  },
  components: {
    HeaderServices,
    ServicesTables,
    InputAdd,
  },

  methods: {
    AddOptions(newoptions) {
      // alert(newoptions);
      this.ServiceType.push({
        name: newoptions,
        id: 5,
      });
    },
  },
};
</script>

<style>
/* Add any custom styles for the table here */
</style>
