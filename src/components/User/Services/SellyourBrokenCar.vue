<template>
  <section class="SellyourBrokenCar md:p-4 p-2 bg-white">
    <SwitchLang />
    <ServicesNav class="md:flex hidden" />
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
    <div class="service-content grid lg:grid-cols-4 grid-cols-1 gap-2">
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
            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
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

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
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
            v-validate="{ required: true }"
            name="Select Year"
            v-model="Selling.Year"
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
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
  name: "TowingAndShipping",
  data() {
    return {
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
  components: {
    ServicesNav,
    WelcomeMassage,
    SwitchLang,
  },
};
</script>

<style></style>
