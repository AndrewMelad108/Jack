<template>
  <section class="CarMaintenanceAndCare md:p-4 p-2 bg-white">
    <SwitchLang class="m-4" />
    <div class="lg:flex block items-center gap-4 space-y-4">
      <header class="service-title">
        <WelcomeMassage name="User" />
        <img
          src="../../../assets/images/Servies/car_maintenance_and_care.png"
          alt="car_maintenance_and_care"
          loading="lazy"
          class="w-auto h-28"
        />
        <h1 class="text-xl font-bold mt-2 capitalize">
          {{ $t("car maintenance and care") }}
        </h1>
      </header>
      <div
        class="advertisement-container bg-advertisement h-24 lg:w-[70%] w-[90%] mx-auto bg-center bg-cover rounded-md"
      ></div>
    </div>
    <div class="service-content grid lg:grid-cols-4 grid-cols-1 gap-2">
      <div class="lg:col-start-1 lg:col-end-4 col-start-1 col-end-2">
        <div class="Form-services space-y-3 bg-white h-auto rounded-lg p-4">
          <label for="SearchScope" class="capitalize block text-xl">{{
            $t("Service Type")
          }}</label>
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="ServiceType"
            v-model="Repairing.ServiceType"
          >
            <option disabled selected value="">
              {{ $t("Service Type") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("ServiceType") }}</p>

          <label for="Brand" class="capitalize block text-xl">
            {{ $t("Brand") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="SelectBrand"
            v-model="Repairing.Brand"
          >
            <option disabled selected value="">
              {{ $t("Select Brand") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("SelectBrand") }}</p>
          <label for="Model" class="capitalize block text-xl">
            {{ $t("Model") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="SelectModel"
            v-model="Repairing.Model"
          >
            <option disabled selected value="">
              {{ $t("Select Model") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("SelectModel") }}</p>
          <label for="YearofManufactur" class="capitalize block text-xl">
            {{ $t("Year of Manufactur") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="SelectYear"
            v-model="Repairing.Year"
          >
            <option disabled selected value="">
              {{ $t("Select Year") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("SelectYear") }}</p>

          <label for="color" class="capitalize block text-xl">
            {{ $t("color") }}</label
          >
          <input
            type="text"
            :placeholder="$t('Enter Color')"
            v-validate="{ required: true }"
            name="color"
            v-model.trim="Repairing.color"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">{{ errors.first("color") }}</p>
          <label for="PlateNumber" class="capitalize block text-xl">
            {{ $t("Plate Number") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            name="PlateNumber"
            v-model.trim="Repairing.PlateNumber"
            :placeholder="$t('Enter Plate Number')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">{{ errors.first("PlateNumber") }}</p>
          <label for="LocationTo" class="capitalize block text-xl">
            {{ $t("Location") }}
          </label>
          <input
            type="text"
            v-validate="{ required: true }"
            name="LocationTo"
            v-model.trim="Repairing.LocationTo"
            :placeholder="$t('Enter Location')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">{{ errors.first("LocationTo") }}</p>

          <p class="my-2">
            {{
              $t(
                "* Adding car image and location helps in getting the service faster"
              )
            }}
          </p>
          <div class="Maps w-full">
            <MapGoogle class="w-full" />
          </div>
        </div>
      </div>
      <div class="images lg:col-start-4 lg:col-end-5 col-start-1 col-end-2">
        <h1 class="text-[16px] font-bold mb-[13px]">{{ $t("Add images") }}</h1>

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
            id="upload_photo"
            @change="onFileChanged($event)"
            accept="image/*"
            v-validate="{ required: true }"
            name="Addimages"
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
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import SwitchLang from "../../../components/Shared/Form/SwitchLang.vue";
import MapGoogle from "../../Shared/Map.vue";
export default {
  name: "CarMaintenanceAndCare",
  data() {
    return {
      yourActualApiKeyHere: "AIzaSyD1qZn-hta_tR9_z2To2Qcrg1CgaXeyP0g",
      Repairing: {
        ServiceType: "",
        Brand: "",
        Model: "",
        Year: "",
        color: "",
        PlateNumber: "",
        LocationTo: "",
      },
    };
  },
  components: {
    WelcomeMassage,
    SwitchLang,
    MapGoogle,
  },
  methods: {
    SendServices() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          console.log("run");
        } else {
          console.log("error");
        }
      });
    },
  },
};
</script>

<style></style>
