<template>
  <div class="sell_your_broken_car min-h-[100vh] my-10">
    <EditOptionModel
      v-if="showModel"
      @close="closeModel"
      @updateOptions="updateOptions"
      :editOptions="editOptions"
    />
    <HeaderServices
      :commision="commision"
      :serviceId="serviceId"
      v-if="commision !== null"
    />
    <div classs="services-des pt-4">
      <img
        src="../../../assets/images/Servies/sell_your_broken_car.png"
        alt="sell_your_broken_car"
        loading="lazy"
        class="h-20"
      />
      <h1 class="text-black py-4 font-bold text-xl capitalize">
        {{ $t("sell your broken car") }}
      </h1>
    </div>
    <div class="Towing-content grid lg:grid-cols-2 grid-cols-1 gap-6 mt-2">
      <div class="lists">
        <h1 class="text-main-color py-4 font-bold text-2xl">
          {{ $t("Search Scope") }}
        </h1>
        <InputAdd @AddOptions="addSearchScopeOption" />
        <ServicesTables
          :options="SearchScope"
          @editOption="editOption($event)"
        />
      </div>

      <div class="lists">
        <h1 class="text-main-color py-4 font-bold text-2xl">
          {{ $t("Brand") }}
        </h1>
        <InputAdd @AddOptions="addBrandOption" />
        <ServicesTables :options="Brand" @editOption="editOption($event)" />
      </div>
      <div class="lists">
        <h1 class="text-main-color py-4 font-bold text-2xl">
          {{ $t("Model") }}
        </h1>
        <InputAdd @AddOptions="addModelOption" />
        <ServicesTables :options="Model" @editOption="editOption($event)" />
      </div>
      <div class="lists">
        <h1 class="text-main-color py-4 font-bold text-2xl">
          {{ $t("Year of Manufactur") }}
        </h1>
        <InputAdd @AddOptions="addManufacturOption" />
        <ServicesTables
          :options="Manufactur"
          @editOption="editOption($event)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import HeaderServices from "@/components/Admin/HeaderServices.vue";
import ServicesTables from "@/components/Admin/ServicesTables.vue";
import InputAdd from "@/components/Admin/Form/InputAdd.vue";
import EditOptionModel from "@/components/Admin/EditOptions.vue";
import { sendRequest } from "../../../../axios";
// import {
//   showSuccessMessage,
//   showErrorMessage,
//   extractUserInfoFromToken,
// } from "../../../../common";
export default {
  name: "TowingServices",
  data() {
    return {
      ServiceDetails: [],
      SearchScope: [],
      Brand: [],
      Model: [],
      Manufactur: [],
      showModel: false,
      commision: null,
      editOptions: {},
      serviceId: null,
    };
  },
  components: {
    HeaderServices,
    ServicesTables,
    InputAdd,
    EditOptionModel,
  },
  created() {
    this.getAllServicesOptions();
  },
  methods: {
    getAllServicesOptions() {
      let successCallback = (res) => {
        if (res.data.success) {
          console.log(res.data.data.filters);
          this.serviceId = res.data.data.id;
          this.ServiceDetails = res.data.data.filters;
          this.commision = res.data.data.commision;
          this.SearchScope = res.data.data.filters[0].filterValues;
          this.Model = res.data.data.filters[1].filterValues;
          this.Manufactur = res.data.data.filters[2].filterValues;
          this.Brand = res.data.data.filters[3].filterValues;
        }
      };

      sendRequest(
        "Admin/ServiceDetails?id=6",
        "get",
        null,
        false,
        successCallback,
        null
      );
    },
    addSearchScopeOption(newoptions) {
      let successCallback = (res) => {
        if (res.data.success) {
          this.getAllServicesOptions();
        }
      };

      sendRequest(
        `Admin/FilterValue?ServiceID=6&FilterID=5&Value=${newoptions}`,
        "post",
        null,
        false,
        successCallback,
        null
      );
    },
    addBrandOption(newoptions) {
      let successCallback = (res) => {
        if (res.data.success) {
          this.getAllServicesOptions();
        }
      };

      sendRequest(
        `Admin/FilterValue?ServiceID=6&FilterID=2&Value=${newoptions}`,
        "post",
        null,
        false,
        successCallback,
        null
      );
    },
    addModelOption(newoptions) {
      let successCallback = (res) => {
        if (res.data.success) {
          this.getAllServicesOptions();
        }
      };

      sendRequest(
        `Admin/FilterValue?ServiceID=6&FilterID=3&Value=${newoptions}`,
        "post",
        null,
        false,
        successCallback,
        null
      );
    },
    addManufacturOption(newoptions) {
      let successCallback = (res) => {
        if (res.data.success) {
          this.getAllServicesOptions();
        }
      };

      sendRequest(
        `Admin/FilterValue?ServiceID=6&FilterID=4&Value=${newoptions}`,
        "post",
        null,
        false,
        successCallback,
        null
      );
    },
    editOption(option) {
      this.showModel = true;
      this.editOptions = option;
    },
    closeModel() {
      this.showModel = false;
    },
    updateOptions(option) {
      let successCallback = (res) => {
        if (res.data.success) {
          this.getAllServicesOptions();
          this.closeModel();
        }
      };

      sendRequest(
        `Admin/FilterValue`,
        "put",
        {
          ...option,
        },
        false,
        successCallback,
        null
      );
    },
  },
};
</script>
