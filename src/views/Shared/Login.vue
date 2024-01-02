<template>
  <section
    class="LoginPage bg-text-color min-h-[100vh] w-[100%] flex justify-center items-center p-4"
  >
    <div
      class="login-form w-[500px] mx-auto bg-white rounded-2xl min-h-auto p-4"
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
      <div
        class="social-icons w-48 md:mt-4 mt-2 mx-auto flex justify-around gap-1 items-center"
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
      <p class="text-center py-4 capitalize font-bold">
        {{ $t("please login to your account") }}
      </p>
      <div class="group-btn mx-auto w-[80%] grid grid-cols-2 md:gap-3 gap-1">
        <button
          :class="
            selected === 'User' ? 'bg-green-100 text-[#24C6C9]' : 'bg-gray-100'
          "
          @click="selected = 'User'"
          class="capitalize border-0 p-2 md:text-xl text-lg rounded-2xl relative"
        >
          <div class="tooltip hidden text-base">
            {{
              $t(
                "The user is the person who can use the application for the purpose of requesting all available services"
              )
            }}
          </div>
          {{ $t("user") }}
        </button>
        <button
          :class="
            selected === 'Seller'
              ? 'bg-green-100 text-[#24C6C9]'
              : 'bg-gray-100'
          "
          @click="selected = 'Seller'"
          class="capitalize border-0 p-2 md:text-xl text-lg rounded-2xl relative"
        >
          <div class="tooltip hidden text-base">
            {{
              $t(
                "The provider is the person or facility that can provide one or some services through the application"
              )
            }}
          </div>
          {{ $t("seller") }}
        </button>
      </div>
      <div class="form-inputs space-y-4 my-5">
        <div class="input-field space-y-2">
          <label for="Email" class="capitalize block text-xl">{{
            $t("email")
          }}</label>
          <input
            type="text"
            v-validate="{ required: true, email: true }"
            class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            :placeholder="$t('enter email')"
            v-model="person.email"
            name="email"
          />
          <span class="text-red-400">{{ errors.first("email") }}</span>
        </div>
        <div class="input-field space-y-2">
          <label for="Password" class="capitalize block text-xl">{{
            $t("password")
          }}</label>
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

        <div class="text-center space-y-1 capitalize text-md">
          <p>{{ $t("dont have account ?") }}</p>
          <router-link
            :to="{ name: 'Register' }"
            class="text-main-color cursor-pointer"
            >{{ $t("create account") }}</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SwitchLang from "@/components/Shared/Form/SwitchLang.vue";
import { sendRequest } from "../../../axios";
export default {
  name: "LoginPage",
  data() {
    return {
      selected: "User",
      person: {
        email: "",
        password: "",
      },
    };
  },
  components: { SwitchLang },
  updated() {
    localStorage.setItem("role", this.selected);
  },
  methods: {
    goToMainPage() {
      this.$router.go(-1);
    },

    Login() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          let successCallback = (res) => {
            console.log(res.status);
          };
          let errorCallback = (err) => {
            console.log(err);
          };
          sendRequest(
            "Account/Login",
            "post",
            { ...this.person },
            false,
            successCallback,
            errorCallback
          );
          // if (localStorage.getItem("role") === "User") {
          //   this.$router.push({
          //     name: "User.Home",
          //   });
          // } else {
          //   this.$router.push({
          //     name: "Seller.Home",
          //   });
          // }
        } else {
          console.log("error");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.group-btn button:hover {
  .tooltip {
    position: absolute;
    display: block;
    top: -75px;
    left: 0;
    max-width: 350px;
    width: 400px;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    padding: 4px 8px;
    border-radius: 10px;
    word-wrap: break-word;
    &::after {
      content: "";
      position: absolute;
      bottom: -16px;
      left: 25%;
      border-width: 8px;
      border-style: solid;
      border-color: rgba(0, 0, 0, 0.75) transparent transparent transparent;
    }
  }
}
</style>
