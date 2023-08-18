<template>
  <section class="TowingAndShipping p-6 bg-white">
    <SwitchLang />
    <ServicesNav class="md:flex hidden" />
    <header class="service-title">
      <WelcomeMassage name="User" />
      <img
        src="../../../assets/images/Servies/towing_and_shipping.png"
        alt="towing_and_shipping"
        loading="lazy"
        class="w-auto h-28"
      />
      <h1 class="text-xl font-bold mt-2 capitalize">
        {{ $t("towing and shipping") }}
      </h1>
    </header>
    <div class="service-content grid lg:grid-cols-4 grid-cols-1 gap-2">
      <div class="lg:col-start-1 lg:col-end-4 col-start-1 col-end-2">
        <div class="Form-user bg-white h-auto rounded-lg p-4">
          <label for="SearchScope" class="mb-2 text-lg block text-text-color">
            {{ $t("Search Scope") }}</label
          >
          <select
            class="focus:outline-0 p-1 rounded-lg bg-gray-100 w-full mx-auto"
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
          <label for="SelectCity" class="mt-6 text-lg block text-text-color">{{
            $t("Select City")
          }}</label>
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
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
          <label for="Brand" class="mt-6 text-lg block text-text-color">
            {{ $t("Brand") }}</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
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
          <label for="Model" class="mt-6 text-lg block text-text-color">
            {{ $t("Model") }}</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
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
          <label
            for="YearofManufactur"
            class="mt-6 text-lg block text-text-color"
          >
            {{ $t("Year of Manufactur") }}</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
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
          <label for="color" class="mt-6 text-lg block text-text-color">
            {{ $t("color") }}</label
          >
          <input
            type="text"
            :placeholder="$t('Enter Color')"
            v-validate="{ required: true }"
            v-model.trim="Towing.color"
            name="color"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="text-red-400">
            {{ errors.first("color") }}
          </p>
          <label for="PlateNumber" class="mt-6 text-lg block text-text-color">
            {{ $t("Plate Number") }}</label
          >
          <input
            type="text"
            v-model.trim="Towing.PlateNumber"
            v-validate="{ required: true }"
            name="PlateNumber"
            :placeholder="$t('Enter Plate Number')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="text-red-400">
            {{ errors.first("PlateNumber") }}
          </p>
          <label
            for="Copy of Regestration"
            class="mt-6 text-lg block text-text-color"
          >
            {{ $t("Copy of Regestration") }}</label
          >
          <input
            type="text"
            v-model.trim="Towing.CopyOfRegestration"
            v-validate="{ required: true }"
            name="Copy of Regestration"
            :placeholder="$t('Enter Copy of Regestration')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="text-red-400">
            {{ errors.first("Copy of Regestration") }}
          </p>
          <label for="LocationFrom" class="mt-6 text-lg block text-text-color">
            {{ $t("Location From") }}</label
          >
          <input
            type="text"
            v-model.trim="Towing.LocationFrom"
            :placeholder="$t('Enter Location From')"
            v-validate="{ required: true }"
            name="LocationFrom"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="text-red-400">
            {{ errors.first("LocationFrom") }}
          </p>
          <label for="LocationTo" class="mt-6 text-lg block text-text-color">
            {{ $t("Location To") }}</label
          >
          <input
            type="text"
            v-model.trim="Towing.LocationTo"
            :placeholder="$t('Enter Location To')"
            v-validate="{ required: true }"
            name="LocationTo"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
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
          <button
            @click="SendServices"
            class="w-full bg-main-color p-2 mt-3 text-white rounded-lg"
          >
            {{ $t("Post Request") }}
          </button>
        </div>
      </div>
      <div class="images lg:col-start-4 lg:col-end-5 col-start-1 col-end-2">
        <h1 class="text-[16px] font-bold mb-[13px]">
          {{ $t("Add Registration images") }}
        </h1>

        <div
          class="flex items-center justify-center bg-gray-100 rounded-[10px] focus:ring-[#24C6C9] focus:border-[#24C6C9] w-full h-[200px]"
        >
          <input
            class="text-sm text-grey-100 text-[15px] file:bg-gray-100 file:w-full file:rounded-full file:border-0 file:text-[#3A3A3A] hover:file:cursor-pointer"
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
            {{ $t("Add images") }}
          </h1>
        </div>
        <div
          class="flex items-center justify-center bg-gray-100 rounded-[10px] focus:ring-[#24C6C9] focus:border-[#24C6C9] w-full h-[200px]"
        >
          <input
            class="text-sm text-grey-100 text-[15px] file:bg-gray-100 file:w-full file:rounded-full file:border-0 file:text-[#3A3A3A] hover:file:cursor-pointer"
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
    </div>
  </section>
</template>

<script>
import ServicesNav from "@/components/User/Services/ServicesNav.vue";
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import SwitchLang from "../../../components/Shared/Form/SwitchLang.vue";
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
        CopyOfRegestration: "",
        LocationFrom: "",
        LocationTo: "",
      },
    };
  },
  components: {
    ServicesNav,
    WelcomeMassage,
    SwitchLang,
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
