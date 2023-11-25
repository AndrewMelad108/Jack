<template>
  <section class="SellerPolicy p-8 py-4">
    <!-- start header section -->
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="Seller" />
      <InputSearch />
    </header>
    <!-- end header section -->

    <!-- start orders section -->
    <div class="Your_Policy">
      <div
        class="capitalize flex justify-between items-center text-lg my-10"
      ></div>
    </div>
    <div class="space-y-6">
      <textarea
        readonly
        v-model="adminPolicy"
        class="w-full text-xl font-bold leading-10 p-4 resize-none h-48 shadow-md shadow-slate-400 rounded-md focus:outline-none"
      ></textarea>
      <textarea
        v-model="sellerPolicy"
        v-validate="{ alpha: true, required: true }"
        name="sellerPolicy"
        class="w-full text-xl font-bold leading-10 p-4 resize-none h-48 shadow-md shadow-slate-400 rounded-md focus:outline-none"
      ></textarea>
      <span class="text-red-400">{{ errors.first("sellerPolicy") }}</span>
      <button
        @click="addsellerPolicy"
        class="bg-main-color w-full font-bold border-2 md:text-xl text-sm text-white p-1 md:px-3 md:py-2 rounded-lg"
      >
        {{ $t("Add") }}
      </button>
    </div>
  </section>
</template>
<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";
export default {
  name: "SellerPolicy",
  data() {
    return {
      adminPolicy:
        "تشمل سياسات البيع للسيارات في العديد من البلدان العربية متطلبات معينة لتسجيل المركبات، وضريبة القيمة المضافة، وفحوصات السلامة، وشروط الضمان. بالإضافة إلى ذلك، تنص على واجب البائع تقديم معلومات دقيقة وشفافة حول حالة السيارة المعروضة للبيع",
      sellerPolicy: "",
    };
  },
  methods: {
    addsellerPolicy() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          //block
        }
      });
    },
  },
  components: {
    WelcomeMassage,
    InputSearch,
  },
};
</script>

<style></style>
