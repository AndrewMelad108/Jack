<template>
  <section class="SellyourBrokenCar md:p-4 p-2 bg-white">
    <SwitchLang />
    <div class="h-screen flex items-center justify-center">
      <p class="text-xl">{{$t('This service will be available soon...')}}</p>
    </div>
    <!-- <div class="lg:flex block items-center gap-4 space-y-4">
      <header class="service-title">
        <WelcomeMassage name="User" />
        <img
          src="../../../assets/images/Servies/sell_your_broken_car.png"
          alt="SellyourBrokenCar"
          loading="lazy"
          class="w-auto h-28"
        />
        <h1 class="text-xl font-bold mt-2 capitalize">
          {{ $t("Sell Your Car") }}
        </h1>
      </header>
      <div
        class="advertisement-container bg-advertisement h-24 lg:w-[70%] w-[90%] mx-auto bg-center bg-cover rounded-md"
      ></div>
    </div> -->
    <!-- <div class="service-content grid lg:grid-cols-4 grid-cols-1 gap-2">
      <div class="lg:col-start-1 lg:col-end-4 col-start-1 col-end-2">
        <div class="Form-user space-y-3 bg-white h-auto rounded-lg p-4">
          <label for="SearchScope" class="capitalize block text-xl">{{
            $t("Search Scope")
          }}</label>
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Search Scope"
            v-model="Selling.Scope"
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
          <label for="Brand" class="capitalize block text-xl">
            {{ $t("Brand") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Select Brand"
            v-model="Selling.Brand"
          >
            <option disabled selected value="">
              {{ $t("Select Brand") }}
            </option>
            <option v-for="option in Brand" :key="option.id" :value="option.id">
              {{ option.value }}
            </option>
          </select>
          <p class="text-red-400">{{ errors.first("Select Brand") }}</p>
          <label for="Model" class="capitalize block text-xl">
            {{ $t("Model") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Select Model"
            v-model="Selling.Model"
          >
            <option disabled selected value="">
              {{ $t("Select Model") }}
            </option>
            <option v-for="option in Model" :key="option.id" :value="option.id">
              {{ option.value }}
            </option>
          </select>
          <p class="text-red-400">
            {{ errors.first("Select Model") }}
          </p>
          <label for="YearofManufactur" class="capitalize block text-xl">
            {{ $t("Year of Manufactur") }}</label
          >
          <select
            v-validate="{ required: true }"
            name="Select Year"
            v-model="Selling.Year"
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          >
            <option disabled selected value="">
              {{ $t("Select Year") }}
            </option>
            <option
              v-for="option in Manufactur"
              :key="option.id"
              :value="option.id"
            >
              {{ option.value }}
            </option>
          </select>
          <p class="text-red-400">
            {{ errors.first("Select Year") }}
          </p>
          <label for="color" class="capitalize block text-xl">
            {{ $t("color") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            v-model.trim="Selling.color"
            name="color"
            :placeholder="$t('Enter Color')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">
            {{ errors.first("color") }}
          </p>
          <label for="RegionalSpecification" class="capitalize block text-xl">
            {{ $t("Regional Specification") }}</label
          >
          <input
            v-validate="{ required: true }"
            v-model.trim="Selling.RegionalSpecification"
            name="RegionalSpecification"
            type="text"
            :placeholder="$t('Enter Regional Specification')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">
            {{ errors.first("RegionalSpecification") }}
          </p>
          <label for="FuelType" class="capitalize block text-xl">
            {{ $t("Fuel Type") }}</label
          >
          <select
            v-validate="{ required: true }"
            v-model.trim="Selling.FuelType"
            name="FuelType"
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          >
            <option disabled selected value="">
              {{ $t("Select Fuel Type") }}
            </option>
            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">
            {{ errors.first("FuelType") }}
          </p>
          <label for="TransmisionType" class="capitalize block text-xl">
            {{ $t("Transmision Type") }}</label
          >
          <select
            v-validate="{ required: true }"
            v-model.trim="Selling.TransmisionType"
            name="TransmisionType"
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          >
            <option disabled selected value="">
              {{ $t("Select Transmision Type") }}
            </option>
            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">
            {{ errors.first("TransmisionType") }}
          </p>
          <label for="ChasisCase" class="capitalize block text-xl">
            {{ $t("Chasis Case") }}</label
          >
          <input
            v-validate="{ required: true }"
            v-model.trim="Selling.ChasisCase"
            name="ChasisCase"
            type="text"
            :placeholder="$t('Enter Chasis Case')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">
            {{ errors.first("ChasisCase") }}
          </p>
          <label for="KiloMeters" class="capitalize block text-xl">
            {{ $t("Kilo Meters") }}</label
          >
          <input
            v-validate="{ required: true }"
            v-model.trim="Selling.distance"
            name="distance"
            type="text"
            :placeholder="$t('Enter Kilo Meters')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">
            {{ errors.first("distance") }}
          </p>
          <label for="Price" class="capitalize block text-xl">
            {{ $t("Price") }}</label
          >
          <input
            v-validate="{ required: true }"
            v-model.trim="Selling.Price"
            name="Price"
            type="text"
            :placeholder="$t('Enter Price')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">
            {{ errors.first("Price") }}
          </p>
          <p class="my-2">
            {{
              $t(
                "* Adding car image and location helps in getting the service faster"
              )
            }}
          </p>
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
    </div> -->
  </section>
</template>

<script>
// import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import SwitchLang from "../../../components/Shared/Form/SwitchLang.vue";
import { sendRequest } from "../../../../axios";
export default {
  name: "TowingAndShipping",
  data() {
    return {
      SearchScope: [],
      Brand: [],
      Model: [],
      Manufactur: [],
      Selling: {
        Scope: "",
        Price: "",
        distance: "",
        Brand: "",
        Model: "",
        Year: "",
        color: "",
        ChasisCase: "",
        TransmisionType: "",
        FuelType: "",
        RegionalSpecification: "",
      },
    };
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
        true,
        successCallback,
        null
      );
    },
    SendServices() {
      // this.$validator.validateAll().then((result) => {
      // if (result) {
      let successCallback = (res) => {
        console.log(res);
      };
      let errorCallback = (err) => {
        console.log(err);
      };
      const FormData = require("form-data");
      let data = new FormData();
      data.append("searchScope", 1);
      data.append("brand", 1);
      data.append("model", 1);
      data.append("yearOfManufactur", 1);
      data.append("fuelType", 1);
      data.append("transmisionType", 1);
      data.append("color", "zxczxc");
      data.append("chasisCase", "Zxczxc");
      data.append("regionalSpecification", "szxczxc");
      data.append("kiloMeters", "szxczxc");
      data.append("price", "szxczxc");
      data.append("location", "szxczxc");
      data.append("image", this.Selling.image);
      sendRequest(
        "CarSell/Request",
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
      this.Selling.image = file;
    },
  },
  components: {
    // WelcomeMassage,
    SwitchLang,
  },
};
</script>
