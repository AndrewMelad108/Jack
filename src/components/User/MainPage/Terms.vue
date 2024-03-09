<template>
  <section class="MainPage relative min-h-full">
    <UserHeader :checked="checkUser" />
    <UserHeaderPhone />
    <div class="mainPage-content min-h-[50vh] p-4 bg-gray-100">
      <div
        class="admin-terms capitalize bg-white p-2 rounded-lg shadow-md leading-7"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        cupiditate error quisquam omnis vitae doloremque harum mollitia tempora
        minus distinctio molestiae, deleniti officia facilis nulla nemo iure hic
        similique fugiat!
      </div>
      <div class="provider-terms mt-4" v-if="role === 'provider'">
        <textarea
          class="w-full h-28 shadow-md rounded-md resize-none focus:outline-0 p-2"
          placeholder="Enter your Terms and Conditions"
          v-model="providerTerms"
        ></textarea>
        <button
          @click="addTerms"
          class="mt-4 block w-24 mx-auto bg-main-color text-white p-2 rounded-md text-lg font-bold"
        >
          add
        </button>
      </div>
    </div>
    <UserFooter />
  </section>
</template>

<script>
import UserHeader from "@/components/User/MainPage/UserHeader.vue";
import UserHeaderPhone from "@/components/User/UserHeaderPhone.vue";
import UserFooter from "@/components/User/MainPage/UserFooter.vue";
export default {
  name: "Terms",
  data() {
    return { checkUser: true, providerTerms: "", role: "" };
  },
  created() {
    this.role = localStorage.getItem("role").toLowerCase();
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
    addTerms() {
      console.log("run");
    },
  },
};
</script>

<style></style>
