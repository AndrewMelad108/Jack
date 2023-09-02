<template>
  <section class="UserOrders md:px-12 px-4 py-4">
    <Modal
      v-if="!showModal"
      class="bg-main-color grid grid-cols-5 p-10 content-center justify-center text-white shadow-xl shadow-slate-400 md:w-[400px] w-[90%] h-[200px] top-[30%] rounded-xl left-[50%] translate-x-[-50%] translate-y-[-50%] absolute z-[999999] text-5xl"
      :show="showModal"
      @close="closeModal($event)"
    />
    <!-- start header section -->
    <SwitchLang />
    <header
      class="grid md:grid-cols-2 grid-cols-1 items-start justify-between my-4"
    >
      <WelcomeMassage name="User" />
      <InputSearch />
    </header>
    <!-- end header section -->

    <!-- start orders section -->
    <div class="Your_orders">
      <div class="capitalize flex justify-between items-center text-lg my-10">
        <h1 class="font-bold">{{ $t("Your Orders") }}</h1>
        <span
          class="cursor-pointer text-text-color"
          @click="
            $router.push({
              name: 'User.Orders',
            })
          "
          >{{ $t("See All") }}</span
        >
      </div>
      <UserOrdersList @userRate="userRate" />
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";
import UserOrdersList from "@/components/User/UserOrdersList.vue";
import SwitchLang from "../../components/Shared/Form/SwitchLang.vue";
import Modal from "@/components/Shared/Modal.vue";

export default {
  name: "UserOrders",
  data() {
    return {
      showAllServices: false,
      showModal: true,
      rate: null,
    };
  },
  components: {
    WelcomeMassage,
    InputSearch,
    UserOrdersList,
    SwitchLang,
    Modal,
  },
  methods: {
    closeModal(value) {
      this.showModal = !this.showModal;
      this.rate = value;
      console.log(this.rate);
    },
    userRate() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style></style>
