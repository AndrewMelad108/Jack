<template>
  <section
    class="UserFooter flex justify-around text-white items-center bg-[#095C5E] py-10 lg:pl-10 lg:flex-row flex-col lg:space-x-0 space-y-10"
  >
    <div class="call-detials lg:w-4/12 w-[68%] space-y-10">
      <img
        src="../../../assets/images/logo.png"
        class="block"
        alt="logo-image"
        loading="lazy"
      />
      <p class="phone-number flex gap-1 cursor-pointer">
        <img
          src="../../../assets/images/phone.png"
          class=""
          alt="phone-icon"
          loading="lazy"
        />+66 32329 r23523
      </p>
      <p class="Email flex gap-1 cursor-pointer">
        <img
          src="../../../assets/images/android-mail.png"
          class=""
          alt="phone-icon"
          loading="lazy"
        />Serviceprovider@gmail.com
      </p>
    </div>
    <div
      class="links lg:w-4/12 w-[90%] mx-auto space-y-6 lg:ml-6 lg:border-x-2 lg:border-solid lg:border-text-color lg:pl-8 pr-4"
    >
      <h1 class="my-4 font-bold text-xl w-[75%] mx-auto">
        {{ $t("Site Map") }}
      </h1>
      <div
        class="grid grid-cols-2 text-lg gap-6 justify-center w-[70%] mx-auto"
      >
        <router-link to="/">{{ $t("Home") }}</router-link>
        <router-link to="/TowingAndShipping">{{
          $t("Featured Services")
        }}</router-link>
        <router-link to="/Login/Create">{{ $t("SignIn") }}</router-link>
        <router-link to="">{{ $t("Testemonials") }}</router-link>
        <router-link to="/User/Register/Create">{{
          $t("Information about")
        }}</router-link>
        <router-link to="">{{ $t("FAQs") }}</router-link>
        <router-link to="/User/Register/Create">{{
          $t("Terms and Conditions")
        }}</router-link>
        <router-link to="">{{ $t("privacy policy") }}</router-link>
      </div>
    </div>
    <div class="social lg:w-3/12 w-[70%] mx-auto px-4">
      <h1 class="my-4 font-bold text-xl w-[80%]">Social</h1>
      <div class="w-[80%] space-y-6">
        <p class="phone-number flex gap-4 cursor-pointer">
          <img
            src="../../../assets/images/facebook.png"
            class=""
            alt="phone-icon"
            loading="lazy"
          />facebook
        </p>
        <p class="phone-number flex gap-4 cursor-pointer">
          <img
            src="../../../assets/images/Twitter.png"
            class=""
            alt="phone-icon"
            loading="lazy"
          />Twitter
        </p>
        <p class="phone-number flex gap-4 cursor-pointer">
          <img
            src="../../../assets/images/linkedin.png"
            class=""
            alt="phone-icon"
            loading="lazy"
          />linkedin
        </p>
        <p class="phone-number flex gap-4 cursor-pointer">
          <img
            src="../../../assets/images/instagram.png"
            class=""
            alt="phone-icon"
            loading="lazy"
          />instagram
        </p>
      </div>
      <div class="icon-image grid grid-cols-3 mt-2 w-[80%]">
        <img
          src="../../../assets/images/icons/social_1.png"
          alt="social-icon"
          loading="lazy"
          class="h-14 w-14 p-2"
        />
        <img
          src="../../../assets/images/icons/social_2.png"
          alt="social-icon"
          loading="lazy"
          class="h-14 w-14 p-2"
        />
        <img
          src="../../../assets/images/icons/social_3.png"
          alt="social-icon"
          loading="lazy"
          class="h-14 w-14 p-2"
        />
        <img
          src="../../../assets/images/icons/social_4.png"
          alt="social-icon"
          loading="lazy"
          class="h-14 w-14 p-2"
        />
        <img
          src="../../../assets/images/icons/social_5.png"
          alt="social-icon"
          loading="lazy"
          class="h-14 w-14 p-2"
        />
        <img
          src="../../../assets/images/icons/social_6.png"
          alt="social-icon"
          loading="lazy"
          class="h-14 w-14 p-2"
        />
        <img
          src="../../../assets/images/icons/social_7.png"
          alt="social-icon"
          loading="lazy"
          class="h-14 w-14 p-2"
        />
        <img
          src="../../../assets/images/icons/social_8.png"
          alt="social-icon"
          loading="lazy"
          class="h-14 w-14 p-2"
        />
        <img
          src="../../../assets/images/icons/social_9.png"
          alt="social-icon"
          loading="lazy"
          class="h-14 w-14 p-2"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserFooter",
};
</script>

<style></style>
