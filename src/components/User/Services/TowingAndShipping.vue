<template>
  <section class="TowingAndShipping md:p-6 p-1 bg-white">
    <SwitchLang class="m-2" />
    <header class="service-title">
      <WelcomeMassage name="User" />
      <img
        src="../../../assets/images/Servies/towing_and_shipping.png"
        alt="towing_and_shipping"
        loading="lazy"
        class="w-auto h-28"
      />
      <div class="flex lg:flex-row flex-col w-full lg:gap-6 items-center">
        <h1 class="text-xl lg:w-auto w-full font-bold mt-2 capitalize">
          {{ $t("towing and shipping") }}
        </h1>
        <div class="lg:w-[50%] mr-auto pl-4 w-[97%] space-y-2">
          <label for="SearchScope" class="capitalize block text-xl">
            {{ $t("Search Scope") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Search Scope"
            v-model="Towing.Scope"
          >
            <option disabled selected value="">
              {{ $t("Search Scope") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("Search Scope") }}</p>
        </div>
      </div>
    </header>
    <div class="service-content grid lg:grid-cols-4 grid-cols-1 gap-2">
      <div class="lg:col-start-1 lg:col-end-4 col-start-1 col-end-2">
        <div class="Form-user bg-white h-auto rounded-lg p-4">
          <label for="SelectCity" class="mt-6 text-xl block">{{
            $t("Select City")
          }}</label>
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Search City"
            v-model="Towing.City"
          >
            <option disabled selected value="">
              {{ $t("Select City") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("Search City") }}</p>
          <label for="Brand" class="mt-6 text-xl block">
            {{ $t("Brand") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Select Brand"
            v-model="Towing.Brand"
          >
            <option disabled selected value="">
              {{ $t("Select Brand") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("Select Brand") }}</p>
          <label for="Model" class="mt-6 text-xl block">
            {{ $t("Model") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Select Model"
            v-model="Towing.Model"
          >
            <option disabled selected value="">
              {{ $t("Select Model") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">
            {{ errors.first("Select Model") }}
          </p>
          <label for="YearofManufactur" class="mt-6 text-xl block">
            {{ $t("Year of Manufactur") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Select Year"
            v-model="Towing.Year"
          >
            <option disabled selected value="">
              {{ $t("Select Year") }}
            </option>
            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">
            {{ errors.first("Select Year") }}
          </p>
          <label for="color" class="mt-6 text-xl block">
            {{ $t("color") }}</label
          >
          <input
            type="text"
            :placeholder="$t('Enter Color')"
            v-validate="{ required: true }"
            v-model.trim="Towing.color"
            name="color"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">
            {{ errors.first("color") }}
          </p>
          <label for="PlateNumber" class="mt-6 text-xl block">
            {{ $t("Plate Number") }}</label
          >
          <input
            type="text"
            v-model.trim="Towing.PlateNumber"
            v-validate="{ required: true }"
            name="PlateNumber"
            :placeholder="$t('Enter Plate Number')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">
            {{ errors.first("PlateNumber") }}
          </p>

          <label for="LocationFrom" class="mt-6 text-xl block">
            {{ $t("Location From") }}</label
          >
          <input
            type="text"
            v-model.trim="Towing.LocationFrom"
            :placeholder="$t('Enter Location From')"
            v-validate="{ required: true }"
            name="LocationFrom"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">
            {{ errors.first("LocationFrom") }}
          </p>
          <label for="LocationTo" class="mt-6 text-xl block">
            {{ $t("Location To") }}</label
          >
          <input
            type="text"
            v-model.trim="Towing.LocationTo"
            :placeholder="$t('Enter Location To')"
            v-validate="{ required: true }"
            name="LocationTo"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">
            {{ errors.first("LocationTo") }}
          </p>
          <p class="my-2">
            {{
              $t(
                "* Adding car image and location helps in getting the service faster"
              )
            }}
          </p>
          <p>{{ $t("* Adding registration image is a legal requirement.") }}</p>
          <div class="maps flex gap-8 lg:flex-row flex-col my-4 items-center">
            <MapGoogle></MapGoogle>
            <MapGoogle></MapGoogle>
          </div>
        </div>
      </div>
      <div class="images lg:col-start-4 lg:col-end-5 col-start-1 col-end-2">
        <h1 class="text-[16px] font-bold mb-[13px]">
          {{ $t("Add Registration images") }}
        </h1>

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
            name="AddRegistrationimages"
          />
        </div>
        <p class="text-red-400">
          {{ errors.first("AddRegistrationimages") }}
        </p>
        <div class="mt-8">
          <h1 class="text-[16px] font-bold mb-[13px]">
            {{ $t("Add image") }}
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
            @change="onFileChanged($event)"
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
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import SwitchLang from "../../../components/Shared/Form/SwitchLang.vue";
import MapGoogle from "../../Shared/Map.vue";
export default {
  name: "TowingAndShipping",
  data() {
    return {
      Towing: {
        Scope: "",
        City: "",
        Brand: "",
        Model: "",
        Year: "",
        color: "",
        PlateNumber: "",

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
