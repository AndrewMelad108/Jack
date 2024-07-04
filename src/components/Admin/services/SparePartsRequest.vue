de
<template>
  <div class="SpareParts min-h-[100vh] my-10">
    <HeaderServices />
    <div classs="services-des pt-4">
      <img
        src="../../../assets/images/Servies/spare_parts.png"
        alt="SpareParts"
        loading="lazy"
        class="h-20"
      />
      <h1 class="text-black py-4 font-bold text-xl capitalize">
        {{ $t("Spare Parts") }}
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
          {{ $t("Spare Parts Type") }}
        </h1>
        <InputAdd @AddOptions="AddOptions" />
        <ServicesTables :options="SparePartsType" />
      </div>
      <div class="lists">
        <h1 class="text-main-color py-4 font-bold text-2xl">
          {{ $t("Brand") }}
        </h1>
        <InputAdd @AddOptions="AddOptions" />
        <ServicesTables :options="Brand" />
      </div>
      <div class="lists">
        <h1 class="text-main-color py-4 font-bold text-2xl">
          {{ $t("Model") }}
        </h1>
        <InputAdd @AddOptions="AddOptions" />
        <ServicesTables :options="Model" />
      </div>
      <div class="lists">
        <h1 class="text-main-color py-4 font-bold text-2xl">
          {{ $t("Year of Manufactur") }}
        </h1>
        <InputAdd @AddOptions="AddOptions" />
        <ServicesTables :options="Manufactur" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderServices from "@/components/Admin/HeaderServices.vue";
import ServicesTables from "@/components/Admin/ServicesTables.vue";
import InputAdd from "@/components/Admin/Form/InputAdd.vue";
export default {
  name: "SpareParts_servies",
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
      SparePartsType: [
        {
          id: 1,
          name: "New",
        },
        {
          id: 2,
          name: "Used",
        },
      ],
      Brand: [
        {
          id: 1,
          name: "Yamaha",
        },
        {
          id: 2,
          name: "Honda",
        },
        {
          id: 3,
          name: "toyota",
        },
      ],
      Model: [
        {
          id: 1,
          name: "hilux",
        },
        {
          id: 2,
          name: "camry",
        },
        {
          id: 3,
          name: "tucson",
        },
      ],
      Manufactur: [
        {
          id: 1,
          name: "2022",
        },
        {
          id: 2,
          name: "2021",
        },
        {
          id: 3,
          name: "2020",
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
