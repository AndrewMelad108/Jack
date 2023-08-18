<template>
  <section class="SellerOffers p-4 py-4">
    <!-- start header section -->
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="Seller" />
      <InputSearch />
    </header>
    <!-- end header section -->

    <!-- start orders section -->
    <div class="Your_orders">
      <div class="capitalize flex justify-between items-center text-lg my-10">
        <h1 class="font-bold">{{ $t("Sent Offers") }}</h1>
      </div>
    </div>
    <div>
      <div
        v-for="Offer in Offers"
        :key="Offer.id"
        class="Offers rounded-xl bg-white pt-4 capitalize justify-between text-md my-10 gap-6"
      >
        <div class="flex items-start md:flex-row flex-col">
          <img
            src="../../assets/images/1667831181-Group_1.png"
            alt="Offers-image"
            loading="lazy"
            class="rounded-full h-16 p-2"
          />
          <div
            class="grid md:grid-cols-2 grid-cols-1 gap-4 w-full justify-between"
          >
            <h1 class="font-bold pl-4">{{ $t(Offer.user) }}</h1>
            <span class="cursor-pointer font-bold md:text-right pr-4 pl-4">{{
              Offer.OfferJobs
            }}</span>
            <span class="flex items-center md:text-md text-sm"
              ><img
                src="../../assets/images/location-pin.png"
                alt="location-image"
                class="px-1 md:pl-4 pl-2"
              />
              {{ $t(Offer.location) }}</span
            >
            <span class="cursor-pointer pr-4 md:text-right pl-4">{{
              Offer.date
            }}</span>
            <h1
              class="font-bold md:col-start-1 pl-4 md:col-end-3 col-start-1 col-end-2"
            >
              {{ $t("Details") }}
            </h1>
            <p
              class="md:col-start-1 pl-4 mb-4 md:col-end-3 col-start-1 col-end-2"
            >
              {{ Offer.Requirments_Details }}
            </p>
            <div
              v-if="Offer.showOffers"
              class="px-4 my-2 gap-4 md:flex md:flex-row md:col-start-1 md:col-end-3"
            >
              <p class="md:w-4/12 w-full">
                {{ $t("Time") }}
                <span class="text-main-color pl-6">12.00.00</span>
              </p>
              <p class="md:w-4/12 w-full">
                {{ $t("Cost") }} <span class="text-main-color pl-6">5000</span>
              </p>
              <button class="mr-4 mt-2 md:w-2/12 text-main-color font-bold">
                {{ $t("Edit") }}
              </button>
              <button class="text-main-color md:w-2/12 font-bold">
                {{ $t("Delete") }}
              </button>
            </div>
          </div>
        </div>

        <div
          class="p-2 md:col-start-1 md:col-end-3 col-start-1 col-end-2 rounded-b-lg bg-[#EDEDED]"
        >
          <img
            src="../../assets/images/chevronbottom.png"
            alt="chevronbottom"
            loading="lazy"
            class="block mx-auto cursor-pointer"
            v-if="!Offer.showOffers"
            @click="showOfferDetails(Offer.id)"
          />
          <img
            src="../../assets/images/chevronbottom.png"
            alt="chevronbottom"
            loading="lazy"
            class="block mx-auto cursor-pointer rotate-180"
            v-if="Offer.showOffers"
            @click="showOfferDetails(Offer.id)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";

export default {
  name: "SellerOffers",
  data() {
    return {
      Offers: [
        {
          id: 1,
          user: "John Doe",
          date: "Due 12:00",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          OfferJobs: "Dentist",
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOffers: false,
        },
        {
          id: 2,
          user: "John Doe",
          date: "Due 12:00",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          OfferJobs: "Dentist",
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOffers: false,
        },
        {
          id: 3,
          user: "John Doe",
          date: "Due 12:00",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          OfferJobs: "Dentist",
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOffers: false,
        },
        {
          id: 4,
          user: "John Doe",
          date: "Due 12:00",
          location: "Riyadh, Riyadh, Saudi Arabia Saudi Arabia",
          OfferJobs: "Dentist",
          Requirments_Details: "Requirments-Details",
          Offer_Details: "Offer_Details",
          showOffers: false,
        },
      ],
    };
  },
  methods: {
    showOfferDetails(OfferID) {
      console.log(OfferID);
      let showDetails = this.Offers.map((offer) => {
        return offer.id == OfferID
          ? (offer.showOffers = !offer.showOffers)
          : "";
      });
      console.log(showDetails);
    },
  },
  components: {
    WelcomeMassage,
    InputSearch,
  },
};
</script>

<style></style>
