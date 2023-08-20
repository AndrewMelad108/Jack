<template>
  <section class="DeliveryServices p-6 bg-white">
    <SwitchLang />
    <ServicesNav class="md:flex hidden" />
    <header class="service-title">
      <WelcomeMassage name="User" />
      <img
        src="../../../assets/images/Servies/delivery_services.png"
        alt="delivery_services"
        loading="lazy"
        class="w-auto h-28"
      />
      <h1 class="md:text-xl text-sm font-bold mt-2 capitalize">
        {{ $t("Free services and delivering household needs") }}
      </h1>
    </header>
    <div class="service-content grid lg:grid-cols-4 grid-cols-1 gap-2">
      <div class="lg:col-start-1 lg:col-end-4 col-start-1 col-end-2">
        <div class="Form-user bg-white h-auto rounded-lg p-4">
          <label for="SearchScope" class="mb-2 text-lg block text-text-color">{{
            $t("Search Scope")
          }}</label>
          <select
            class="focus:outline-0 p-1 rounded-lg bg-gray-100 w-full mx-auto"
            v-validate="{ required: true }"
            name="Search Scope"
            v-model="Delivery.Scope"
          >
            <option disabled selected value="">
              {{ $t("Search Scope") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("Search Scope") }}</p>

          <label for="ServiceType" class="mt-6 text-lg block text-text-color">{{
            $t("Service Type")
          }}</label>
          <select
            v-validate="{ required: true }"
            name="ServiceType"
            v-model="Delivery.ServiceType"
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
          >
            <option disabled selected value="">
              {{ $t("Service Type") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("ServiceType") }}</p>

          <label for="Size" class="mt-6 text-lg block text-text-color">
            {{ $t("Size") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            v-model.trim="Delivery.Size"
            name="Size"
            :placeholder="$t('Enter Size')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="text-red-400">{{ errors.first("Size") }}</p>
          <label for="Weight" class="mt-6 text-lg block text-text-color">
            {{ $t("Weight") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            v-model.trim="Delivery.Weight"
            name="Weight"
            :placeholder="$t('Enter Weight')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="text-red-400">{{ errors.first("Weight") }}</p>
          <label for="LocationFrom" class="mt-6 text-lg block text-text-color">
            {{ $t("Location From") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            v-model.trim="Delivery.LocationFrom"
            name="LocationFrom"
            :placeholder="$t('Enter Location From')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="text-red-400">{{ errors.first("LocationFrom") }}</p>
          <label for="LocationTo" class="mt-6 text-lg block text-text-color">
            {{ $t("Location To") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            v-model.trim="Delivery.LocationTo"
            name="LocationTo"
            :placeholder="$t('Enter Location To')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="text-red-400">{{ errors.first("LocationTo") }}</p>
          <p class="my-2">
            {{ $t("* Please add documents images and location") }}
          </p>

          <button
            class="w-full bg-main-color p-2 mt-3 text-white rounded-lg"
            @click="SendServices"
          >
            {{ $t("Post Request") }}
          </button>
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
  name: "DeliveryServices",
  data() {
    return {
      Delivery: {
        Scope: "",
        ServiceType: "",
        Weight: "",
        Size: "",
        LocationFrom: "",
        LocationTo: "",
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
