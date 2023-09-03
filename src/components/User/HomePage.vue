<template>
  <section class="HomePage">
    <UserHeader :checked="checkUser" />
    <UserHeaderPhone />
    <SwitchLang class="md:hidden block m-4" />
    <div
      class="bg-main-color min-h-20 w-full flex flex-warp content-center p-4 text-center"
    >
      <div
        class="w-[70%] mx-auto flex gap-10 capitalize justify-center text-white font-bold text-xl md:flex-row flex-col items-center"
      >
        <router-link to="Profile">{{ $t("Profile") }}</router-link>
        <router-link to="Orders">{{ $t("Orders") }}</router-link>
        <router-link to="Request">{{ $t("Requests") }}</router-link>
        <router-link to="Chat">{{ $t("Chats") }}</router-link>
        <router-link to="Wallet">{{ $t("Wallet") }}</router-link>
      </div>
    </div>
    <div
      class="payment-methods grid md:grid-cols-6 space-y-5 grid-cols-2 justify-around items-center py-4"
    >
      <img
        src="../../assets/images/Companies/transfer_6.png"
        alt="transfer"
        loading="lazy"
        class="h-200 w-20 mx-auto"
      />
      <img
        src="../../assets/images/Companies/transfer_5.png"
        alt="transfer"
        loading="lazy"
        class="h-20 w-20 mx-auto"
      />
      <img
        src="../../assets/images/Companies/transfer_4.png"
        alt="transfer"
        loading="lazy"
        class="h-20 w-20 mx-auto"
      />
      <img
        src="../../assets/images/Companies/transfer_3.png"
        alt="transfer"
        loading="lazy"
        class="h-20 w-20 mx-auto"
      />
      <img
        src="../../assets/images/Companies/transfer_2.png"
        alt="transfer"
        loading="lazy"
        class="h-20 w-20 mx-auto"
      />
      <img
        src="../../assets/images/Companies/transfer_1.png"
        alt="transfer"
        loading="lazy"
        class="h-20 w-20 mx-auto"
      />
    </div>
    <div
      class="Credit-Card grid md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center md:px-20 px-4 py-10 my-4"
    >
      <div class="input-filed space-y-4">
        <label for="FullName" class="block font-bold text-xl">{{
          $t("Full Name:")
        }}</label>
        <input
          type="text"
          disabled
          class="p-4 bg-gray-200 md:w-[80%] text-black rounded-lg w-full placeholder:text-black placeholder:text-xl placeholder:font-bold"
          placeholder="Anddrew Melad Dawood"
        />
      </div>
      <div class="input-filed space-y-4">
        <label for="Card Number" class="block font-bold text-xl">{{
          $t("Card Number:")
        }}</label>
        <input
          type="text"
          disabled
          class="p-4 bg-gray-200 md:w-[80%] text-black rounded-lg w-full placeholder:text-black placeholder:text-xl placeholder:font-bold"
          placeholder="1275156892312231"
        />
      </div>
      <div class="input-filed space-y-4">
        <label for="End Data" class="block font-bold text-xl">{{
          $t("End Data:")
        }}</label>
        <input
          type="text"
          disabled
          class="p-4 bg-gray-200 md:w-[80%] text-black rounded-lg w-full placeholder:text-black placeholder:text-xl placeholder:font-bold"
          placeholder="2027-10-05"
        />
      </div>
      <div class="input-filed space-y-4">
        <label for="FullName" class="block font-bold text-xl">{{
          $t("Confirmation Number:")
        }}</label>
        <input
          type="text"
          disabled
          class="p-4 bg-gray-200 md:w-[80%] text-black rounded-lg w-full placeholder:text-black placeholder:text-xl placeholder:font-bold"
          placeholder="1275"
        />
      </div>
    </div>
    <div class="flex w-full justify-center my-4 p-4 items-center gap-4">
      <h1 class="md:text-4xl text-xl md:w-80 w-auto">
        {{ $t("these information is not shown to other") }}
      </h1>
      <img src="../../assets/images/Companies/lock.png" alt="" loading="lazy" />
    </div>
    <servicesFeature />
    <div class="md:w-[50%] p-4 w-full my-8 mx-auto">
      <tradeMark />
    </div>
    <UserFooter />
  </section>
</template>

<script>
import SwitchLang from "../../components/Shared/Form/SwitchLang.vue";
import tradeMark from "../../components/Shared/tradeMark.vue";
import UserHeader from "@/components/User/MainPage/UserHeader.vue";
import UserHeaderPhone from "@/components/User/UserHeaderPhone.vue";
import servicesFeature from "@/components/User/MainPage/Services.vue";
import UserFooter from "@/components/User/MainPage/UserFooter.vue";
export default {
  name: "HomePage",
  data() {
    return { checkUser: false };
  },
  components: {
    UserHeader,
    UserHeaderPhone,
    UserFooter,
    servicesFeature,
    SwitchLang,
    tradeMark,
  },
};
</script>

<style></style>
