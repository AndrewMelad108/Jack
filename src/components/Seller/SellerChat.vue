<template>
  <section class="SellerChat p-4">
    <WelcomeMassage name="Seller" class="mb-4" />
    <div class="grid lg:grid-cols-2 w-full grid-cols-1 gap-4 lg:px-12">
      <div class="bg-white p-4 rounded-2xl">
        <ChatsList />
      </div>
      <div class="bg-white p-4 rounded-2xl">
        <ChatInfo />
      </div>
    </div>
  </section>
</template>

<script>
import ChatsList from "@/components/Seller/ChatList.vue";
import ChatInfo from "@/components/User/ChatInfo.vue";
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
export default {
  name: "SellerChat",
  data() {
    return {};
  },
  components: {
    ChatsList,
    ChatInfo,
    WelcomeMassage,
  },
};
</script>

<style></style>
