<template>
  <section
    class="home min-h-[100vh] items-start gap-4 content-start grid md:grid-cols-2 grid-cols-1"
  >
    <div
      class="bg-main-color shadow-2xl shadow-gray-500 rounded-lg flex flex-wrap text-center items-center justify-center h-40 hover:text-main-color text-white hover:bg-white hover:shadow-xl hover:shadow-main-color cursor-pointer transition-all ease-in-out duration-500"
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
