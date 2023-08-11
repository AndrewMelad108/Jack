<template>
  <section class="SellyourBrokenCar p-6 bg-white">
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
        <div class="Form-user bg-white h-auto rounded-lg p-4">
          <label for="SearchScope" class="mb-2 text-lg block text-text-color">{{
            $t("Search Scope")
          }}</label>
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

          <label for="Brand" class="mt-6 text-lg block text-text-color">
            {{ $t("Brand") }}</label
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
            {{ $t("Model") }}</label
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
            {{ $t("Year of Manufactur") }}</label
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
            {{ $t("color") }}</label
          >
          <input
            type="text"
            :placeholder="$t('Enter Color')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <label
            for="RegionalSpecification"
            class="mt-6 text-lg block text-text-color"
          >
            {{ $t("Regional Specification") }}</label
          >
          <input
            type="text"
            :placeholder="$t('Enter Regional Specification')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <label for="FuelType" class="mt-6 text-lg block text-text-color">
            {{ $t("Fuel Type") }}</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
          >
            <option disabled selected value="">
              {{ $t("Select Fuel Type") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <label
            for="Transmision Type"
            class="mt-6 text-lg block text-text-color"
          >
            {{ $t("Transmision Type") }}</label
          >
          <select
            class="placeholder:capitalize focus:outline-0 p-2 rounded-lg bg-gray-100 w-full mx-auto"
          >
            <option disabled selected value="">
              {{ $t("Select Transmision Type") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <label for="ChasisCase" class="mt-6 text-lg block text-text-color">
            {{ $t("Chasis Case") }}</label
          >
          <input
            type="text"
            :placeholder="$t('Enter Chasis Case')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <label for="Kilo Meters" class="mt-6 text-lg block text-text-color">
            {{ $t("Kilo Meters") }}</label
          >
          <input
            type="text"
            :placeholder="$t('Enter Kilo Meters')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <label for="Price" class="mt-6 text-lg block text-text-color">
            {{ $t("Price") }}</label
          >
          <input
            type="text"
            :placeholder="$t('Enter Price')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          />
          <p class="my-2">
            {{
              $t(
                "* Adding car image and location helps in getting the service faster"
              )
            }}
          </p>

          <button class="w-full bg-main-color p-2 mt-3 text-white rounded-lg">
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
    return {
      asd: this.$route.query,
    };
  },
  created() {
    console.log(this.asd.servicesID);
  },
  components: {
    ServicesNav,
    WelcomeMassage,
  },
};
</script>

<style></style>
