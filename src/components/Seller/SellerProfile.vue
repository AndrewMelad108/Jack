<template>
  <section class="SelllerProfile md:px-6 px-2">
    <WelcomeMassage name="Selller" />
    <div
      class="Form-Seller bg-white min-h-[600px] h-auto rounded-lg md:p-6 p-2"
    >
      <div class="group-btn mb-4 flex gap-4">
        <button
          @click="personalData = true"
          :class="{ 'bg-main-color text-white ': personalData }"
          class="p-4 w-32 inline-block rounded-lg text-lg font-bold bg-gray-200 text-black capitalize"
        >
          {{ $t("general") }}
        </button>
        <button
          :class="{ 'bg-main-color text-white ': !personalData }"
          @click="personalData = false"
          class="p-4 w-32 inline-block rounded-lg text-lg font-bold bg-gray-200 capitalize"
        >
          {{ $t("other") }}
        </button>
      </div>
      <h1 class="font-bold text-lg">{{ $t("personal information") }}</h1>
      <div v-if="personalData" class="personal-data grid lg:grid-cols-2 gap-4 mt-4">
        <div>
          <input
            type="text"
            v-validate="{ alpha: true, required: true }"
            name="FirstName"
            :placeholder="$t('First Name')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md"
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
          />
          <p class="text-red-400">{{ errors.first("LastName") }}</p>
        </div>
        <div>
          <select
            v-validate="{ required: true }"
            name="Region"
            class="focus:outline-0 p-3 rounded-lg text-text-color bg-gray-100 w-full mx-auto"
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
        <h1 class="font-bold mt-2 text-lg lg:col-span-2 col-span-1">
          {{ $t("Contact information") }}
        </h1>
        <div>
          <input
            v-validate="{ required: true, email: true }"
            name="Email"
            type="Email"
            :placeholder="$t('enter email')"
            class="placeholder:text-text-color placeholder:capitalize bg-gray-100 w-full p-3 rounded-md"
          />
          <p class="text-red-400">{{ errors.first("Email") }}</p>
        </div>
        <div>
          <input
            type="text"
            v-validate="{ required: true, min: 11 }"
            name="Number"
            :placeholder="$t('Contact Number')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md"
          />
          <p class="text-red-400">{{ errors.first("Number") }}</p>
        </div>
      </div>
      <div v-else class="others-data grid lg:grid-cols-2 gap-4 mt-4">
        <div>
          <input
            type="text"
            v-validate="{ required: true }"
            name="ID"
            :placeholder="$t('Enter ID Number')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md"
            v-model="person.ID"
          />
          <p class="text-red-400">{{ errors.first("ID") }}</p>
        </div>
        <div>
          <input
            type="text"
            v-validate="{ required: true }"
            name="IBAN"
            v-model="person.IBAN"
            :placeholder="$t('enter bank IBAN')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md"
          />
          <p class="text-red-400">{{ errors.first("IBAN") }}</p>
        </div>
        <div>
          <select
            v-validate="{ required: true }"
            name="Nationality"
            v-model="person.Nationality"
            class="focus:outline-0 p-3 rounded-lg text-text-color bg-gray-100 w-full mx-auto"
          >
            <option disabled selected value="">
              {{ $t("Select Nationality") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("Nationality") }}</p>
        </div>
        <div>
          <select
            v-validate="{ alpha: true, required: true }"
            name="Country"
            v-model="person.Country"
            class="placeholder:capitalize focus:outline-0 p-3 rounded-lg text-text-color bg-gray-100 w-full mx-auto"
          >
            <option disabled selected value="">
              {{ $t("Select Country") }}
            </option>

            <option value="asd1">asd</option>
            <option value="asd2">asd</option>
            <option value="asd3">asd</option>
          </select>
          <p class="text-red-400">{{ errors.first("Country") }}</p>
        </div>
        <div>
          <input
            v-validate="{ required: true }"
            name="AccountNumber"
            type="text"
            v-model="person.AccountNumber"
            :placeholder="$t('enter Account Number')"
            class="placeholder:text-text-color placeholder:capitalize bg-gray-100 w-full p-3 rounded-md"
          />
          <p class="text-red-400">{{ errors.first("AccountNumber") }}</p>
        </div>
        <div>
          <input
            type="text"
            v-validate="{ required: true, min: 11 }"
            name="ComercialActivity"
            v-model="person.ComercialActivity"
            :placeholder="$t('Enter Comercial Activity')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md"
          />
          <p class="text-red-400">{{ errors.first("ComercialActivity") }}</p>
        </div>
        <div>
          <input
            type="text"
            v-validate="{ required: true }"
            name="LegalCapacity"
            v-model="person.LegalCapacity"
            :placeholder="$t('enter Legal Capacity')"
            class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md"
          />
          <p class="text-red-400">{{ errors.first("LegalCapacity") }}</p>
        </div>
      </div>
      <button
        @click="saveProfile"
        class="w-full p-2 mt-10 text-white rounded-lg bg-main-color"
      >
        {{ $t("Save changes") }}
      </button>
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";

export default {
  name: "UserProfile",
  data() {
    return {
      personalData: true,
      person: {
        imageUrl: "",
        FirstName: "",
        LastName: "",
        Region: "",
        City: "",
        Nationality: "",
        Number: "",
        Country: "",
        ID: "",
        LegalCapacity: "",
        IBAN: "",
        ComercialActivity: "",
        AccountNumber: "",
      },
    };
  },
  components: {
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
