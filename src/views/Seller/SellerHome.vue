<template>
  <section
    class="UserHome relative min-h-[100vh] flex md:flex-row flex-col bg-cover-color"
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
    <div class="max-w-full w-screen min-h-full">
      <router-view />
    </div>
  </section>
</template>

<script>
import SideBar from "../../components/Shared/SideBar.vue";
import SidebaPhone from "../../components/Shared/SidebaPhone.vue";
export default {
  name: "UserHome",
  data() {
    return {
      showSidebar: false,
      UserType: "Seller",
      LinksData: [
        "Home",
        "ControlPanel",
        "Requests",
        "Offers",
        "Orders",
        "Wallet",
        "Profile",
        "Profile Servies",
        "Logout",
      ],
    };
  },
  components: {
    SideBar,
    SidebaPhone,
  },
  methods: {
    // toggleSidebar() {
    //   this.isSidebarVisible = !this.isSidebarVisible;
    // },
  },
};
</script>

<style></style>
