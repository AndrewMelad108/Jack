<template>
  <section class="RegisterPage relative min-h-[100vh] w-[100%]">
    <UserHeader :checked="checkUser" />
    <UserHeaderPhone />
    <div class="Register-form bg-gray-100 w-[100%] py-4">
      <div
        class="bg-white md:w-[900px] max-w-[600px] p-4 mx-auto min-h-[95vh] rounded-2xl"
      >
        <div
          class="social-icons w-48 mt-4 mx-auto flex justify-around gap-1 items-center"
        >
          <img
            src="../../assets/images/facebook.png"
            alt="facebook-icon"
            class="brightness-0 cursor-pointer"
            loading="lazy"
          />
          <img
            src="../../assets/images/Twitter.png"
            class="brightness-0 cursor-pointer"
            alt="Twitter-icon"
            loading="lazy"
          />
          <img
            src="../../assets/images/linkedin.png"
            alt="linkedin-icon "
            class="brightness-0 cursor-pointer"
            loading="lazy"
          />
          <img
            src="../../assets/images/instagram.png"
            class="brightness-0 cursor-pointer"
            alt="instagram-icon"
            loading="lazy"
          />
        </div>
        <h1 class="text-xl capitalize mt-4">{{ $t("account type") }}</h1>
        <div class="group-btn md:w-[70%] w-[60%] grid grid-cols-2 gap-1">
          <button
            :class="
              selected === 'User'
                ? 'bg-green-100 text-[#24C6C9]'
                : 'bg-gray-100'
            "
            @click="selected = 'User'"
            class="capitalize border-0 p-2 md:text-2xl text-lg rounded-2xl"
          >
            {{ $t("user") }}
          </button>
          <button
            :class="
              selected === 'Seller'
                ? 'bg-green-100 text-[#24C6C9]'
                : 'bg-gray-100'
            "
            @click="selected = 'Seller'"
            class="capitalize border-0 p-2 md:text-2xl text-lg rounded-xl"
          >
            {{ $t("seller") }}
          </button>
        </div>
        <div
          class="form-inputs grid md:grid-cols-2 gap-5 grid-cols-1 my-5 md:mx-2 md:px-8 md:w-[100%] mx-auto pb-4 w-[80%]"
        >
          <div class="input-field">
            <label
              for="Email"
              class="capitalize block md:text-xl text-md text-lg"
              >{{ $t("FirstName") }}</label
            >
            <input
              type="text"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
              :placeholder="$t('enter your FirstName')"
              v-model="person.FirstName"
            />
          </div>
          <div class="input-field">
            <label for="LastName" class="capitalize block md:text-xl text-md">{{
              $t("LastName")
            }}</label>
            <input
              type="text"
              :placeholder="$t('enter your FirstName')"
              v-model="person.LastName"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            />
          </div>
          <div class="input-field">
            <label for="Region" class="capitalize block md:text-xl text-md">{{
              $t("City")
            }}</label>
            <select
              v-model="person.City"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            >
              <option disabled selected value="">
                {{ $t("Select City") }}
              </option>

              <option value="asd1">asd</option>
              <option value="asd2">asd</option>
              <option value="asd3">asd</option>
            </select>
          </div>
          <div class="input-field">
            <label for="Region" class="capitalize block md:text-xl text-md">{{
              $t("Region")
            }}</label>
            <select
              v-model="person.Region"
              class="placeholder:capitalize p-4 rounded-lg placeholder:text-gray-600 placeholder:text-xl bg-gray-200 w-[100%]"
            >
              <option disabled selected value="">
                {{ $t("Select Region") }}
              </option>
              <option value="asd1">asd</option>
              <option value="asd2">asd</option>
              <option value="asd3">asd</option>
            </select>
          </div>
          <div class="input-field">
            <label
              for="Contact Number"
              class="capitalize block md:text-xl text-md"
              >{{ $t("Contact Number") }}</label
            >
            <input
              type="text"
              :placeholder="$t('enter your Number address')"
              v-model="person.Number"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            />
          </div>
          <div class="input-field">
            <label for="Email" class="capitalize block md:text-xl text-md">{{
              $t("Email")
            }}</label>
            <input
              type="text"
              :placeholder="$t('enter your Email')"
              v-model="person.Email"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            />
          </div>
          <div class="input-field">
            <label for="Password" class="capitalize block md:text-xl text-md">{{
              $t("Password")
            }}</label>
            <input
              type="text"
              :placeholder="$t('enter your Password')"
              v-model="person.Email"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            />
          </div>
          <div class="input-field">
            <label for="Password" class="capitalize block md:text-xl text-md">{{
              $t("Confirm password")
            }}</label>
            <input
              type="text"
              :placeholder="$t('enter your Confirm Password')"
              v-model="person.ConfirmPassword"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            />
          </div>
          <div
            class="md:text-xl text-sm md:col-start-1 md:col-end-3 font-bold capitalize"
          >
            <input type="checkbox" v-model="person.condition" />
            {{ $t("accept") }}
            <span class="text-main-color">{{ $t("terms and condition") }}</span>
          </div>
          <button
            @click="Register()"
            class="bg-main-color text-white p-4 text-center w-full py-3 rounded-xl md:text-xl text-md md:col-start-1 md:col-end-3"
          >
            {{ $t("Next") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserHeader from "@/components/User/MainPage/UserHeader.vue";
import UserHeaderPhone from "@/components/User/UserHeaderPhone.vue";
export default {
  name: "LoginPage",
  data() {
    return {
      checkUser: true,
      selected: "User",
      person: {
        FirstName: "",
        LastName: "",
        Region: "",
        City: "",
        Number: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        condition: "",
      },
    };
  },
  components: {
    UserHeader,
    UserHeaderPhone,
  },
  methods: {
    goToMainPage() {
      this.$router.go(-1);
    },
    Register() {},
  },
};
</script>

<style></style>
