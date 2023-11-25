<template>
  <section class="SellerRequestDetials p-8">
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="User" />
    </header>
    <div
      @click="
        $router.push({
          name: 'Seller.Requests',
        })
      "
      class="back_Requests cursor-pointer mx-4 my-8 flex gap-4 font-bold items-center text-xl"
    >
      <img
        src="../../assets/images/Back.png"
        alt="Back-icon"
        loading="lazy"
        v-if="Lang === 'en'"
      />{{ $t("Details") }}
      <img
        src="../../assets/images/Back.png"
        v-if="Lang === 'ar'"
        alt="Back-icon"
        loading="lazy"
      />
    </div>
    <div
      class="request-Offer-content w-full grid md:grid-cols-4 grid-cols-1 items-center gap-4"
    >
      <div class="md:col-start-1 md:col-end-4 col-start-1 col-end-2">
        <div class="Offer-detials">
          <div
            class="bg-white md:text-md text-sm shadow-md shadow-slate-400 rounded-xl min-h-52 grid lg:grid-cols-2 grid-cols-1 gap-y-6 p-6"
          >
            <p class="font-bold">
              {{ $t("Spare Parts Type") }}
              <span class="text-text-color md:px-6">
                {{ OfferDetails.SparePartsType }}</span
              >
            </p>
            <p class="font-bold">
              {{ $t("Brand")
              }}<span class="text-text-color md:px-6 px-2">
                {{ OfferDetails.Brand }}</span
              >
            </p>
            <p class="font-bold">
              {{ $t("Model") }}
              <span class="text-text-color md:px-6 px-2">
                {{ OfferDetails.Model }}</span
              >
            </p>
            <p class="font-bold">
              {{ $t("Year of Manufactur")
              }}<span class="text-text-color md:px-4 px-2">
                {{ OfferDetails.YearofManufactur }}</span
              >
            </p>
            <p class="font-bold">
              {{ $t("Car Serial Number") }}
              <span class="text-text-color md:px-6 px-2">
                {{ OfferDetails.CarSerialNumber }}</span
              >
            </p>
            <p class="font-bold">
              {{ $t("Part Name") }}
              <span class="text-text-color px-6">
                {{ OfferDetails.PartName }}</span
              >
            </p>
          </div>
          <div class="Offer_form space-y-6 mt-2">
            <div class="input-field">
              <label
                for="Company Name"
                class="capitalize text-text-color block md:text-lg text-md text-lg"
                >{{ $t("Company Name") }}</label
              >
              <input
                type="text"
                v-validate="{ alpha: true, required: true }"
                name="CompanyName"
                v-model="Offer.name"
                class="placeholder:capitalize p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
                :placeholder="$t('Enter Company Name')"
              />
              <span class="text-red-400">{{
                errors.first("CompanyName")
              }}</span>
            </div>
            <div class="input-field">
              <label
                for="PostCost"
                class="capitalize text-text-color block md:text-lg text-md"
                >{{ $t("Company Total") }}</label
              >
              <input
                type="text"
                v-validate="{ required: true }"
                name="Company Total"
                v-model="Offer.PartCost"
                :placeholder="$t('Enter Company Total')"
                class="placeholder:capitalize p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
              />
              <span class="text-red-400">{{
                errors.first("Company Total")
              }}</span>
            </div>

            <button
              @click="addOffer"
              class="bg-main-color w-full font-bold border-2 md:text-md text-sm text-white p-1 md:px-3 md:py-2 rounded-lg"
            >
              {{ $t("Add") }}
            </button>
          </div>
          <div class="Tables">
            <table
              class="mt-10 text-center divide-y w-full shadow-md shadow-slate-400 divide-gray-200"
            >
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="md:px-4 px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {{ $t("Company Name") }}
                  </th>
                  <th
                    scope="col"
                    class="md:px-4 px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {{ $t("Company Total") }}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y capitalize divide-gray-200">
                <tr v-for="service in services" :key="service.index">
                  <td
                    class="md:px-2 px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ service.name }}
                  </td>
                  <td
                    class="md:px-2 px-1 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {{ service.total }}
                  </td>
                </tr>
                <!-- Add more rows here -->
              </tbody>
            </table>
          </div>
          <p class="md:text-lg text-sm my-4 capitalize">
            {{ $t("total amount is") }} {{ total }}
          </p>
        </div>
        <div class="checkAllPrices my-4 flex gap-2 items-center">
          <input
            type="checkbox"
            class="w-5 h-5 rounded-xl"
            v-model="PriceCheck"
          />
          <span class="md:text-lg text-sm">{{
            $t("Price includes shipping")
          }}</span>
        </div>
        <div v-if="!PriceCheck" class="input-field my-4">
          <label
            for="Price"
            class="capitalize text-text-color block md:text-lg text-md"
            >{{ $t("Price") }}</label
          >
          <input
            type="number"
            :placeholder="$t('Enter Price')"
            v-validate="{ required: true }"
            name="Price"
            v-model="Offer.Price"
            class="placeholder:capitalize my-2 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
          />
          <span class="text-red-400">{{ errors.first("Price") }}</span>
        </div>

        <button
          @click="createOffers"
          class="bg-main-color w-full font-bold border-2 md:text-md text-sm text-white p-1 md:px-3 md:py-2 rounded-lg"
        >
          {{ $t("Next") }}
        </button>
      </div>
      <div class="input-field self-start">
        <div
          class="flex items-center justify-center bg-white rounded-[10px] focus:ring-[#24C6C9] focus:border-[#24C6C9] w-full h-[200px]"
        >
          <label
            for="upload_photo"
            class="flex justify-center items-center font-bold h-full w-full"
          >
            {{ $t("Add images") }}</label
          >
          <input
            class="text-sm text-grey-100 hidden text-[15px] file:bg-gray-100 file:w-full file:rounded-full file:border-0 file:text-[#3A3A3A] hover:file:cursor-pointer"
            type="file"
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
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
export default {
  name: "SellerRequestDetials",
  data() {
    return {
      Lang: localStorage.getItem("lang"),
      PriceCheck: true,
      total: "750",
      OfferDetails: {
        SparePartsType: "new",
        Brand: "Yamaha",
        Model: "Hilux",
        YearofManufactur: "2022",
        CarSerialNumber: "54546186441864",
        PartName: "Something",
      },
      services: [
        {
          name: "Company Name",
          total: 0,
        },
        {
          name: "Company Name",
          total: 0,
        },
      ],
      Offer: {
        name: "",
        total: null,
      },
    };
  },
  components: {
    WelcomeMassage,
  },
  methods: {
    addOffer() {
      try {
        this.services.push({
          name: this.Offer.name,
          total: this.Offer.total,
        });
      } catch (error) {
        console.error("Error adding data:", error);
      }
    },

    createOffers() {
      // this.$validator.validateAll().then((result) => {
      // if (result) {
      this.$router.push({
        name: "Seller.Orders",
      });
      // } else {
      // Validation errors occurred, log them
    },
    // });
    // },
  },
};
</script>

<style></style>
