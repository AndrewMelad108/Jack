<template>
  <section class="TowingAndShipping md:p-6 p-1 bg-white">
    <SwitchLang class="m-2" />
    <header class="service-title">
      <WelcomeMassage name="User" />
      <div class="lg:flex block items-center gap-4 space-y-4">
        <img
          src="../../../assets/images/Servies/towing_and_shipping.png"
          alt="towing_and_shipping"
          loading="lazy"
          class="w-auto h-28"
        />
        <div
          class="advertisement-container bg-advertisement h-24 lg:w-[70%] w-[90%] mx-auto bg-center bg-cover rounded-md"
        ></div>
      </div>
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
            <option v-for="option in scope" :key="option.id" :value="option.id">
              {{ option.value }}
            </option>
          </select>
          <p class="text-red-400">{{ errors.first("Search Scope") }}</p>
        </div>
      </div>
    </header>
    <div class="service-content grid lg:grid-cols-4 grid-cols-1 gap-2">
      <div class="lg:col-start-1 lg:col-end-4 col-start-1 col-end-2">
        <div class="Form-user bg-white h-auto rounded-lg p-4">
          <label for="SelectCity" class="mt-6 text-xl block">{{
            $t("Select tow truck type")
          }}</label>
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
            v-validate="{ required: true }"
            name="Search City"
            v-model="Towing.Type"
          >
            <option disabled selected value="">
              {{ $t("Select tow truck type") }}
            </option>
            <option
              v-for="option in ServiceType"
              :key="option.id"
              :value="option.id"
            >
              {{ option.value }}
            </option>
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

            <option v-for="option in Brand" :key="option.id" :value="option.id">
              {{ option.value }}
            </option>
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

            <option v-for="option in Model" :key="option.id" :value="option.id">
              {{ option.value }}
            </option>
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
          <div
            class="maps grid xl:grid-cols-2 w-[90%] mx-auto gap-8 lg:flex-row flex-col my-4 items-center"
          >
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
            for="upload_photo1"
            class="cursor-pointer h-full w-full flex justify-center items-center font-bold"
            >{{ $t("Add images") }}</label
          >
          <input
            class="hidden"
            type="file"
            id="upload_photo1"
            @change="onFileChangedRegistration($event)"
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
            for="upload_photo2"
            class="cursor-pointer h-full w-full flex justify-center items-center font-bold"
            >{{ $t("Add images") }}</label
          >
          <input
            class="hidden"
            type="file"
            v-validate="{ required: true }"
            name="Addimages"
            id="upload_photo2"
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
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import SwitchLang from "../../../components/Shared/Form/SwitchLang.vue";
import MapGoogle from "../../Shared/Map.vue";
import { sendRequest } from "../../../../axios";
export default {
  name: "TowingAndShipping",
  data() {
    return {
      ServiceDetails: [],
      ServiceType: [],
      scope: [
        {
          id: 1,
          value: "Local",
        },
        {
          id: 2,
          value: "Global",
        },
      ],
      Brand: [],
      Model: [],
      Manufactur: [],
      Towing: {
        Scope: null,
        Type: null,
        Brand: null,
        Model: null,
        Year: null,
        color: "",
        PlateNumber: "",
        LocationFrom: "",
        LocationTo: "",
        image: "",
        registrationImage: "",
      },
    };
  },
  components: {
    WelcomeMassage,
    SwitchLang,
    MapGoogle,
  },
  mounted() {
    this.getAllServicesOptions();
  },
  methods: {
    getAllServicesOptions() {
      let successCallback = (res) => {
        if (res.data.success) {
          this.ServiceDetails = res.data.data.filters;
          this.Brand = res.data.data.filters[0].filterValues;
          this.Model = res.data.data.filters[1].filterValues;
          this.Manufactur = res.data.data.filters[2].filterValues;
          this.ServiceType = res.data.data.filters[3].filterValues;
        }
      };

      sendRequest(
        "Admin/ServiceDetails?id=1",
        "get",
        null,
        true,
        successCallback,
        null
      );
    },
    SendServices() {
      this.$validator.validateAll().then((result) => {
        if (result) {
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
          data.append("searchScope", this.Towing.Scope);
          data.append("serviceType", this.Towing.Type);
          data.append("brand", this.Towing.Brand);
          data.append("model", this.Towing.Model);
          data.append("yearOfManufactur", this.Towing.Year);
          data.append("color", this.Towing.color);
          data.append("plateNumber", this.Towing.PlateNumber);
          data.append("locationFrom", this.Towing.LocationFrom);
          data.append("locationTo", this.Towing.LocationTo);
          data.append("image", this.Towing.image);
          data.append("registrationImage", this.Towing.registrationImage);
          sendRequest(
            "Towing/Request",
            "post",
            data,
            true,
            successCallback,
            errorCallback
          );
        }
      });
    },
    onFileChangedRegistration(e) {
      const file = e.target.files[0];
      this.Towing.registrationImage = file;
    },
    onFileChangedImage(e) {
      const file = e.target.files[0];
      this.Towing.image = file;
    },
  },
};
</script>
