<template>
  <div class="ShippingAndForwarding min-h-[100vh] my-10">
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
        <InputAdd @AddOptions="addSearchScopeOption" />
        <ServicesTables :options="SearchScope" />
      </div>
      <div class="lists">
        <h1 class="text-main-color py-4 font-bold text-2xl">
          {{ $t("Service Type") }}
        </h1>
        <InputAdd @AddOptions="AddServiceTypeOptions" />
        <ServicesTables :options="ServiceType" />
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
      ServiceType: [],
      commision: null,
      showModel: false,
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
          this.commision = res.data.data.commision;
          this.serviceId = res.data.data.id;
          this.ServiceDetails = res.data.data.filters;
          this.SearchScope = res.data.data.filters[0].filterValues;
          this.ServiceType = res.data.data.filters[1].filterValues;
        }
      };

      sendRequest(
        "Admin/ServiceDetails?id=5",
        "get",
        null,
        true,
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
        `Admin/FilterValue?ServiceID=5&FilterID=5&Value=${newoptions}`,
        "post",
        {
          Value: newoptions,
        },
        true,
        successCallback,
        null
      );
    },
    AddServiceTypeOptions(newoptions) {
      let successCallback = (res) => {
        if (res.data.success) {
          this.getAllServicesOptions();
        }
      };

      sendRequest(
        `Admin/FilterValue?ServiceID=5&FilterID=1&Value=${newoptions}`,
        "post",
        {
          Value: newoptions,
        },
        true,
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
        true,
        successCallback,
        null
      );
    },
  },
};
</script>
