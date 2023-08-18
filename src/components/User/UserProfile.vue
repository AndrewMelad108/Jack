<template>
  <section class="UserProfile md:p-6 p-2">
    <SwitchLang />
    <WelcomeMassage name="User" />
    <div
      class="UserProfile-content px-2 space-x-4 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4"
    >
      <div class="bg-white rounded-[20px] h-[300px] mb-28">
        <div
          v-if="!person.imageUrl"
          class="flex items-end justify-center rounded-[10px] min-h-full"
        >
          <input
            class="bg-gray-100 border-2 p-4 rounded-xl text-grey-100 text-lg file:w-full file:rounded-full file:border-0 file:text-[#3A3A3A] hover:file:cursor-pointer"
            type="file"
            v-validate="{ required: true }"
            name="profileIamge"
            id="upload_photo"
            @change="onFileChange($event)"
            accept="image/*"
            title="Add image"
          />
        </div>
        <div
          v-if="person.imageUrl"
          class="bg-white p-4 rounded-xl h-[300px] max-h-[300px] overflow-hidden flex justify-center flex-col"
        >
          <img :src="person.imageUrl" alt="profile-image" loading="lazy" />
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
      <div class="Form-user bg-white h-auto rounded-lg p-4">
        <h1 class="font-bold text-lg">{{ $t("personal information") }}</h1>
        <input
          type="text"
          v-validate="{ alpha: true, required: true }"
          name="FirstName"
          :placeholder="$t('First Name')"
          class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          v-model.trim="person.FirstName"
        />
        <p class="text-red-400">{{ errors.first("FirstName") }}</p>
        <input
          type="text"
          v-validate="{ alpha: true, required: true }"
          name="LastName"
          :placeholder="$t('Last Name')"
          class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
          v-model.trim="person.LastName"
        />
        <p class="text-red-400">{{ errors.first("LastName") }}</p>
        <select
          v-validate="{ required: true }"
          name="Region"
          class="focus:outline-0 mt-4 p-3 rounded-lg text-text-color bg-gray-100 w-full mx-auto"
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
        <select
          v-validate="{ alpha: true, required: true }"
          name="City"
          v-model="person.City"
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
    onFileChange(event) {
      const selectedImage = event.target.files[0];
      if (selectedImage) {
        this.person.imageUrl = URL.createObjectURL(selectedImage);
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
