<template>
  <section
    class="home min-w-[80vw] min-h-[100vh] p-8 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-start md:gap-16 gap-4"
  >
    <div
      class="bg-main-color shadow-2xl shadow-gray-500 rounded-lg p-6 flex flex-wrap text-center content-center items-center justify-center h-40 hover:text-main-color text-white hover:bg-white hover:shadow-xl hover:shadow-main-color cursor-pointer transition-all ease-in-out duration-500"
      v-for="item in data"
      :key="item.index"
    >
      <div class="text-center">
        <h3 class="text-3xl font-semibold">{{ item.name }}</h3>
        <p class="text-xl font-bold mt-2">{{ item.number }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AdminHome",
  data() {
    return {
      data: [
        {
          name: "Total Users",
          number: "122222",
        },
        {
          name: "Total Users",
          number: "122222",
        },
        {
          name: "Total Users",
          number: "122222",
        },
      ],
    };
  },
};
</script>

<style></style>
