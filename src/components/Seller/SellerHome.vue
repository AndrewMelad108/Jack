<template>
  <section class="HomePage">
    <UserHeader :checked="checkUser" />
    <UserHeaderPhone />
    <div
      class="bg-main-color min-h-20 w-full flex flex-warp content-center p-4 text-center"
    >
      <div
        class="Seller-Nav w-[70%] mx-auto flex gap-10 capitalize justify-center text-white font-bold text-xl md:flex-row flex-col items-center"
      >
        <router-link :to="{ name: 'Seller.Profile Servies' }">{{
          $t("Profile Services")
        }}</router-link>
        <router-link :to="{ name: 'Seller.Profile' }">{{
          $t("Profile")
        }}</router-link>
        <router-link :to="{ name: 'Seller.Orders' }">{{
          $t("Orders")
        }}</router-link>
        <router-link :to="{ name: 'Seller.Offers' }">{{
          $t("Offers")
        }}</router-link>
        <router-link :to="{ name: 'Seller.Requests' }">{{
          $t("Requests")
        }}</router-link>
        <router-link :to="{ name: 'Seller.Chats' }">{{
          $t("Chats")
        }}</router-link>

        <router-link :to="{ name: 'Seller.Wallet' }">{{
          $t("Wallet")
        }}</router-link>
      </div>
    </div>
    <div class="intro-page mb-16 mt-4 text-xl font-bold h-auto w-full">
      <div>
        <h1 class="text-2xl text-center">{{ $t("Hello") }} Jack</h1>
        <span
          class="block bg-main-color rounded-2xl w-24 mt-2 mx-auto h-2"
        ></span>
      </div>
      <div
        class="grid md:grid-cols-3 grid-cols-1 mt-2 gap-4 w-full mx-auto h-[100%]"
      >
        <h1 class="text-center md:mb-0 mb-4">{{ $t("Provided Services") }}</h1>
        <div class="Seller-name flex items-center justify-around">
          <img
            src="../../assets/images/Servies/spare_parts.png"
            alt="spare_parts"
            class="md:h-20 h-16 cursor-pointer"
            loading="lazy"
            @click="goServices('Seller.Requested service')"
          />
          <img
            src="../../assets/images/Servies/delivery_services.png"
            alt="delivery_services"
            class="md:h-20 h-16 cursor-pointer"
            loading="lazy"
            @click="goServices('Seller.Requested orders')"
          />
        </div>
        <div class="text-center">
          <h1 class="">{{ $t("Helper Services") }}</h1>
          <div class="flex justify-center items-center gap-4 mt-3">
            <img
              src="../../assets/images/icons/icon_1.png"
              alt=""
              class="h-16"
            />
            <img
              src="../../assets/images/icons/icon_3.png"
              alt=""
              class="h-16"
            />
            <img
              src="../../assets/images/icons/icon_2.png"
              alt=""
              class="h-16"
            />
            <img
              src="../../assets/images/Servies/shipping_and_forwarding.png"
              alt=""
              class="h-16"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 lg:flex hidden w-[90%] mx-auto max-h-[300px] md:gap-4">
      <div
        class="h-52 w-3/12 px-2 content-center bg-gray-100 rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <h1 class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("Balance (SAR)") }}
        </h1>
        <p class="mt-16 text-main-color font-bold text-4xl">1234</p>
      </div>
      <div
        class="h-52 w-3/12 px-2 content-center bg-gray-100 rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <h1 class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("Pending Orders") }}
        </h1>
        <p class="mt-16 text-main-color font-bold text-4xl">03</p>
      </div>
      <div
        class="h-52 w-3/12 px-2 bg-gray-100 content-centerbg-gray-100 rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <h1 class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("New Requests") }}
        </h1>
        <p class="mt-16 text-main-color font-bold text-4xl">12</p>
      </div>
      <div
        class="h-52 w-3/12 px-2 content-center bg-gray-100 rounded-xl capitalize text-center font-boldx 2 py-6"
      >
        <h1 class="w-22 break-words md:text-lg sm:text-sm">
          {{ $t("Unread Messages") }}
        </h1>
        <p class="mt-16 text-main-color font-bold text-4xl">123</p>
      </div>
    </div>
    <div
      class="image-home my-8 grid md:grid-cols-5 grid-cols-3 items-center justify-center text-center w-[90%] mx-auto"
    >
      <img
        src="../../assets/images/Companies/c_1.png"
        alt=""
        class="block mx-auto"
        loading="lazy"
      />
      <img
        src="../../assets/images/Companies/c_2.png"
        alt=""
        class="block mx-auto"
        loading="lazy"
      />
      <img
        src="../../assets/images/Companies/c_3.png"
        alt=""
        class="block mx-auto"
        loading="lazy"
      />
      <img
        src="../../assets/images/Companies/c_4.png"
        alt=""
        class="block mx-auto"
        loading="lazy"
      />
      <img
        src="../../assets/images/Companies/c_5.png"
        alt=""
        class="block mx-auto"
        loading="lazy"
      />
      <img
        src="../../assets/images/Companies/c_6.png"
        alt=""
        class="block mx-auto"
        loading="lazy"
      />
      <img
        src="../../assets/images/Companies/c_7.png"
        alt=""
        class="block mx-auto"
        loading="lazy"
      />
      <img
        src="../../assets/images/Companies/c_8.png"
        alt=""
        class="block mx-auto"
        loading="lazy"
      />
      <img
        src="../../assets/images/Companies/c_9.png"
        alt=""
        class="block mx-auto"
        loading="lazy"
      />
      <img
        src="../../assets/images/Companies/c_10.png"
        alt=""
        class="block mx-auto"
        loading="lazy"
      />
    </div>
    <div
      class="card-details my-12 grid md:grid-cols-3 grid-cols-1 items-center gap-4 justify-around w-[90%] mx-auto"
    >
      <div class="md:col-start-1 md:col-end-3 flex gap-2 items-center">
        <div class="icons space-y-8">
          <img
            src="../../assets/images/Companies/c_10.png"
            alt=""
            loading="lazy"
          />
          <img
            src="../../assets/images/Companies/c_10.png"
            alt=""
            loading="lazy"
          />
          <img
            src="../../assets/images/Companies/c_10.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="numbers space-y-4 md:text-lg text-sm md:w-[50%] w-full">
          <p class="bg-gray-100 p-4 text-center rounded-xl w-full">
            1275 1569 2561 2378 1283
          </p>
          <p class="bg-gray-100 p-4 text-center rounded-xl w-full">
            1275 1569 2561 2378 1283
          </p>
          <p class="bg-gray-100 p-4 text-center rounded-xl w-full">
            1275 1569 2561 2378 1283
          </p>
        </div>
        <div class="icons space-y-8">
          <img
            src="../../assets/images/Companies/c_10.png"
            alt=""
            loading="lazy"
          />
          <img
            src="../../assets/images/Companies/c_10.png"
            alt=""
            loading="lazy"
          />
          <img
            src="../../assets/images/Companies/c_10.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div
        class="md:col-start-3 md:col-end-4 grid w-full grid-cols-2 justify-center items-center gap-4"
      >
        <h1>{{ $t("these information is not shown to other") }}</h1>
        <img
          src="../../assets/images/Companies/lock.png"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
    <workHours />
    <div class="bg-gray-100 h-[600px] py-8">
      <img
        src="../../assets/images/image_slider.png"
        alt="image_slider"
        class="w-[70%] mt-2 h-full block rounded-lg mx-auto bg-cover bg-center"
      />
    </div>
    <div class="grid md:grid-cols-2 min-h-[400px] grid-cols-1 gap-4 p-4">
      <div class="card-info space-y-4">
        <div
          class="border border-main-color flex items-center h-20 p-4 rounded-xl"
        >
          <span class="font-bold"> {{ $t("Card Number:") }}</span> 1111 2222
          3333 4444
        </div>
        <label
          v-if="cardFace == ''"
          for="card-photo"
          class="border h-80 cursor-pointer flex justify-center items-center rounded-xl border-dotted border-text-color"
        >
          <img
            src="../../assets/images/add-alt.png"
            alt="add-alt"
            loading="lazy"
          />
          <input type="file" class="hidden" id="card-photo" />
        </label>
        <div v-else class="image-photo h-80">
          <img :src="cardFace" alt="" />
        </div>
      </div>
      <tradeMark />
    </div>
    <UserFooter />
  </section>
</template>

<script>
import UserHeader from "@/components/User/MainPage/UserHeader.vue";
import UserHeaderPhone from "@/components/User/UserHeaderPhone.vue";
import workHours from "@/components/Seller/workHours.vue";
import tradeMark from "@/components/Shared/tradeMark.vue";
import UserFooter from "@/components/User/MainPage/UserFooter.vue";
export default {
  name: "HomePage",
  data() {
    return { checkUser: false, cardFace: "" };
  },
  components: {
    UserHeader,
    UserHeaderPhone,
    workHours,
    tradeMark,
    UserFooter,
  },
  methods: {
    goServices(value) {
      this.$router.push({
        name: value,
      });
    },
  },
};
</script>

<style></style>
