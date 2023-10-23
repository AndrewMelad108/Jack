<template>
  <section class="UserProfile md:p-4 p-2">
    <SwitchLang />
    <WelcomeMassage name="User" />
    <div class="Form-user bg-white h-auto rounded-lg p-4 m-0">
      <h1 class="font-bold text-lg">{{ $t("personal information") }}</h1>
      <div class="mt-4 grid lg:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            v-validate="{ alpha: true, required: true }"
            name="FirstName"
            :placeholder="$t('First Name')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md"
            v-model.trim="person.FirstName"
          />
          <p class="text-red-400">{{ errors.first("FirstName") }}</p>
        </div>
        <div>
          <input
            type="text"
            v-validate="{ alpha: true, required: true }"
            name="LastName"
            :placeholder="$t('Last Name')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md"
            v-model.trim="person.LastName"
          />
          <p class="text-red-400">{{ errors.first("LastName") }}</p>
        </div>
        <div>
          <select
            v-validate="{ required: true }"
            name="Region"
            class="focus:outline-0 p-3 rounded-lg text-text-color bg-gray-100 w-full mx-auto"
            v-model="person.Region"
          >
            <option disabled selected value="">
              {{ $t("Select Region") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("Region") }}</p>
        </div>
        <div>
          <select
            v-validate="{ alpha: true, required: true }"
            name="City"
            v-model="person.City"
            class="placeholder:capitalize focus:outline-0 p-3 rounded-lg text-text-color bg-gray-100 w-full mx-auto"
          >
            <option disabled selected value="">
              {{ $t("Select City") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("City") }}</p>
        </div>
      </div>
      <h1 class="font-bold mt-4 text-lg">{{ $t("Contact information") }}</h1>
      <input
        v-model.trim="person.Number"
        v-validate="{ required: true, min: 11 }"
        name="Number"
        type="text"
        :placeholder="$t('Contact Number')"
        class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
      />
      <p class="text-red-400">{{ errors.first("Number") }}</p>
      <button
        class="w-full p-2 mt-10 text-white rounded-lg bg-main-color"
        @click="saveProfile"
      >
        {{ $t("Save changes") }}
      </button>
    </div>
  </section>
</template>

<script>
import SwitchLang from "../../components/Shared/Form/SwitchLang.vue";
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
export default {
  name: "UserProfile",
  data() {
    return {
      person: {
        imageUrl: "",
        FirstName: "",
        LastName: "",
        Region: "",
        City: "",
        Number: "",
      },
    };
  },
  components: {
    SwitchLang,
    WelcomeMassage,
  },
  methods: {
    saveProfile() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          console.log("run");
        } else {
          console.log("error");
        }
      });
    },
  },
};
</script>

<style></style>
