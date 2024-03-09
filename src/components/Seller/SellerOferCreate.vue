<template>
  <section class="SellerRequestDetials p-8">
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="User" />
    </header>
    <div
      @click="
        $router.push({
          name: 'Provider.Requests',
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
    <div class="request-Offer-content w-full">
      <div class="flex gap-4 md:flex-row flex-col">
        <div class="Offer md:w-[70%] w-full">
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
            <div
              v-if="$route.params.requestType === 'SpareParts'"
              class="Offer_form space-y-6 mt-2"
            >
              <div class="input-field">
                <label
                  for="FirstName"
                  class="capitalize text-text-color block md:text-lg text-md text-lg"
                  >{{ $t("First Name") }}</label
                >
                <input
                  type="text"
                  v-validate="{ alpha: true, required: true }"
                  name="FirstName"
                  v-model="SparePartDTO.name"
                  class="placeholder:capitalize p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
                  :placeholder="$t('enter First Name')"
                />
                <span class="text-red-400">{{
                  errors.first("FirstName")
                }}</span>
              </div>
              <div class="input-field">
                <label
                  for="PostCost"
                  class="capitalize text-text-color block md:text-lg text-md"
                  >{{ $t("PostCost") }}</label
                >
                <input
                  type="text"
                  v-validate="{ required: true }"
                  name="PostCost"
                  v-model="SparePartDTO.PartCost"
                  :placeholder="$t('enter Post Cost')"
                  class="placeholder:capitalize p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
                />
                <span class="text-red-400">{{ errors.first("PostCost") }}</span>
              </div>
              <div class="input-field">
                <label
                  for="Amount"
                  class="capitalize text-text-color block md:text-lg text-md"
                  >{{ $t("Amount") }}</label
                >
                <input
                  type="number"
                  :placeholder="$t('Enter Amount')"
                  v-validate="{ required: true }"
                  name="Amount"
                  v-model="SparePartDTO.Amount"
                  class="placeholder:capitalize p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
                />
                <span class="text-red-400">{{ errors.first("Amount") }}</span>
              </div>
              <div class="input-field">
                <label
                  for="Total Cost"
                  class="capitalize text-text-color block md:text-lg text-md"
                  >{{ $t("TotalCost") }}</label
                >
                <input
                  type="number"
                  :placeholder="$t('Enter Total Cost')"
                  v-validate="{ required: true }"
                  name="TotalCost"
                  v-model="SparePartDTO.Total"
                  class="placeholder:capitalize p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
                />
                <span class="text-red-400">{{
                  errors.first("TotalCost")
                }}</span>
              </div>
              <div class="input-field">
                <label
                  for="Details"
                  class="capitalize text-text-color block md:text-lg text-md"
                  >{{ $t("Details") }}</label
                >
                <textarea
                  class="resize-none h-20 w-full placeholder:p-2 bg-gray-200 rounded-lg"
                  name="Details"
                  id="Details"
                  v-model="SparePartDTO.description"
                  rows="10"
                  :placeholder="$t('Enter More Details')"
                  v-validate="'required'"
                ></textarea>
                <span class="text-red-400">{{ errors.first("Details") }}</span>
              </div>
              <button
                @click="addSparePartDTOs"
                class="bg-main-color w-full font-bold border-2 md:text-md text-sm text-white p-1 md:px-3 md:py-2 rounded-lg"
              >
                {{ $t("Add") }}
              </button>
            </div>
            <div
              v-if="$route.params.requestType === 'SpareParts'"
              class="Tables"
            >
              <table
                class="mt-10 text-center divide-y w-full shadow-md shadow-slate-400 divide-gray-200"
              >
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="md:px-4 px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {{ $t("Name") }}
                    </th>
                    <th
                      scope="col"
                      class="md:px-4 px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {{ $t("Description") }}
                    </th>

                    <th
                      scope="col"
                      class="md:px-4 px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {{ $t("Amount") }}
                    </th>
                    <th
                      scope="col"
                      class="md:px-4 px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {{ $t("Part Cost") }}
                    </th>
                    <th
                      scope="col"
                      class="md:px-4 px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {{ $t("Total") }}
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y capitalize divide-gray-200">
                  <tr
                    v-for="SparePartDTO in SparePartDTOs"
                    :key="SparePartDTO.index"
                  >
                    <td
                      class="md:px-2 px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      {{ SparePartDTO.name }}
                    </td>
                    <td
                      class="md:px-2 px-1 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ SparePartDTO.description }}
                    </td>
                    <td
                      class="md:px-2 px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      {{ SparePartDTO.Amount }}
                    </td>
                    <td
                      class="md:px-2 px-1 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ SparePartDTO.PartCost }}
                    </td>
                    <td
                      class="md:px-2 px-1 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ SparePartDTO.Total }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p
              v-if="$route.params.requestType === 'SpareParts'"
              class="md:text-lg text-sm my-4 capitalize"
            >
              {{ $t("total amount is") }} {{ total }}
            </p>
          </div>
          <div class="input-shipping-cost md:block hidden">
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
                v-model="offer.cost"
                class="placeholder:capitalize my-2 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
              />
              <span class="text-red-400">{{ errors.first("Price") }}</span>
            </div>
          </div>
        </div>
        <div class="offer-image md:w-[30%] w-full">
          <div
            class="flex items-center justify-center bg-white rounded-[10px] focus:ring-[#24C6C9] focus:border-[#24C6C9] w-full h-44"
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
        <div class="input-shipping-cost md:hidden block">
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
              v-model="offer.cost"
              class="placeholder:capitalize my-2 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            />
            <span class="text-red-400">{{ errors.first("Price") }}</span>
          </div>
        </div>
      </div>
      <button
        @click="createOffers"
        class="bg-main-color block w-full font-bold border-2 md:text-md text-sm text-white p-1 md:px-3 md:py-2 rounded-lg"
      >
        {{ $t("Next") }}
      </button>
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import { sendRequest } from "../../../axios";
export default {
  name: "SellerRequestDetials",
  data() {
    return {
      Lang: localStorage.getItem("lang"),
      PriceCheck: true,
      total: null,
      OfferDetails: {
        SparePartsType: "new",
        Brand: "Yamaha",
        Model: "Hilux",
        YearofManufactur: "2022",
        CarSerialNumber: "54546186441864",
        PartName: "Something",
      },
      SparePartDTO: {
        name: "",
        description: "",
        Amount: null,
        PartCost: null,
        Total: null,
      },
      SparePartDTOs: [],
      offer: {
        image: "",
        cost: null,
      },
    };
  },
  watch: {
    "Offer.Amount"() {
      this.calculateTotal();
    },
  },
  components: {
    WelcomeMassage,
  },
  methods: {
    calculateTotal() {
      this.services.forEach((element) => {
        this.total = 0;
        if (element.amount !== null && element.Total !== null) {
          this.total += element.amount * element.Total;
        }
      });
    },
    addSparePartDTOs() {
      this.SparePartDTOs.push({
        name: this.SparePartDTO.name,
        description: this.SparePartDTO.description,
        Amount: this.SparePartDTO.Amount,
        PartCost: this.SparePartDTO.PartCost,
        Total: this.SparePartDTO.Total,
      });
    },
    onFileChanged(e) {
      this.offer.image = e.target.files[0];
    },
    createOffers() {
      // this.$validator.validateAll().then((result) => {
      //   if (result) {
      let successCallback = (res) => {
        console.log(res.data);
        if (res.data.success) {
          this.$router.push({
            name: "Provider.Requests",
          });
        }
      };
      let errorCallback = (err) => {
        console.log(err);
      };
      const data = new FormData();
      data.append(
        "cost",
        this.PriceCheck === true ? (this.offer.cost = 0) : this.offer.cost
      );
      data.append("image", this.offer.image);
      sendRequest(
        `${this.$route?.params?.requestType}/Offer?RequestID=${this.$route?.params?.requestId}`,
        "post",
        data,
        true,
        successCallback,
        errorCallback
      );
    },
    // });
  },
  // },
};
</script>
<style scoped>
input:focus {
  outline: 0;
}
</style>
