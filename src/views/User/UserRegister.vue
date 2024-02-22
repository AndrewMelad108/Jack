<template>
  <section
    class="RegisterPage relative min-h-[100vh] md:bg-white bg-gray-100 w-[100%]"
  >
    <UserHeader :checked="checkUser" />
    <UserHeaderPhone />
    <SwitchLang class="md:hidden m-4" />
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
        <h1 class="text-xl capitalize mt-4 pb-2">{{ $t("account type") }}</h1>
        <div class="group-btn md:w-[35%] w-[60%] grid grid-cols-2 gap-1">
          <button
            :class="
              selected === 'User'
                ? 'bg-green-100 text-[#24C6C9]'
                : 'bg-gray-100'
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
            @click="$router.push({ name: 'Provider.Register' })"
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
        <div
          class="form-inputs grid md:grid-cols-2 gap-5 grid-cols-1 my-5 mx-2 pb-4"
        >
          <div class="input-field space-y-2">
            <label for="FirstName" class="capitalize block text-xl">{{
              $t("First Name")
            }}</label>
            <input
              type="text"
              v-validate="{ alpha: true, required: true }"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
              :placeholder="$t('enter FirstName')"
              v-model="person.FirstName"
              name="FirstName"
            />
            <span class="text-red-400">{{ errors.first("FirstName") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="LastName" class="capitalize block text-xl">{{
              $t("Last Name")
            }}</label>
            <input
              type="text"
              :placeholder="$t('enter LastName')"
              v-validate="{ alpha: true, required: true }"
              name="LastName"
              v-model="person.LastName"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{ errors.first("LastName") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="City" class="capitalize block text-xl">{{
              $t("City")
            }}</label>
            <select
              v-model="person.City"
              v-validate="{ required: true }"
              class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
              name="City"
            >
              <option disabled selected value="">
                {{ $t("Select City") }}
              </option>

              <option v-for="city in cities" :key="city.id" :value="city.id">
                {{ city.name }}
              </option>
            </select>
            <span class="text-red-400">{{ errors.first("City") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Region" class="capitalize block text-xl">{{
              $t("Region")
            }}</label>
            <select
              v-model="person.Region"
              name="Region"
              v-validate="{ required: true }"
              class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            >
              <option disabled selected value="">
                {{ $t("Select Region") }}
              </option>
              <option
                v-for="region in regions"
                :key="region.id"
                :value="region.id"
              >
                {{ region.name }}
              </option>
            </select>
            <span class="text-red-400">{{ errors.first("Region") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Contact Number" class="capitalize block text-xl">{{
              $t("Contact Number")
            }}</label>
            <input
              type="number"
              :placeholder="$t('enter Number')"
              v-validate="{ required: true, min: 6 }"
              name="Number"
              v-model="person.Number"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{ errors.first("Number") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Email" class="capitalize block text-xl">{{
              $t("Email")
            }}</label>
            <input
              type="text"
              :placeholder="$t('enter Email')"
              v-validate="{ required: true, email: true }"
              v-model="person.Email"
              name="Email"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{ errors.first("Email") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Password" class="capitalize block text-xl">{{
              $t("Password")
            }}</label>
            <input
              type="password"
              :placeholder="$t('enter Password')"
              v-validate="{ required: true, min: 8 }"
              name="Password"
              v-model="person.Password"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{ errors.first("Password") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Password" class="capitalize block text-xl">{{
              $t("Confirm password")
            }}</label>
            <input
              type="password"
              :placeholder="$t('enter Confirm Password')"
              v-model="person.ConfirmPassword"
              v-validate="{ required: true, min: 8 }"
              name="ConfirmPassword"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{
              errors.first("ConfirmPassword")
            }}</span>
          </div>
          <div
            class="md:text-xl text-sm md:col-start-1 md:col-end-3 font-bold capitalize"
          >
            <input
              type="checkbox"
              v-model="person.condition"
              v-validate="{ required: true }"
              name="condition"
            />
            {{ $t("accept") }}
            <span class="text-main-color">{{ $t("terms and condition") }}</span>
            <p class="text-red-400 text-sm">{{ errors.first("condition") }}</p>
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
import SwitchLang from "@/components/Shared/Form/SwitchLang.vue";
import UserHeader from "@/components/User/MainPage/UserHeader.vue";
import UserHeaderPhone from "@/components/User/UserHeaderPhone.vue";
import { sendRequest } from "../../../axios";
export default {
  name: "LoginPage",
  data() {
    return {
      checkUser: true,
      selected: "User",
      cities: [],
      regions: [],
      person: {
        FirstName: "",
        LastName: "",
        Region: "",
        City: "",
        Number: null,
        Email: "",
        Password: null,
        ConfirmPassword: null,
        condition: false,
      },
    };
  },
  watch: {
    "person.City"(value) {
      this.getRegions(value);
    },
  },
  created() {
    let successCallback = (res) => {
      if (res.data.success) {
        this.cities = res.data.data;
      }
    };
    sendRequest(
      "Address/City/AllCities",
      "get",
      null,
      false,
      successCallback,
      null
    );
  },
  components: {
    UserHeader,
    UserHeaderPhone,
    SwitchLang,
  },
  methods: {
    goToMainPage() {
      this.$router.go(-1);
    },
    getRegions(id) {
      let successCallback = (res) => {
        if (res.data.success) {
          this.regions = res.data.data;
        }
      };
      sendRequest(
        `Address/City/Regions?cityId=${id}`,
        "get",
        null,
        false,
        successCallback,
        null
      );
    },
    Register() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          let successCallback = (res) => {
            if (res.data.success) {
              this.$router.push({
                name: "LogIn",
              });
            } else {
              console.error("Error");
            }
          };

          sendRequest(
            "Account/register/Customer",
            "post",
            {
              firstName: this.person.FirstName,
              lastName: this.person.LastName,
              password: this.person.Password,
              email: this.person.Email,
              contactNumber: this.person.Number,
              regionID: this.person.Region,
            },
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
