<template>
  <div class="bg-gray-100 md:w-[80%] p-6 w-full mx-auto mt-32">
    <div v-for="chat in chatData" :key="chat.id">
      <div class="bg-white rounded-[12px]">
        <div class="flex p-5 mb-5">
          <img class="mr-5" src="../../assets/images/Ellipse_59.png" alt="" />

          <div>
            <div class="flex justify-between">
              <div>
                <h1 class="text-lg">{{ chat.name }}</h1>
              </div>
            </div>
            <div>
              <h1 class="text-green-400 text-lg">Online</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-[20px] mt-5 p-5">
        <div v-for="message in chat.messages" :key="message.id">
          <div
            :class="{
              'flex justify-end': message.sender_id === user,
              'flex justify-start': message.sender_id !== user,
            }"
          >
            <h1
              :class="{
                'text-white bg-main-color rounded-tr-[30px] rounded-bl-[30px] rounded-tl-[30px] border-r-2 border-b-2 py-2 px-4 my-2':
                  message.sender_id === user,
                'text-text-color bg-white rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px] border-r-2 border-b-2 py-2 px-4 my-2':
                  message.sender_id !== user,
              }"
            >
              {{ message.text }}
            </h1>
          </div>
        </div>

        <div>
          <form @submit.prevent="submitMessage(chat.id)">
            <div class="flex">
              <input
                v-model="newMessage"
                class="focus:ring-[#24C6C9] focus:border-[#24C6C9] block w-full shadow-sm sm:text-sm text-[#3A3A3A] border-gray-100 rounded-md py-2 px-3"
                type="text"
                name="message"
                placeholder="Write Message"
              />
              <div class="relative right-8 flex items-center">
                <button type="submit">
                  <img
                    class="w-[26px] h-[22px]"
                    src="../../assets/images/Vector_(2).png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

//
<script>
// import io from "socket.io-client";

export default {
  data() {
    return {
      socket: null,
      user: "user123", // معرّف المستخدم الحالي
      chatData: [
        {
          id: "seller123", // معرّف البائع
          name: "Seller Name",
          messages: [
            // الرسائل تُمثّل هنا
          ],
        },
      ],
      newMessage: "",
    };
  },
  // created() {
  //   this.socket = io("http://localhost:5000"); // تغيير URL إلى URL الخادم الخاص بك
  //   this.socket.on("message", (data) => {
  //     this.handleIncomingMessage(data);
  //   });
  // },
  // methods: {
  //   submitMessage(chatId) {
  //     const messageData = {
  //       sender_id: this.user,
  //       text: this.newMessage,
  //       timestamp: new Date().toISOString(),
  //     };
  //     this.socket.emit("message", { chatId, messageData });
  //     this.newMessage = "";
  //     this.handleIncomingMessage({ chatId, ...messageData });
  //   },
  //   handleIncomingMessage(data) {
  //     const chatIndex = this.chatData.findIndex(
  //       (chat) => chat.id === data.chatId
  //     );
  //     if (chatIndex !== -1) {
  //       this.chatData[chatIndex].messages.push(data);
  //     }
  //   },
  // },
};
</script>
