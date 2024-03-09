<template>
  <section class="ShippingAndForwarding md:p-4 p-2 bg-white">
    <SwitchLang />
    <div class="lg:flex block items-center gap-4 space-y-4">
      <header class="service-title">
        <WelcomeMassage name="User" />
        <img
          src="../../../assets/images/Servies/shipping_and_forwarding.png"
          alt="shipping_and_forwarding"
          loading="lazy"
          class="w-auto h-28"
        />
        <h1 class="md:text-xl text-md font-bold my-2 capitalize">
          {{ $t("Deportation and Baggage transfer") }}
        </h1>
      </header>
      <div
        class="advertisement-container bg-advertisement h-24 lg:w-[70%] w-[90%] mx-auto bg-center bg-cover rounded-md"
      ></div>
    </div>
    <div class="service-content grid lg:grid-cols-4 grid-cols-1 gap-2">
      <div class="lg:col-start-1 lg:col-end-4 col-start-1 col-end-2">
        <div class="Form-user bg-white h-auto rounded-lg space-y-3">
          <label for="SearchScope" class="capitalize block text-xl">{{
            $t("Search Scope")
          }}</label>
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Search Scope"
            v-model="Shipping.Scope"
          >
            <option disabled selected value="">
              {{ $t("Search Scope") }}
            </option>

            <option
              v-for="option in SearchScope"
              :key="option.id"
              :value="option.id"
            >
              {{ option.value }}
            </option>
          </select>
          <p class="text-red-400">{{ errors.first("Search Scope") }}</p>
          <label for="ServiceType" class="capitalize block text-xl">{{
            $t("Service Type")
          }}</label>
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="ServiceType"
            v-model="Shipping.ServiceType"
          >
            <option disabled selected value="">
              {{ $t("Service Type") }}
            </option>
            <option
              v-for="option in ServiceType"
              :key="option.id"
              :value="option.id"
            >
              {{ option.value }}
            </option>
          </select>
          <p class="text-red-400">{{ errors.first("ServiceType") }}</p>

          <label for="ShippingType" class="capitalize block text-xl">
            {{ $t("Shipping Type") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="ShippingType"
            v-model="Shipping.ShippingType"
          >
            <option disabled selected value="">
              {{ $t("Select Shipping Type") }}
            </option>
            <option
              v-for="option in shipping"
              :key="option.id"
              :value="option.id"
            >
              {{ option.value }}
            </option>
          </select>
          <p class="text-red-400">{{ errors.first("ShippingType") }}</p>
          <label for="Size" class="capitalize block text-xl">
            {{ $t("Size") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            v-model.trim="Shipping.Size"
            name="Size"
            :placeholder="$t('Enter Size')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">{{ errors.first("Size") }}</p>

          <label for="Weight" class="capitalize block text-xl">
            {{ $t("Weight") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            v-model.trim="Shipping.Weight"
            name="Weight"
            :placeholder="$t('Enter Weight')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">{{ errors.first("Weight") }}</p>
          <label for="LocationFrom" class="capitalize block text-xl">
            {{ $t("Location From") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            v-model.trim="Shipping.LocationFrom"
            name="LocationFrom"
            :placeholder="$t('Enter Location From')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">{{ errors.first("LocationFrom") }}</p>
          <label for="LocationTo" class="capitalize block text-xl">
            {{ $t("Location To") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            v-model.trim="Shipping.LocationTo"
            name="LocationTo"
            :placeholder="$t('Enter Location To')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">{{ errors.first("LocationTo") }}</p>
        </div>
        <div
          class="maps grid xl:grid-cols-2 w-[90%] mx-auto gap-8 lg:flex-row flex-col my-4 items-center"
        >
          <MapGoogle></MapGoogle>
          <MapGoogle></MapGoogle>
        </div>
      </div>
      <div class="images lg:col-start-4 lg:col-end-5 col-start-1 col-end-2">
        <div class="mt-8">
          <h1 class="text-[16px] font-bold mb-[13px]">
            {{ $t("Add images") }}
          </h1>
        </div>
        <div
          class="flex items-center justify-center bg-gray-100 rounded-[10px] focus:ring-[#24C6C9] focus:border-[#24C6C9] w-full h-[200px]"
        >
          <label
            for="upload_photo"
            class="cursor-pointer h-full w-full flex justify-center items-center font-bold"
            >{{ $t("Add images") }}</label
          >
          <input
            class="hidden"
            type="file"
            v-validate="{ required: true }"
            name="Addimages"
            id="upload_photo"
            @change="onFileChangedImage($event)"
            accept="image/*"
          />
        </div>
        <p class="text-red-400">
          {{ errors.first("Addimages") }}
        </p>
      </div>
      <button
        @click="SendServices"
        class="w-full bg-main-color md:col-start-1 md:col-end-4 p-2 mt-3 text-white rounded-lg"
      >
        {{ $t("Post Request") }}
      </button>
    </div>
  </section>
</template>

<script>
import SwitchLang from "../../../components/Shared/Form/SwitchLang.vue";
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import MapGoogle from "../../Shared/Map.vue";
import { sendRequest } from "../../../../axios";
export default {
  name: "ShippingAndForwarding",
  data() {
    return {
      SearchScope: [],
      ServiceType: [],
      shipping: [],
      Shipping: {
        Scope: "",
        ServiceType: "",
        ShippingType: "",
        Weight: "",
        Size: "",
        LocationFrom: "",
        LocationTo: "",
      },
    };
  },
  components: {
    WelcomeMassage,
    SwitchLang,
    MapGoogle,
  },
  created() {
    this.getAllServicesOptions();
  },
  methods: {
    getAllServicesOptions() {
      let successCallback = (res) => {
        if (res.data.success) {
          this.SearchScope = res.data.data.filters[0].filterValues;
          this.ServiceType = res.data.data.filters[1].filterValues;
          this.shipping = res.data.data.filters[2].filterValues;
        }
      };

      sendRequest(
        "Admin/ServiceDetails?id=4",
        "get",
        null,
        true,
        successCallback,
        null
      );
    },
    SendServices() {
      // this.$validator.validateAll().then((result) => {
      // if (result) {
      let successCallback = (res) => {
        if (res.data.success) {
          console.log(res);
          this.$router.push({
            name: "Customer.Requests",
          });
        }
      };
      let errorCallback = (err) => {
        console.log(err);
      };
      const FormData = require("form-data");
      let data = new FormData();
      data.append("searchScope", 1);
      data.append("serviceType", 1);
      data.append("shippingType", 1);
      data.append("size", "zxczxc");
      data.append("weight", "Zxczxc");
      data.append("locationFrom", "szxczxc");
      data.append("locationTo", "szxczxc");
      data.append("image", this.SpareParts.image);
      sendRequest(
        "Shipping/Request",
        "post",
        data,
        true,
        successCallback,
        errorCallback
      );
      // }
      // });
    },
    onFileChangedImage(e) {
      const file = e.target.files[0];
      this.Shipping.image = file;
    },
  },
};
</script>
