<template>
  <section class="AdminHome relative flex bg-cover-color md:flex-row flex-col">
    <SideBar :links="LinksData" :type="UserType" />
    <div
      class="bg-main-color py-2 px-10 w-[100%] h-12 md:hidden flex justify-between items-center"
    >
      <img
        src="../../assets//images/icons/menu.svg"
        class="h-8 cursor-pointer justify-self-start w-1/6"
        @click="showSidebar = !showSidebar"
        alt="menu-icon"
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
    <div class="h-[100%] w-full min-h-[100vh] p-4">
      <SwitchLang class="mb-3" />
      <router-view />
    </div>
  </section>
</template>

<script>
import SideBar from "../../components/Shared/SideBar.vue";
import SidebaPhone from "../../components/Shared/SidebaPhone.vue";
import SwitchLang from "../../components/Shared/Form/SwitchLang.vue";
export default {
  name: "AdminHome",
  data() {
    return {
      showSidebar: false,
      UserType: localStorage.getItem("role"),
      LinksData: [
        "Home",
        "Towing",
        "Repairing",
        "Spare Parts",
        "Baggage Transfer",
        "Delivery",
        "Selling Cars",
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
