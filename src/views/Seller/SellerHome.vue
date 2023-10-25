<template>
  <section
    class="SellerHome relative min-h-[100vh] flex md:flex-row flex-col bg-cover-color"
  >
    <SideBar :links="LinksData" :type="UserType" />
    <div
      class="bg-main-color py-2 px-10 w-[100%] h-12 md:hidden flex justify-between items-center"
    >
      <img
        src="../../assets//images/icons/menu.svg"
        class="h-8 cursor-pointer justify-self-start w-1/6"
        @click="showSidebar = !showSidebar"
        alt=""
        loading="lazy"
      />
      <SidebaPhone
        :links="LinksData"
        :closeSidebar="showSidebar"
        v-if="showSidebar"
        :type="UserType"
        @changeCloseSidebarValue="showSidebar = !showSidebar"
      />
      <div class="logo-header-md w-11/12 pl-[30%]">
        <img
          src="../../assets/images/logo.png"
          class="h-8"
          alt="logo-menu"
          loading="lazy"
        />
      </div>
    </div>
    <div class="h-[100%] min-h-[100vh] w-full">
      <SwitchLang class="m-4" />

      <router-view />
    </div>
  </section>
</template>

<script>
import SideBar from "../../components/Shared/SideBar.vue";
import SidebaPhone from "../../components/Shared/SidebaPhone.vue";
import SwitchLang from "../../components/Shared/Form/SwitchLang.vue";

export default {
  name: "UserHome",
  data() {
    return {
      showSidebar: false,
      UserType: localStorage.getItem("role"),
      LinksData: [
        "Home",
        "Requests",
        "Requested orders",
        "Requested service",
        "Offers",
        "Orders",
        "Chats",
        "Wallet",
        "Profile",
        "Profile Servies",
        "Policy",
      ],
    };
  },
  components: {
    SideBar,
    SidebaPhone,
    SwitchLang,
  },
};
</script>

<style></style>
