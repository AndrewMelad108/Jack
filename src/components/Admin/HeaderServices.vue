<template>
  <section class="header-services items-center grid md:grid-cols-3 grid-cols-1">
    <WelcomeMassage
      name="admin"
      class="md:col-start-1 md:col-end-3 col-start-1 col-end-2"
    />
    <div class="ServiceRatio-content flex justify-end gap-5">
      <p v-if="showInput" class="bg-green-50 w-5/6 rounded-full py-2 px-4">
        {{ ratio }}%
      </p>
      <input
        v-else
        type="text"
        class="bg-green-50 focus:outline-0 border w-5/6 rounded-full py-2 px-4"
        :placeholder="$t('enter your service ratio')"
        v-model="ratio"
      />
      <button
        v-if="showInput"
        class="w-auto p-2 bg-main-color text-white rounded-lg hover:bg-red-400 transition-all ease-in-out duration-300"
        @click="showInput = false"
      >
        {{ $t("Edit") }}
      </button>
      <button
        v-else
        class="w-auto p-2 bg-main-color text-white rounded-lg hover:bg-red-400 transition-all ease-in-out duration-300"
        @click="updateCommision"
      >
        {{ $t("Update") }}
      </button>
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import { sendRequest } from "../../../axios";
export default {
  props: ["commision", "serviceId"],
  data() {
    return {
      ratio: null,
      showInput: true,
    };
  },
  created() {
    this.ratio = this.commision;
  },
  components: {
    WelcomeMassage,
  },
  methods: {
    updateCommision() {
      let successCallback = (res) => {
        if (res.data.success) {
          this.showInput = true;
        }
      };

      sendRequest(
        `Admin/ServiceCommision?id=${this.serviceId}&commision=${Number(
          this.ratio
        )}`,
        "put",
        null,
        false,
        successCallback,
        null
      );
    },
  },
};
</script>

<style></style>
