<template>
  <section class="LoginPage bg-text-color min-h-[100vh] w-screen py-4 md:px-8">
    <div
      class="login-form md:w-96 w-72 mx-auto bg-white rounded-2xl min-h-[95vh] h-auto p-4"
    >
      <img
        src="../../assets/images/icons/close-icon.svg"
        class="md:py-2 md:px-4 py-0 md:h-10 h-5 cursor-pointer ml-auto"
        alt="close-icon"
        loading="lazy"
        @click="goToMainPage()"
      />
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
            class="placeholder:capitalize p-4 rounded-lg placeholder:text-gray-600 placeholder:text-xl bg-gray-200 w-[100%]"
            :placeholder="$t('enter email')"
            v-model="person.email"
          />
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
            class="placeholder:capitalize p-4 rounded-lg placeholder:text-gray-600 placeholder:text-xl bg-gray-200 w-[100%]"
          />
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
  methods: {
    goToMainPage() {
      this.$router.push({
        name: "MainPage",
      });
    },
    Login() {},
  },
};
</script>

<style></style>
