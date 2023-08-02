<template>
  <section class="UserHome relative flex flex-wrap bg-cover-color md:flex-row">
    <SideBar :links="LinksData" />
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
    <div class="max-w-full p-10 w-auto h-screen">
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
      LinksData: [
        "Home",
        "ControlPanel",
        "Requests",
        "Chats",
        "Orders",
        "Wallet",
        "Profile",
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
