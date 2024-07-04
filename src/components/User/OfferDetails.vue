<template>
  <section class="OfferDetails md:p-8 p-4">
    <SwitchLang class="m-4" />
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="User" />
      <InputSearch />
    </header>
    <div
      @click="
        $router.push({
          name: 'User.Requests',
        })
      "
      class="back_Requests cursor-pointer mx-4 my-8 flex gap-4 font-bold items-center text-xl"
    >
      <img
        src="../../assets/images/Back.png"
        alt="Back-icon"
        loading="lazy"
        v-if="Lang === 'en'"
      />{{ $t("Provider Details") }}
      <img
        src="../../assets/images/Back.png"
        v-if="Lang === 'ar'"
        alt="Back-icon"
        loading="lazy"
      />
    </div>
    <div class="Offer-detials mt-10">
      <div
        class="bg-white md:text-md text-sm shadow-md shadow-slate-400 lg:w-[90%] w-full rounded-xl min-h-52 grid lg:grid-cols-2 grid-cols-1 gap-y-6 p-6"
      >
        <p class="font-bold">
          {{ $t("Spare Parts Type") }}
          <span class="text-text-color md:px-6">
            {{ Offer.SparePartsType }}</span
          >
        </p>
        <p class="font-bold">
          {{ $t("Brand")
          }}<span class="text-text-color md:px-6 px-2"> {{ Offer.Brand }}</span>
        </p>
        <p class="font-bold">
          {{ $t("Model") }}
          <span class="text-text-color md:px-6 px-2"> {{ Offer.Model }}</span>
        </p>
        <p class="font-bold">
          {{ $t("Year of Manufactur")
          }}<span class="text-text-color md:px-4 px-2">
            {{ Offer.YearofManufactur }}</span
          >
        </p>
        <p class="font-bold">
          {{ $t("Car Serial Number") }}
          <span class="text-text-color md:px-6 px-2">
            {{ Offer.CarSerialNumber }}</span
          >
        </p>
        <p class="font-bold">
          {{ $t("Part Name") }}
          <span class="text-text-color px-6"> {{ Offer.PartName }}</span>
        </p>
      </div>

      <table
        class="mt-10 text-center divide-y lg:w-[90%] w-full shadow-md shadow-slate-400 divide-gray-200"
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
            <th
              scope="col"
              class="md:px-4 px-1 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {{ $t("Actions") }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y capitalize divide-gray-200">
          <tr v-for="(service, index) in services" :key="index">
            <td
              class="md:px-2 px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              {{ service.name }}
            </td>
            <td
              class="md:px-2 px-1 py-4 whitespace-nowrap text-sm text-gray-500"
            >
              {{ service.description }}
            </td>
            <td
              class="md:px-2 px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              <!-- {{ service.Amount }} -->
              <input
                type="number"
                v-model="service.Amount"
                class="block mx-auto border-4 text-center"
              />
            </td>
            <td
              class="md:px-2 px-1 py-4 whitespace-nowrap text-sm text-gray-500"
            >
              {{ service.PartCost }}
            </td>
            <td
              class="md:px-2 px-1 py-4 whitespace-nowrap text-sm text-gray-500"
            >
              {{ service.Total * service.Amount }}
            </td>
            <td
              @click="deleteService(index)"
              class="md:px-2 cursor-pointer font-bold px-1 py-4 whitespace-nowrap text-sm text-gray-500"
            >
              {{ $t("delete") }}
            </td>
          </tr>
          <!-- Add more rows here -->
        </tbody>
      </table>

      <p class="md:text-lg text-sm my-4 capitalize">
        {{ $t("total amount is") }} {{ totalAmount + " + "
        }}{{ $t("Shipping expenses") }}
      </p>
      <div class="checkAllPrices my-4 flex gap-2 items-center">
        <input type="checkbox" class="w-5 h-5 rounded-xl" v-model="policy" />
        <span class="md:text-lg text-sm">{{ $t("Return policy") }}</span>
      </div>
      <div
        class="group-btn capitalize flex justify-center items-center gap-4 mx-auto"
      >
        <button
          @click="
            $router.push({
              name: 'User.Chats',
            })
          "
          class="text-main-color font-bold border-2 md:text-md text-sm border-main-color w-auto md:p-4 p-2 rounded-lg"
        >
          {{ $t("Send Message") }}
        </button>
        <button
          @click="
            $router.push({
              name: 'User.Orders',
            })
          "
          class="bg-main-color font-bold w-auto md:text-md text-sm md:p-4 p-2 text-white rounded-lg"
        >
          {{ $t("Start Order") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";
import SwitchLang from "../../components/Shared/Form/SwitchLang.vue";
export default {
  name: "OfferDetails",
  data() {
    return {
      Lang: localStorage.getItem("lang"),
      total: "750",
      policy: false,
      Offer: {
        SparePartsType: "new",
        Brand: "Yamaha",
        Model: "Hilux",
        YearofManufactur: "2022",
        CarSerialNumber: "54546186441864",
        PartName: "Something",
      },
      services: [
        {
          name: "service",
          description: "Description",
          Amount: 2,
          PartCost: 400,
          Total: 1,
        },
        {
          name: "service",
          description: "Description",
          Amount: 2,
          PartCost: 400,
          Total: 1,
        },
      ],
    };
  },
  computed: {
    totalAmount() {
      let sum = 0;
      this.services.forEach((service) => {
        sum += service.Amount * service.PartCost;
      });
      return sum;
    },
  },
  watch: {
    Lang() {
      return this.Lang;
    },
  },
  components: {
    WelcomeMassage,
    InputSearch,
    SwitchLang,
  },
  methods: {
    deleteService(index) {
      this.services.splice(index, 1);
    },
  },
};
</script>

<style></style>
