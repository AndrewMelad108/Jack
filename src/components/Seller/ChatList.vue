<template>
  <section class="UserChat p-4">
    <!-- start header section -->

    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <h1 class="py-2 text-lg">{{ $t("Chats") }}</h1>
    </header>
    <!-- end header section -->

    <!-- start Chat section -->
    <div
      class="Your_Chat mt-4 space-y-4 w-full bg-white flex justify-center items-center flex-col rounded-2xl min-h-60"
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
        {
          id: 4,
          image: require("../../assets/images/Ellipse_59.png"),
          name: "asd",
          des: "loremssssssssss",
          dataActive: "8min",
        },
        {
          id: 5,
          image: require("../../assets/images/Ellipse_59.png"),
          name: "asd2",
          des: "loremssssssssss",
          dataActive: "4min",
        },
        {
          id: 6,
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
      console.log(id);
      //   this.$router.push({
      //     name: "User.ChatInfo",
      //     params: {
      //       chatId: id,
      //     },
      //   });
    },
  },
};
</script>

<style></style>
