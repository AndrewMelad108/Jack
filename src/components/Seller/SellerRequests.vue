<template>
  <section class="md:p-4 p-2">
    <div class="capitalize flex justify-between text-md my-10">
      <h1 class="font-bold">{{ $t("Services in Riyadh, Saudi Arabia") }}</h1>
    </div>
    <SellerRequestsList :Requests="Requests" />
  </section>
</template>

<script>
import SellerRequestsList from "../../components/Seller/SellerRequestsList.vue";
import { sendRequest } from "../../../axios";
export default {
  name: "RequestsList",
  data() {
    return {
      Requests: [],
    };
  },
  created() {
    this.getServices();
  },
  methods: {
    getServices() {
      let successCallback = (res) => {
        this.Requests = res.data.data;
      };
      let errorCallback = (err) => {
        console.log(err);
      };

      sendRequest(
        `User/ApplicableRequests`,
        "get",
        null,
        true,
        successCallback,
        errorCallback
      );
    },
  },
  components: { SellerRequestsList },
};
</script>
