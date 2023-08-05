<template>
  <section class="RegisterPage relative min-h-[100vh] w-[100%]">
    <UserHeader :checked="checkUser" />
    <UserHeaderPhone />
    <div class="Register-form bg-gray-100 w-[100%] py-4">
      <div
        class="bg-white md:max-w-[1000px] max-w-[600px] p-4 mx-auto min-h-[95vh] rounded-2xl"
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
        <h1 class="md:text-xl text-md capitalize mt-4 pb-2">
          {{ $t("account type") }}
        </h1>
        <div
          class="group-btn flex md:justify-between items-center md:flex-row flex-col md:gap-0 gap-2"
        >
          <div class="flex md:justify-around justify-start w-1/2">
            <button
              @click="
                $router.push({
                  name: 'Register',
                })
              "
              class="capitalize md:w-[40%] w-[50%] bg-gray-100 border-0 p-2 mr-4 md:text-xl text-md rounded-2xl"
            >
              {{ $t("user") }}
            </button>
            <button
              :class="
                selected === 'Seller'
                  ? 'bg-green-100 text-[#24C6C9]'
                  : 'bg-gray-100'
              "
              @click="
                selected = 'Seller' && router.push({ name: 'Seller.Register' })
              "
              class="capitalize md:w-[40%] w-[50%] border-0 p-2 md:text-xl text-md rounded-xl"
            >
              {{ $t("seller") }}
            </button>
          </div>
          <div
            class="image-person flex md:flex-nowrap flex-wrap content-start md:justify-start justify-between sm:justify-start sm:gap-1 gap-4 items-start mx-auto md:px-4 w-1/2"
          >
            <p
              class="capitalize flex justify-center items-center md:text-3xl text-md text-white bg-main-color md:h-16 md:w-16 h-10 w-10 rounded-full"
            >
              A
            </p>
            <input
              class="text-grey-100 w-4/6 self-center file:p-2 md:text-md text-sm file:rounded-full file:w-full file:border-0 file:text-[#3A3A3A] hover:file:cursor-pointer"
              type="file"
              name="upload_photo"
              id="upload_photo"
              @change="uploadPhoto($event)"
              accept="image/*"
            />
          </div>
        </div>
        <div
          class="form-inputs grid md:grid-cols-2 gap-5 grid-cols-1 my-5 md:mx-2 md:px-8 md:w-[100%] mx-auto pb-4 w-[80%]"
        >
          <div class="input-field">
            <label
              for="FirstName"
              class="capitalize block md:text-xl text-md text-lg"
              >{{ $t("First Name") }}</label
            >
            <input
              type="text"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
              :placeholder="$t('enter FirstName')"
              v-model="person.FirstName"
            />
          </div>
          <div class="input-field">
            <label for="LastName" class="capitalize block md:text-xl text-md">{{
              $t("Last Name")
            }}</label>
            <input
              type="text"
              :placeholder="$t('enter LastName')"
              v-model="person.LastName"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            />
          </div>
          <div class="input-field">
            <label for="Email" class="capitalize block md:text-xl text-md">{{
              $t("Email")
            }}</label>
            <input
              type="text"
              :placeholder="$t('enter Email')"
              v-model="person.Email"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            />
          </div>
          <div class="input-field">
            <label
              for="Mobile Number"
              class="capitalize block md:text-xl text-md"
              >{{ $t("Mobile Number") }}</label
            >
            <input
              type="number"
              :placeholder="$t('enter Mobile Number')"
              v-model="person.Number"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            />
          </div>
          <div class="input-field">
            <label for="Password" class="capitalize block md:text-xl text-md">{{
              $t("Password")
            }}</label>
            <input
              type="password"
              :placeholder="$t('enter Password')"
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
              :placeholder="$t('enter Confirm Password')"
              v-model="person.ConfirmPassword"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            />
          </div>
          <div class="input-field">
            <label for="Address" class="capitalize block md:text-xl text-md">{{
              $t("Address")
            }}</label>
            <input
              type="text"
              :placeholder="$t('enter Address')"
              v-model="person.Email"
              class="placeholder:capitalize md:p-4 p-2 rounded-lg placeholder:text-gray-600 placeholder:text-md bg-gray-200 md:w-[100%] w-[100%] mx-auto"
            />
          </div>
          <div class="input-field">
            <label for="City" class="capitalize block md:text-xl text-md">{{
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
      selected: "Seller",
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
