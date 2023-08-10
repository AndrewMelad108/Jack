<template>
  <section class="TowingAndShipping p-6 bg-white">
    <ServicesNav class="md:flex hidden" />
    <header class="service-title">
      <WelcomeMassage name="User" />
      <img
        src="../../../assets/images/Servies/towing_and_shipping.png"
        alt="towing_and_shipping"
        loading="lazy"
        class="w-auto h-28"
      />
      <h1 class="text-xl font-bold mt-2 capitalize">towing and shipping</h1>
    </header>
    <div class="service-content grid lg:grid-cols-4 grid-cols-1 gap-2">
      <div class="lg:col-start-1 lg:col-end-4 col-start-1 col-end-2">
        <div class="Form-user bg-white h-auto rounded-lg p-4">
          <label for="SearchScope" class="mb-2 text-lg block text-text-color"
            >Search Scope</label
          >
          <select
            class="focus:outline-0 p-1 rounded-lg bg-gray-100 w-full mx-auto"
          >
            <option disabled selected value="">
              {{ $t("Search Scope") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <label for="SelectCity" class="mt-6 text-lg block text-text-color"
            >Select City</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
          >
            <option disabled selected value="">
              {{ $t("Select City") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <label for="Brand" class="mt-6 text-lg block text-text-color">
            Brand</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
          >
            <option disabled selected value="">
              {{ $t("Select Brand") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <label for="Model" class="mt-6 text-lg block text-text-color">
            Model</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
          >
            <option disabled selected value="">
              {{ $t("Select Model") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <label
            for="YearofManufactur"
            class="mt-6 text-lg block text-text-color"
          >
            Year of Manufactur</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
          >
            <option disabled selected value="">
              {{ $t("Select Year") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <label for="color" class="mt-6 text-lg block text-text-color">
            color</label
          >
          <input
            type="text"
            placeholder="Enter Color"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <label for="PlateNumber" class="mt-6 text-lg block text-text-color">
            Plate Number</label
          >
          <input
            type="text"
            placeholder="Enter Plate Number"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <label
            for="Copy of Regestration"
            class="mt-6 text-lg block text-text-color"
          >
            Copy of Regestration</label
          >
          <input
            type="text"
            placeholder="Enter Copy of Regestration"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <label for="LocationFrom" class="mt-6 text-lg block text-text-color">
            Location From</label
          >
          <input
            type="text"
            placeholder="Enter Location From"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <label for="LocationTo" class="mt-6 text-lg block text-text-color">
            Location To</label
          >
          <input
            type="text"
            placeholder="EnterLocation To"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="my-2">
            * Adding car image and location helps in getting the service faster
          </p>
          <p>* Adding registration image is a legal requirement.</p>
          <button class="w-full bg-main-color p-2 mt-3 text-white rounded-lg">
            Post Request
          </button>
        </div>
      </div>
      <div class="images lg:col-start-4 lg:col-end-5 col-start-1 col-end-2">
        <h1 class="text-[16px] font-bold mb-[13px]">Add Registration images</h1>

        <div
          class="flex items-center justify-center bg-gray-100 rounded-[10px] focus:ring-[#24C6C9] focus:border-[#24C6C9] w-full h-[200px]"
        >
          <input
            class="text-sm text-grey-100 text-[15px] file:bg-gray-100 file:w-full file:rounded-full file:border-0 file:text-[#3A3A3A] hover:file:cursor-pointer"
            type="file"
            name="upload_photo"
            id="upload_photo"
            @change="onFileChanged($event)"
            accept="image/*"
          />
        </div>
        <div class="mt-8">
          <h1 class="text-[16px] font-bold mb-[13px]">Add images</h1>
        </div>
        <div
          class="flex items-center justify-center bg-gray-100 rounded-[10px] focus:ring-[#24C6C9] focus:border-[#24C6C9] w-full h-[200px]"
        >
          <input
            class="text-sm text-grey-100 text-[15px] file:bg-gray-100 file:w-full file:rounded-full file:border-0 file:text-[#3A3A3A] hover:file:cursor-pointer"
            type="file"
            name="upload_photo"
            id="upload_photo"
            @change="onFileChanged($event)"
            accept="image/*"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServicesNav from "@/components/User/Services/ServicesNav.vue";
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
export default {
  name: "TowingAndShipping",
  data() {
    return {};
  },
  components: {
    ServicesNav,
    WelcomeMassage,
  },
};
</script>

<style></style>
