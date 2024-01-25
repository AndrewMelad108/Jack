<template>
  <section
    class="adminLogin bg-text-color h-[100vh] w-[100%] flex justify-center items-center p-4"
  >
    <div
      class="login-form w-[450px] mx-auto bg-white rounded-2xl min-h-auto p-4"
    >
      <div class="flex justify-center items-center">
        <SwitchLang />
        <img
          src="../../assets/images/icons/close-icon.svg"
          class="md:py-2 md:px-4 py-0 md:h-10 h-5 cursor-pointer ml-auto"
          alt="close-icon"
          loading="lazy"
          @click="goToMainPage()"
        />
      </div>
      <img
        src="../../assets/images/logo.png"
        class="mt-1 h-14 w-28 cursor-pointer mx-auto"
        alt="close-icon"
        loading="lazy"
        @click="goToMainPage()"
      />

      <p class="text-center py-4 capitalize font-bold">
        {{ $t("please login to your account") }}
      </p>

      <div class="form-inputs space-y-4 my-5">
        <div class="input-field space-y-2">
          <label for="Email" class="capitalize block text-xl text-main-color">{{
            $t("email")
          }}</label>
          <input
            type="text"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            :placeholder="$t('enter email')"
            v-model="person.email"
            v-validate="{ required: true, email: true }"
            name="email"
          />
          <span class="text-red-400">{{ errors.first("email") }}</span>
        </div>
        <div class="input-field space-y-2">
          <label
            for="Password"
            class="capitalize block text-xl text-main-color"
            >{{ $t("password") }}</label
          >
          <input
            type="password"
            :placeholder="$t('Password')"
            v-model="person.password"
            v-validate="{ required: true, min: 8 }"
            name="password"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
          />
          <span class="text-red-400">{{ errors.first("password") }}</span>
        </div>
        <p
          class="capitalize m-0 text-main-color text-right p-0 text-lg cursor-pointer"
        >
          <router-link :to="{}" class="p-0 m-0">
            {{ $t("forget password") }}
          </router-link>
        </p>
        <button
          @click="Login()"
          class="bg-main-color text-white md:p-4 p-2 text-center md:w-full w-48 mx-auto rounded-xl md:text-xl text-lg block"
        >
          {{ $t("Login") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import SwitchLang from "@/components/Shared/Form/SwitchLang.vue";
import { sendRequest } from "../../../axios";
import {
  showSuccessMessage,
  showErrorMessage,
  extractUserInfoFromToken,
} from "../../../common";
export default {
  name: "AdmiLogin",
  data() {
    return {
      person: {
        email: "",
        password: "",
      },
    };
  },
  components: { SwitchLang },
  created() {
    localStorage.setItem("role", "Admin");
  },
  methods: {
    goToMainPage() {
      this.$router.push({
        name: "MainPage",
      });
    },
    Login() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          let successCallback = (res) => {
            if (res.data.success) {
              showSuccessMessage(res.data.message);
              this.user = extractUserInfoFromToken(res.data.data.token);
              localStorage.setItem("role", this.user.role);
              localStorage.setItem("token", res.data.data.token);
              if (this.user.role === "Admin") {
                this.$router.push({
                  name: "Admin.Home",
                });
              }
            } else {
              showErrorMessage(res.data.message);
            }
          };

          sendRequest(
            "Account/Login",
            "post",
            { ...this.person },
            false,
            successCallback,
            null
          );
        }
      });
    },
  },
};
</script>
