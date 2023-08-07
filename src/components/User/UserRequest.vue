<template>
  <section class="UserRequest pt-10 md:px-8 px-2 py-4">
    <!-- start header section -->
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
            :key="Request.id"
            class="rounded-xl min-h-48 p-4 bg-white"
            @click="addRequest(Request.id)"
          >
            <h1 class="text-xl font-bold">{{ Request.RequestName }}</h1>
            <p class="mt-4 text-text-color">
              {{ Request.Requestdes }}
            </p>
            <img
              src="../../assets/images/1667831181-Group_1.png"
              alt="Request-image"
              loading="lazy"
              class="mt-4"
            />
            <p class="text-right font-bold">{{ Request.RequestDate }}</p>
          </div>
        </div>
        <div class="Offer cursor-pointer mx-auto lg:w-4/12 w-[100%]">
          <h1 class="font-bold my-4 text-lg lg:hidden block">
            {{ $t("Offers") }}
          </h1>
          <div
            v-for="offer in Offers"
            :key="offer.id"
            class="Offers p-4 h-52 mb-5 bg-white rounded-xl"
          >
            <div class="flex gap-2">
              <img
                src="../../assets/images/1667831181-Group_1.png"
                alt="offer-image"
                class="rounded-full"
              />
              <div>
                <h1 class="font-bold">{{ offer.OfferName }}</h1>
                <p class="text-text-color">Services in Riyadh, Saudi Arabia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";
export default {
  name: "UserRequest",
  data() {
    return {
      showAllServices: false,
      Requests: [
        {
          id: 1,
          RequestName: "Oil change",
          Requestdes: "This include the services related to the oil change",
          RequestDate: "2022-11-11",
        },
        {
          id: 2,
          RequestName: "Oil change",
          Requestdes: "This include the services related to the oil change",
          RequestDate: "2022-11-11",
        },
        {
          id: 3,
          RequestName: "Oil change",
          Requestdes: "This include the services related to the oil change",
          RequestDate: "2022-11-11",
        },
      ],
      Offers: [],
    };
  },
  methods: {
    addRequest(RequestId) {
      this.Offers.push({
        id: RequestId,
        OfferName: this.Requests[RequestId].RequestName,
        Offerdes: this.Requests[RequestId].Requestdes,
      });
    },
  },
  components: {
    WelcomeMassage,
    InputSearch,
  },
};
</script>

<style></style>
