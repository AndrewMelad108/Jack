<template>
  <section class="MainPage relative min-h-full">
    <UserHeader :checked="checkUser" />
    <UserHeaderPhone />
    <div
      class="mainPage-content h-[50vh] flex justify-center items-center text-3xl bg-gray-300"
    >
      <h1>Testemonials</h1>
    </div>
    <UserFooter />
  </section>
</template>

<script>
import UserHeader from "@/components/User/MainPage/UserHeader.vue";
import UserHeaderPhone from "@/components/User/UserHeaderPhone.vue";
import UserFooter from "@/components/User/MainPage/UserFooter.vue";
export default {
  name: "Testemonials",
  data() {
    return { checkUser: true };
  },
  components: {
    UserHeader,
    UserFooter,
    UserHeaderPhone,
  },
  methods: {
    goHome() {
      this.$router.push({
        name: "LogIn",
      });
    },
  },
};
</script>

<style></style>
