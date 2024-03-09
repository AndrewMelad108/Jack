<template>
  <section class="UserRequest pt-10 p-4">
    <!-- start header section -->
    <SwitchLang class="mb-4" />
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="User" />
      <InputSearch />
    </header>
    <!-- end header section -->

    <!-- start UserRequest section -->
    <div class="UserRequest">
      <div
        class="UserRequest-title capitalize grid md:grid-cols-3 grid-cols-2 gap-4 items-center text-lg my-10"
      >
        <h1 class="font-bold md:col-start-1 md:col-end-3 col-start-1 col-end-2">
          {{ $t("Your Requests") }}
        </h1>
        <h1 class="font-bold md:col-start-3 md:col-end-4 lg:block hidden">
          {{ $t("Offers") }}
        </h1>
      </div>
      <div class="UserRequest-content flex gap-4 lg:flex-nowrap flex-wrap">
        <div class="Request cursor-pointer lg:w-7/12 w-[100%] space-y-4">
          <div
            v-for="Request in Requests"
            :key="Request.index"
            class="rounded-xl min-h-48 p-4 bg-white"
            @click="showOffers(Request.name, Request.id)"
          >
            <h1 class="text-xl font-bold capitalize">
              {{ $t(Request.name) }}
            </h1>
            <p class="mt-4 text-text-color">
              {{ Request.Requestdes }}
            </p>
            <img
              :src="`https://jackfrontend-001-site1.etempurl.com/Images/${Request.image}`"
              alt="Request-image"
              loading="lazy"
              class="mt-4 w-10 h-10"
            />
            <p class="text-right font-bold">
              {{ Request.createdDate.split("T")[0] }}
            </p>
          </div>
        </div>
        <div class="Offer cursor-pointer mx-auto lg:w-4/12 w-[100%]">
          <h1 class="font-bold my-4 text-lg lg:hidden block">
            {{ $t("Offers") }}
          </h1>
          <div
            v-for="offer in Offers"
            :key="offer.id"
            class="Offers p-3 h-52 mb-5 bg-white rounded-xl"
          >
            <div class="flex gap-2">
              <img
                src="../../assets/images/1667831181-Group_1.png"
                alt="offer-image"
                class="rounded-full w-16 h-16"
              />
              <div class="Offer-name">
                <h1 class="font-bold mt-2">{{ offer.OfferName }}</h1>
                <p class="text-text-color my-2">
                  Services in Riyadh, Saudi Arabia
                </p>
                <router-link
                  class="text-text-color my-2 font-bold text-lg block"
                  :to="{
                    name: 'Provider.Profile Servies',
                  }"
                  >اندرو ميلاد</router-link
                >
              </div>
            </div>
            <div class="flex gap-4 Offer-details justify-center">
              <p class="text-text-color">
                {{ $t("Time") }}
                <span class="text-main-color px-2">12:00:00</span>
              </p>
              <p class="text-text-color">
                {{ $t("Cost") }} <span class="text-main-color px-2">50000</span>
              </p>
            </div>
            <button
              class="Offer-details-btn block mx-auto p-2 mt-2 text-main-color text-lg border border-main-color rounded-md hover:bg-main-color hover:text-white transition-all duration-300 ease-linear"
              @click="
                $router.push({
                  name: 'User.OfferDetails',
                  params: {
                    OfferID: 1,
                  },
                })
              "
            >
              {{ $t("More Detials") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import SwitchLang from "../../components/Shared/Form/SwitchLang.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";
import { sendRequest } from "../../../axios";
export default {
  name: "UserRequest",
  data() {
    return {
      showAllServices: false,
      Requests: [],
      Offers: [],
    };
  },
  mounted() {
    this.getServices();
  },
  methods: {
    getServices() {
      let successCallback = (res) => {
        this.Requests = res.data.data;
        console.log(this.Requests);
      };
      let errorCallback = (err) => {
        console.log(err);
      };

      sendRequest(
        `User/UserRequests`,
        "get",
        null,
        true,
        successCallback,
        errorCallback
      );
    },
    showOffers(RequestName, RequestId) {
      let successCallback = (res) => {
        this.Offers = res.data.data;
      };
      let errorCallback = (err) => {
        console.log(err);
      };

      sendRequest(
        `${RequestName}/offers?id=${RequestId}`,
        "get",
        null,
        true,
        successCallback,
        errorCallback
      );
    },
  },
  components: {
    WelcomeMassage,
    InputSearch,
    SwitchLang,
  },
};
</script>
