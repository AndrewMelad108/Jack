<template>
  <section class="UserChat md:px-12 p-4">
    <!-- start header section -->
    <SwitchLang />
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="User" />
    </header>
    <!-- end header section -->

    <!-- start Chat section -->
    <div
      class="Your_Chat mt-4 p-6 space-y-4 bg-white lg:w-[80%] w-full flex justify-center items-center flex-col rounded-2xl min-h-60"
    >
      <div
        v-for="chat in Chats"
        :key="chat.id"
        @click="goChat(chat.id)"
        class="border-r-2 border-b-2 w-full flex items-center cursor-pointer hover:border-2 hover:border-[#24C6C9] hover:bg-gray-100 rounded-[12px]"
      >
        <div class="image-chat">
          <img :src="chat.image" alt="chat_image" loading="lazy" />
        </div>
        <div class="chat-info w-full flex justify-between p-2">
          <div>
            <h1 class="md:text-lg">{{ chat.name }}</h1>
            <p class="text-text-color">{{ chat.des }}</p>
          </div>
          <span>{{ chat.dataActive }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import SwitchLang from "../../components/Shared/Form/SwitchLang.vue";
export default {
  name: "UserChat",
  data() {
    return {
      Chats: [
        {
          id: 1,
          image: require("../../assets/images/Ellipse_59.png"),
          name: "asd",
          des: "loremssssssssss",
          dataActive: "8min",
        },
        {
          id: 2,
          image: require("../../assets/images/Ellipse_59.png"),
          name: "asd2",
          des: "loremssssssssss",
          dataActive: "4min",
        },
        {
          id: 3,
          image: require("../../assets/images/Ellipse_59.png"),
          name: "asd3",
          des: "loremssssssssss",
          dataActive: "2min",
        },
      ],
    };
  },
  methods: {
    goChat(id) {
      this.$router.push({
        name: "User.ChatInfo",
        params: {
          chatId: id,
        },
      });
    },
  },
  components: {
    WelcomeMassage,
    SwitchLang,
  },
};
</script>

<style></style>
