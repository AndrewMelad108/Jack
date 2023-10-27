<template>
  <section
    class="UserFooter flex justify-around text-white items-center bg-[#095C5E] lg:flex-row flex-col p-4"
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
      <div class="grid lg:grid-cols-2 grid-cols-1 items-center">
        <p class="flex items-center gap-4 text-sm">
          <img
            src="../../../assets/images/android-mail.png"
            class=""
            alt="phone-icon"
            loading="lazy"
          />Serviceprovider@gmail.com
        </p>
        <p class="flex items-center lg:justify-self-center my-4 gap-4">
          <img
            src="../../../assets/images/icons/WhatsApp Image 2023-10-26 at 4.02.32 PM (1).jpeg"
            class="w-auto h-10 rounded-full"
            alt="phone-icon"
            loading="lazy"
          />
          تاميني
        </p>
        <p class="flex items-center my-4 gap-4">
          <img
            src="../../../assets/images/icons/WhatsApp Image 2023-10-26 at 4.02.32 PM.jpeg"
            class="w-auto h-10 rounded-full"
            alt="phone-icon"
            loading="lazy"
          />
          نجم
        </p>
        <p class="flex items-center lg:justify-self-center my-4 gap-4">
          <img
            src="../../../assets/images/icons/WhatsApp Image 2023-10-26 at 4.02.33 PM.jpeg"
            class="w-auto h-10 rounded-full"
            alt="phone-icon"
            loading="lazy"
          />
          بي كير
        </p>
        <p class="flex items-center gap-4">
          <img
            src="../../../assets/images/icons/WhatsApp Image 2023-10-26 at 4.02.33 PM (1).jpeg"
            class="w-10 h-10 rounded-full"
            alt="phone-icon"
            loading="lazy"
          />
          ابجاز
        </p>
      </div>
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
        <router-link to="/FeaturedServices">{{
          $t("Featured Services")
        }}</router-link>
        <router-link to="/Login/Create">{{ $t("SignIn") }}</router-link>
        <router-link to="/Testemonials">{{ $t("Testemonials") }}</router-link>
        <router-link to="/AboutUs">{{ $t("Information about") }}</router-link>
        <router-link to="/FAQs">{{ $t("FAQs") }}</router-link>
        <router-link to="/Terms">{{ $t("Terms and Conditions") }}</router-link>
        <router-link to="/policy">{{ $t("privacy policy") }}</router-link>
      </div>
    </div>
    <div class="social lg:w-3/12 w-[70%] mx-auto px-4">
      <h1 class="my-4 font-bold text-xl w-[80%]">Social</h1>
      <div class="w-[80%] grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
        <p class="phone-number flex gap-4 items-center cursor-pointer">
          <img
            src="../../../assets/images/facebook.png"
            class=""
            alt="phone-icon"
            loading="lazy"
          />facebook
        </p>
        <p class="phone-number flex gap-4 items-center cursor-pointer">
          <img
            src="../../../assets/images/Twitter.png"
            class=""
            alt="phone-icon"
            loading="lazy"
          />Twitter
        </p>
        <p class="phone-number flex gap-4 items-center cursor-pointer">
          <img
            src="../../../assets/images/linkedin.png"
            class=""
            alt="phone-icon"
            loading="lazy"
          />linkedin
        </p>
        <p class="phone-number flex gap-4 items-center cursor-pointer">
          <img
            src="../../../assets/images/instagram.png"
            alt="phone-icon"
            loading="lazy"
          />instagram
        </p>
        <p class="phone-number flex gap-4 items-center cursor-pointer">
          <img
            src="../../../assets/images/youtube.png"
            alt="phone-icon"
            loading="lazy"
            class="block h-8"
          />youtube
        </p>
        <p class="phone-number flex gap-4 items-center cursor-pointer">
          <img
            src="../../../assets/images/whatsapp.png"
            alt="phone-icon "
            loading="lazy"
            class="block h-8"
          />whatsapp
        </p>
        <p class="phone-number flex gap-4 items-center cursor-pointer">
          <img
            src="../../../assets/images/tik-tok.png"
            alt="phone-icon "
            loading="lazy"
            class="block h-8"
          />Tik Tok
        </p>
        <p class="phone-number flex gap-4 items-center cursor-pointer">
          <img
            src="../../../assets/images/snapchat.png"
            alt="phone-icon   "
            loading="lazy"
            class="block h-10"
          />snapshat
        </p>
        <p class="phone-number flex gap-4 items-center cursor-pointer">
          <img
            src="../../../assets/images/pinterest.png"
            alt="phone-icon   "
            loading="lazy"
            class="block h-8"
          />Pinterest
        </p>
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
