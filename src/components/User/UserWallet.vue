<template>
  <section class="UserWallet md:p-8 p-4">
    <SwitchLang class="mb-3" />
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="User" />
      <InputSearch />
    </header>
    <div
      class="UserWallet-content mt-10 grid lg:grid-cols-3 grid-cols-1 md:gap-6 gap-2"
    >
      <div
        class="Wallet-info md:col-start-1 md:col-end-2 col-start-1 col-end-2"
      >
        <h1 class="Salary md:text-4xl text-xl py-2 text-main-color font-bold">
          SAR 11,231
        </h1>
        <div class="flex items-center justify-between py-6">
          <button class="bg-main-color text-white p-4 rounded-lg">
            Top Up
          </button>
          <button class="text-lg text-main-color">Withdraw</button>
        </div>
        <p class="text-lg py-4">cards</p>
      </div>
      <div
        class="Transactions-list space-y-4 lg:col-start-2 lg:col-end-4 col-start-1 col-end-2"
      >
        <div
          v-for="Transaction in Transactions"
          :key="Transaction.id"
          class="md:w-[80%] w-full ml-auto cursor-pointer flex items-center hover:border hover:border-1 hover:border-main-color bg-white rounded-xl p-4"
        >
          <div class="transaction-type md:w-2/12">
            <img
              src="../../assets/images/minus-circle-line.png"
              alt="transaction-type"
              loading="lazy"
              class="sm:w-16 text-center"
              v-if="Transaction.type === 'outside'"
            />
            <img
              src="../../assets/images/add-green-alt.png"
              alt="transaction-type"
              loading="lazy"
              class="sm:w-16 text-center"
              v-else
            />
          </div>
          <div class="transaction-info md:w-7/12 w-full text-center">
            <h1 class="md:text-xl py-1">{{ Transaction.name }}</h1>
            <span class="text-text-color md:px-6">{{ Transaction.date }}</span>
            <span class="text-text-color sm:px-0 px-4">{{
              Transaction.time
            }}</span>
          </div>
          <div class="transaction-price md:w-2/12 text-center">
            <h1 class="sm:text-2xl text-sm uppercase">sar</h1>
            <p class="">{{ Transaction.salary }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SwitchLang from "../../components/Shared/Form/SwitchLang.vue";
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";
export default {
  name: "UserWallet",
  data() {
    return {
      Transactions: [
        {
          id: 1,
          name: "Moj Shipping Service",
          salary: "231",
          date: "12/02/2022",
          time: "11:23 AM",
          type: "inside",
        },
        {
          id: 2,
          name: "Moj Shipping Service",
          salary: "22",
          date: "12/02/2022",
          time: "11:23 AM",
          type: "outside",
        },
        {
          id: 3,
          name: "Moj Shipping Service",
          salary: "442",
          date: "12/02/2022",
          time: "11:23 AM",
          type: "outside",
        },
        {
          id: 3,
          name: "Moj Shipping Service",
          salary: "125",
          date: "12/02/2022",
          time: "11:23 AM",
          type: "inside",
        },
        {
          id: 3,
          name: "Moj Shipping Service",
          salary: "22",
          date: "12/02/2022",
          time: "11:23 AM",
          type: "outside",
        },
        {
          id: 1,
          name: "Moj Shipping Service",
          salary: "231",
          date: "12/02/2022",
          time: "11:23 AM",
          type: "inside",
        },
        {
          id: 2,
          name: "Moj Shipping Service",
          salary: "22",
          date: "12/02/2022",
          time: "11:23 AM",
          type: "outside",
        },
        {
          id: 3,
          name: "Moj Shipping Service",
          salary: "442",
          date: "12/02/2022",
          time: "11:23 AM",
          type: "outside",
        },
        {
          id: 3,
          name: "Moj Shipping Service",
          salary: "125",
          date: "12/02/2022",
          time: "11:23 AM",
          type: "inside",
        },
        {
          id: 3,
          name: "Moj Shipping Service",
          salary: "22",
          date: "12/02/2022",
          time: "11:23 AM",
          type: "outside",
        },
      ],
    };
  },
  components: {
    SwitchLang,
    WelcomeMassage,
    InputSearch,
  },
};
</script>

<style></style>
