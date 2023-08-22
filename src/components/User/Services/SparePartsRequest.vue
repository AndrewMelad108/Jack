<template>
  <section class="SparePartsRequest md:p-4 p-2 bg-white">
    <SwitchLang class="m-4" />
    <ServicesNav class="md:flex hidden" />
    <header class="service-title">
      <WelcomeMassage name="User" />
      <img
        src="../../../assets/images/Servies/spare_parts.png"
        alt="Spare_Parts"
        loading="lazy"
        class="w-auto h-28"
      />
      <h1 class="text-xl font-bold mt-2 capitalize">{{ $t("Spare Parts") }}</h1>
    </header>
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
            v-model="SpareParts.Scope"
          >
            <option disabled selected value="">
              {{ $t("Search Scope") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("Search Scope") }}</p>

          <label for="SparePartsType" class="capitalize block text-xl">{{
            $t("SparePartsType")
          }}</label>
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="SparePartsType"
            v-model="SpareParts.SparePartsType"
          >
            <option disabled selected value="">
              {{ $t("Select Spare Parts Type") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("SparePartsType") }}</p>

          <label for="Brand" class="capitalize block text-xl">
            {{ $t("Brand") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Brand"
            v-model="SpareParts.Brand"
          >
            <option disabled selected value="">
              {{ $t("Select Brand") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("Brand") }}</p>

          <label for="Model" class="capitalize block text-xl">
            {{ $t("Model") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Select Model"
            v-model="SpareParts.Model"
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
          <label for="YearofManufactur" class="capitalize block text-xl">
            {{ $t("Year of Manufactur") }}</label
          >
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Select Year"
            v-model="SpareParts.Year"
          >
            <option disabled selected value="">
              {{ $t("Select Year") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">
            {{ errors.first("Select Model") }}
          </p>
          <label for=" CarSerialNumber" class="capitalize block text-xl">
            {{ $t("Car Serial Number") }}</label
          >
          <input
            type="text"
            v-model.trim="SpareParts.CarSerialNumber"
            v-validate="{ required: true }"
            name="PlateNumber"
            :placeholder="$t('Enter Car Serial Number')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">
            {{ errors.first("PlateNumber") }}
          </p>
          <label for="Part Name" class="capitalize block text-xl">
            {{ $t("Part Name") }}</label
          >
          <input
            type="text"
            v-model.trim="SpareParts.PartName"
            v-validate="{ required: true }"
            name="PartName"
            :placeholder="$t('Enter Part Name')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">
            {{ errors.first("PartName") }}
          </p>
          <p class="my-2">
            {{
              $t(
                "Adding registration image can be in place of enterin the car plate number, and adding car and part image can help in clarifing your request."
              )
            }}
          </p>
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
            v-validate="{ required: true }"
            name="AddRegistrationimages"
            id="upload_photo"
            @change="onFileChanged($event)"
            accept="image/*"
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
import ServicesNav from "@/components/User/Services/ServicesNav.vue";
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import SwitchLang from "../../../components/Shared/Form/SwitchLang.vue";

export default {
  name: "SparePartsRequest",
  data() {
    return {
      SpareParts: {
        Scope: "",
        CarSerialNumber: "",
        Brand: "",
        Model: "",
        Year: "",
        PartName: "",
        SparePartsType: "",
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
