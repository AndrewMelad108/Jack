<template>
  <section class="ShippingAndForwarding md:p-4 p-2 bg-white">
    <SwitchLang />
    <ServicesNav class="md:flex hidden" />
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

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
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

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
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
            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
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
import SwitchLang from "../../../components/Shared/Form/SwitchLang.vue";
import ServicesNav from "@/components/User/Services/ServicesNav.vue";
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
export default {
  name: "ShippingAndForwarding",
  data() {
    return {
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
