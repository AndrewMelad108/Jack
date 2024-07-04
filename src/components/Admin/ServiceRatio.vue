<template>
  <section class="ServiceRatio">
    <!-- <h1 class="text-lg">ServiceRatio</h1> -->
    <div class="ServiceRatio-content flex justify-end gap-5">
      <p v-if="showInput" class="bg-green-50 w-5/6 rounded-full py-2 px-4">
        {{ ratio }}%
      </p>
      <input
        v-else
        type="number"
        class="bg-green-50 w-5/6 rounded-full py-2 px-4"
        :placeholder="$t('enter your service ratio')"
        v-model="ratio"
      />
      <button
        class="w-1/6 bg-main-color text-white rounded-lg hover:bg-red-400 transition-all ease-in-out duration-300"
        @click="showInput = !showInput"
      >
        {{ $t("Edit") }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceRatio",
  data() {
    return {
      showInput: true,
      ratio: 5,
    };
  },
};
</script>

<style></style>
