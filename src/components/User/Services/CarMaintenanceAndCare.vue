<template>
  <section class="CarMaintenanceAndCare p-6 bg-white">
    <SwitchLang />
    <ServicesNav class="md:flex hidden" />
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
    <div class="service-content grid lg:grid-cols-4 grid-cols-1 gap-2">
      <div class="lg:col-start-1 lg:col-end-4 col-start-1 col-end-2">
        <div class="Form-user bg-white h-auto rounded-lg p-4">
          <label for="SearchScope" class="mb-2 text-lg block text-text-color">{{
            $t("Service Type")
          }}</label>
          <select
            class="focus:outline-0 p-1 rounded-lg bg-gray-100 w-full mx-auto"
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

          <label for="Brand" class="mt-6 text-lg block text-text-color">
            {{ $t("Brand") }}</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
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
          <p class="text-red-400">{{ errors.first("ServiceType") }}</p>
          <label for="Model" class="mt-6 text-lg block text-text-color">
            {{ $t("Model") }}</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
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
          <label
            for="YearofManufactur"
            class="mt-6 text-lg block text-text-color"
          >
            {{ $t("Year of Manufactur") }}</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
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

          <label for="color" class="mt-6 text-lg block text-text-color">
            {{ $t("color") }}</label
          >
          <input
            type="text"
            :placeholder="$t('Enter Color')"
            v-validate="{ required: true }"
            name="color"
            v-model.trim="Repairing.color"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="text-red-400">{{ errors.first("color") }}</p>
          <label for="PlateNumber" class="mt-6 text-lg block text-text-color">
            {{ $t("Plate Number") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            name="PlateNumber"
            v-model.trim="Repairing.PlateNumber"
            :placeholder="$t('Enter Plate Number')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="text-red-400">{{ errors.first("PlateNumber") }}</p>
          <label for="LocationTo" class="mt-6 text-lg block text-text-color">
            {{ $t("Location") }}
          </label>
          <input
            type="text"
            v-validate="{ required: true }"
            name="LocationTo"
            v-model.trim="Repairing.LocationTo"
            :placeholder="$t('Enter Location')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="text-red-400">{{ errors.first("LocationTo") }}</p>

          <p class="my-2">
            {{
              $t(
                "* Adding car image and location helps in getting the service faster"
              )
            }}
          </p>
          <div class="Maps flex justify-around h-62">
            <!-- <MapGoogle />
            <MapGoogle /> -->
          </div>
          <button
            @click="SendServices"
            class="w-full bg-main-color p-2 mt-3 text-white rounded-lg"
          >
            {{ $t("Post Request") }}
          </button>
        </div>
      </div>
      <div class="images lg:col-start-4 lg:col-end-5 col-start-1 col-end-2">
        <h1 class="text-[16px] font-bold mb-[13px]">{{ $t("Add images") }}</h1>

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
            name="Addimages"
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
// import Map from "@/components/Shared/Map.vue";
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
