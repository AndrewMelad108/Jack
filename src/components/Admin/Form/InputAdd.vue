<template>
  <section class="InputAdd flex justify-between my-4">
    <input
      type="text"
      class="bg-green-50 w-5/6 placeholder:text-text-color placeholder:text-md rounded-lg py-2 px-4 placeholder:capitalize focus:border-0 focus:outline-none"
      :placeholder="$t('enter your options')"
      v-model.trim="option"
    />
    <button
      class="w-1/6 bg-main-color font-bold text-white rounded-lg hover:bg-red-400 transition-all ease-in-out duration-300"
      @click="AddOptions()"
    >
      {{ $t("Add") }}
    </button>
  </section>
</template>

<script>
export default {
  name: "InputAdd",
  data() {
    return {
      option: "",
    };
  },
  methods: {
    AddOptions() {
      this.$emit("AddOptions", this.option);
      this.option = "";
    },
  },
};
</script>

<style></style>
