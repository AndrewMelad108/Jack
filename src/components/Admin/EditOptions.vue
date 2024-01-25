<template>
  <div
    class="Model fixed inset-0 flex justify-center items-center h-full w-full"
  >
    <div class="model-content w-[40%] h-44 bg-main-color rounded-lg p-4">
      <div class="header-model text-white font-bold flex justify-between">
        <h1>Edit Option</h1>
        <button @click="close" class="mb-5 font-bold cursor-pointer">X</button>
      </div>
      <input
        type="text"
        placeholder="Enter your option"
        v-model.trim="option"
        class="w-full block bg-transparent border mb-4 border-black rounded-md p-1 focus:outline-0 text-white"
      />
      <button
        @click="updateOptions"
        class="block bg-white rounded-md text-black p-2 w-20 mx-auto"
      >
        Update
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "EditOptionModel",
  props: ["editOptions"],
  data() {
    return {
      option: "",
    };
  },
  created() {
    this.option = this.editOptions.value;
  },
  methods: {
    close() {
      this.$emit("close");
    },
    updateOptions() {
      this.$emit("updateOptions", {
        id: this.editOptions.id,
        value: this.option,
      });
    },
  },
};
</script>
<style>
.Model {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
