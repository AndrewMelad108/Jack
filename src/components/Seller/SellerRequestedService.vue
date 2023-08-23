<template>
  <section class="DeliveryServices md:p-4 p-2 bg-white">
    <header class="service-title">
      <WelcomeMassage name="User" />
      <img
        src="../../assets/images/Servies/delivery_services.png"
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
        <div class="Form-user space-y-3 bg-white h-auto rounded-lg p-4">
          <label for="SearchScope" class="capitalize block text-xl">{{
            $t("Search Scope")
          }}</label>
          <select
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
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

          <label for="ServiceType" class="capitalize block text-xl">{{
            $t("Service Type")
          }}</label>
          <select
            v-validate="{ required: true }"
            name="ServiceType"
            v-model="Delivery.ServiceType"
            class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          >
            <option disabled selected value="">
              {{ $t("Service Type") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("ServiceType") }}</p>

          <label for="Size" class="capitalize block text-xl">
            {{ $t("Size") }}</label
          >
          <input
            type="text"
            v-validate="{ required: true }"
            v-model.trim="Delivery.Size"
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
            v-model.trim="Delivery.Weight"
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
            v-model.trim="Delivery.LocationFrom"
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
            v-model.trim="Delivery.LocationTo"
            name="LocationTo"
            :placeholder="$t('Enter Location To')"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-100 w-[100%]"
          />
          <p class="text-red-400">{{ errors.first("LocationTo") }}</p>
          <p class="my-2">
            {{ $t("* Please add documents images and location") }}
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
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";

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
    WelcomeMassage,
  },
};
</script>

<style></style>
