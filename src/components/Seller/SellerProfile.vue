<template>
  <section class="SelllerProfile md:px-6 px-2">
    <WelcomeMassage name="Selller" />
    <div
      class="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4 justify-center items-center"
    >
      <div
        class="bg-white self-start w-[80%] mr-auto rounded-[20px] h-[400px] mb-28"
      >
        <div v-if="!person.imageUrl" class="">
          <label
            for="file-input"
            class="bg-white rounded-[20px] flex justify-center items-center font-bold cursor-pointer h-[300px] w-full mb-28"
          >
            {{ $t("Add images") }}
          </label>
          <input
            id="file-input"
            class="hidden"
            ref="fileInput"
            type="file"
            v-validate="{ required: true }"
            name="profileIamge"
            @change="changeImage($event)"
            accept="image/*"
            title="Add image"
          />
        </div>
        <button
          v-if="person.imageUrl"
          @click="person.imageUrl = ''"
          class="bg-main-color font-bold text-lg text-white block w-56 rounded-xl transition-all ease-in-out duration-300 p-4 mt-4 mx-auto hover:bg-red-600 hover:text-black"
        >
          {{ $t("DELETE") }}
        </button>
        <p class="text-red-400 text-center mt-2">
          {{ errors.first("profileIamge") }}
        </p>
      </div>
      <div class="Form-Seller bg-white h-auto rounded-lg md:p-6 p-2">
        <div class="group-btn mb-4 flex gap-4">
          <button
            class="p-4 w-32 inline-block rounded-lg bg-main-color text-white capitalize"
          >
            {{ $t("general") }}
          </button>
          <button
            class="p-4 w-32 inline-block rounded-lg bg-gray-200 capitalize"
          >
            {{ $t("other") }}
          </button>
          <button
            class="p-4 w-32 inline-block rounded-lg bg-gray-200 capitalize"
          >
            {{ $t("reviews") }}
          </button>
        </div>
        <h1 class="font-bold text-lg">{{ $t("personal information") }}</h1>
        <input
          type="text"
          v-validate="{ alpha: true, required: true }"
          name="FirstName"
          :placeholder="$t('First Name')"
          class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
        />
        <p class="text-red-400">{{ errors.first("FirstName") }}</p>
        <input
          type="text"
          v-validate="{ alpha: true, required: true }"
          name="LastName"
          :placeholder="$t('Last Name')"
          class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
        />
        <p class="text-red-400">{{ errors.first("LastName") }}</p>
        <select
          v-validate="{ required: true }"
          name="Region"
          class="focus:outline-0 mt-4 p-3 rounded-lg text-text-color bg-gray-100 w-full mx-auto"
        >
          <option disabled selected value="">
            {{ $t("Select Region") }}
          </option>

          <option value="asd1">asd</option>
          <option value="asd2">asd</option>
          <option value="asd3">asd</option>
        </select>
        <p class="text-red-400">{{ errors.first("Region") }}</p>
        <select
          v-validate="{ alpha: true, required: true }"
          name="City"
          class="placeholder:capitalize focus:outline-0 mt-4 p-3 rounded-lg text-text-color bg-gray-100 w-full mx-auto"
        >
          <option disabled selected value="">
            {{ $t("Select City") }}
          </option>

          <option value="asd1">asd</option>
          <option value="asd2">asd</option>
          <option value="asd3">asd</option>
        </select>
        <p class="text-red-400">{{ errors.first("City") }}</p>
        <h1 class="font-bold mt-2 text-lg">{{ $t("Contact information") }}</h1>
        <input
          v-validate="{ required: true, email: true }"
          name="Email"
          type="Email"
          :placeholder="$t('enter email')"
          class="placeholder:text-text-color placeholder:capitalize bg-gray-100 w-full p-3 rounded-md mt-4"
        />
        <p class="text-red-400">{{ errors.first("Email") }}</p>
        <input
          type="text"
          v-validate="{ required: true, min: 11 }"
          name="Number"
          :placeholder="$t('Contact Number')"
          class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
        />
        <p class="text-red-400">{{ errors.first("Number") }}</p>
        <button
          @click="saveProfile"
          class="w-full p-2 mt-10 text-white rounded-lg bg-main-color"
        >
          {{ $t("Save changes") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
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
    WelcomeMassage,
  },
  methods: {
    changeImage() {
      console.log("run");
      const [file] = this.$refs.fileInput.files;
      if (file) {
        this.person.imageUrl = URL.createObjectURL(file);
      }
    },
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
