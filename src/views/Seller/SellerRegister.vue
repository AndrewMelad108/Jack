<template>
  <section class="RegisterPage relative min-h-[100vh] w-[100%]">
    <UserHeader :checked="checkUser" />
    <UserHeaderPhone />
    <SwitchLang class="md:hidden m-4" />
    <div class="Register-form bg-gray-100 w-[100%] py-4">
      <div
        class="bg-white md:max-w-[1100px] max-w-[600px] p-4 mx-auto min-h-[95vh] rounded-2xl"
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
          class="group-btn mb-4 sm:flex-row flex-col flex items-center gap-2"
        >
          <div class="flex items-center gap-2 md:w-1/2 w-full">
            <button
              :class="
                selected === 'User'
                  ? 'bg-green-100 text-[#24C6C9]'
                  : 'bg-gray-100'
              "
              @click="$router.push({ name: 'Register' })"
              class="capitalize border-0 p-2 md:text-xl text-lg rounded-2xl relative w-32"
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
              @click="
                selected =
                  'Seller' && router.push({ name: 'Provider.Register' })
              "
              class="capitalize border-0 p-2 md:text-xl text-lg rounded-2xl relative w-32"
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
        </div>
        <div class="form-inputs grid md:grid-cols-2 gap-6 grid-cols-1">
          <div class="input-field space-y-2">
            <label for="fullName" class="capitalize block text-xl">{{
              $t("Full Name")
            }}</label>
            <input
              type="text"
              v-validate="{ alpha: true, required: true }"
              name="fullName"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
              :placeholder="$t('Enter Full Name')"
              v-model="person.fullName"
            />
            <span class="text-red-400">{{ errors.first("fullName") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="nickName" class="capitalize block text-xl">{{
              $t("Nick Name")
            }}</label>
            <input
              type="text"
              v-validate="{ alpha: true, required: true }"
              name="nickName"
              :placeholder="$t('Enter Nick Name')"
              v-model="person.nickName"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{ errors.first("nickName") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="email" class="capitalize block text-xl">{{
              $t("email")
            }}</label>
            <input
              type="email"
              :placeholder="$t('enter email')"
              v-model="person.email"
              v-validate="{ required: true, email: true }"
              name="email"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{ errors.first("email") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Mobile Number" class="capitalize block text-xl">{{
              $t("Mobile Number")
            }}</label>
            <input
              type="text"
              :placeholder="$t('enter mobile number')"
              v-validate="{ required: true, min: 6 }"
              name="MobileNumber"
              v-model="person.MobileNumber"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{ errors.first("MobileNumber") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Password" class="capitalize block text-xl">{{
              $t("Password")
            }}</label>
            <input
              type="password"
              :placeholder="$t('enter Password')"
              v-validate="{ required: true, min: 8 }"
              name="password"
              v-model="person.password"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{ errors.first("password") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="ConfirmPassword" class="capitalize block text-xl">{{
              $t("Confirm password")
            }}</label>
            <input
              type="password"
              v-validate="{ required: true, min: 8 }"
              name="ConfirmPassword"
              :placeholder="$t('enter Confirm Password')"
              v-model="person.ConfirmPassword"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{
              errors.first("ConfirmPassword")
            }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="address" class="capitalize block text-xl">{{
              $t("address")
            }}</label>
            <input
              type="text"
              :placeholder="$t('enter shop address')"
              v-validate="{ required: true }"
              name="address"
              v-model="person.address"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{ errors.first("address") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="ID" class="capitalize block text-xl">{{
              $t("ID or Comercial Registration number")
            }}</label>
            <input
              type="number"
              :placeholder="$t('enter number')"
              v-validate="{ required: true }"
              name="ID"
              v-model="person.ID"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{ errors.first("ID") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Country" class="capitalize block text-xl">{{
              $t("Country")
            }}</label>
            <select
              v-model="person.Country"
              v-validate="{ required: true }"
              name="Country"
              class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            >
              <option disabled selected value="">
                {{ $t("Select Country") }}
              </option>

              <option value="1">{{ $t("Libia") }}</option>
              <option value="2">{{ $t("Qatar") }}</option>
              <option value="3">{{ $t("India") }}</option>
            </select>
            <span class="text-red-400">{{ errors.first("Country") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Nationality" class="capitalize block text-xl">{{
              $t("Nationality")
            }}</label>
            <select
              v-model="person.Nationality"
              v-validate="{ required: true }"
              name="Nationality"
              class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            >
              <option disabled selected value="">
                {{ $t("Select Nationality") }}
              </option>

              <option value="1">{{ $t("pakistani") }}</option>
              <option value="2">{{ $t("American") }}</option>
              <option value="3">{{ $t("Arabian") }}</option>
            </select>
            <span class="text-red-400">{{ errors.first("Nationality") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="City" class="capitalize block text-xl">{{
              $t("City")
            }}</label>
            <select
              v-model="person.City"
              v-validate="{ required: true }"
              name="City"
              class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            >
              <option disabled selected value="">
                {{ $t("Select City") }}
              </option>

              <option v-for="City in cities" :key="City.id" :value="City.id">
                {{ City.name }}
              </option>
            </select>
            <span class="text-red-400">{{ errors.first("City") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="region" class="capitalize block text-xl">{{
              $t("region")
            }}</label>
            <select
              v-model="person.region"
              v-validate="{ required: true }"
              name="region"
              class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            >
              <option disabled selected value="">
                {{ $t("Select region") }}
              </option>
              <option
                v-for="region in regions"
                :key="region.id"
                :value="region.id"
              >
                {{ region.name }}
              </option>
            </select>
            <span class="text-red-400">{{ errors.first("region") }}</span>
          </div>

          <div class="input-field space-y-2">
            <label for="IBAN" class="capitalize block text-xl">{{
              $t("IBAN")
            }}</label>
            <input
              type="text"
              v-validate="{ required: true }"
              name="IBAN"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
              :placeholder="$t('enter bank IBAN')"
              v-model="person.IBAN"
            />
            <span class="text-red-400">{{ errors.first("IBAN") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Account Number" class="capitalize block text-xl">{{
              $t("Account Number")
            }}</label>
            <input
              type="text"
              v-validate="{ required: true }"
              name="AccountNumber"
              :placeholder="$t('enter Account Number')"
              v-model="person.AccountNumber"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{
              errors.first("AccountNumber")
            }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Comercial Activity" class="capitalize block text-xl">{{
              $t("Comercial Activity")
            }}</label>
            <input
              type="text"
              v-validate="{ required: true }"
              name="ComercialActivity"
              :placeholder="$t('Comercial Activity')"
              v-model="person.ComercialActivity"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{
              errors.first("ComercialActivity")
            }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Legal Capacity" class="capitalize block text-xl">{{
              $t("Legal Capacity")
            }}</label>
            <input
              type="number"
              :placeholder="$t('enter Legal Capacity')"
              v-validate="{ required: true }"
              name="LegalCapacity"
              v-model="person.LegalCapacity"
              class="placeholder:capitalize focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            />
            <span class="text-red-400">{{
              errors.first("LegalCapacity")
            }}</span>
          </div>
          <!--Services inputs-->
          <div class="input-field space-y-2">
            <label for="Services" class="capitalize block text-xl">{{
              $t("Services")
            }}</label>
            <select
              v-model="person.Services"
              v-validate="{ required: true }"
              name="Services"
              class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            >
              <option disabled selected value="">
                {{ $t("Select Service") }}
              </option>
              <option
                v-for="Service in Service"
                :key="Service.id"
                :value="Service.id"
              >
                {{ $t(Service.name) }}
              </option>
            </select>
            <span class="text-red-400">{{ errors.first("Services") }}</span>
          </div>
          <div class="input-field space-y-2">
            <label for="Services" class="capitalize block text-xl">{{
              $t("Services(2)")
            }}</label>
            <select
              v-model="person.Service2"
              v-validate="{ required: true }"
              name="TypesDelivery"
              class="placeholder:capitalize text-gray-600 focus:outline-0 text-lg p-4 rounded-lg placeholder:text-gray-600 placeholder:text-lg bg-gray-200 w-[100%]"
            >
              <option disabled selected value="">
                {{ $t("Select Types Delivery") }}
              </option>
              <option
                v-for="Type in TypesDelivery"
                :key="Type.id"
                :value="Type.id"
              >
                {{ $t(Type.name) }}
              </option>
            </select>
            <span class="text-red-400">{{
              errors.first("TypesDelivery")
            }}</span>
          </div>
          <div class="input-field space-y-2">
            <label class="capitalize block text-xl">
              {{ $t("Licence Photo one") }}
              <div
                class="flex items-center justify-center bg-gray-100 rounded-[10px] focus:ring-[#24C6C9] focus:border-[#24C6C9] w-full h-[200px]"
              >
                <label for="license_photo_1" class="cursor-pointer">{{
                  $t("Add images")
                }}</label>
                <input
                  class="text-sm text-grey-100 hidden text-[15px] file:bg-gray-100 file:w-full file:rounded-full file:border-0 file:text-[#3A3A3A] hover:file:cursor-pointer"
                  type="file"
                  v-validate="{ required: true }"
                  name="license_photo_1"
                  id="license_photo_1"
                  @change="licensePhotoOne($event)"
                  accept="image/*"
                />
              </div>
              <span class="text-red-400">{{
                errors.first("license_photo_1")
              }}</span>
            </label>
          </div>
          <div class="input-field space-y-2">
            <label class="capitalize block text-xl">
              {{ $t("Licence Photo Two") }}
              <div
                class="flex items-center justify-center bg-gray-100 rounded-[10px] focus:ring-[#24C6C9] focus:border-[#24C6C9] w-full h-[200px]"
              >
                <label for="license_photo_2 " class="cursor-pointer">{{
                  $t("Add images")
                }}</label>
                <input
                  class="text-sm text-grey-100 hidden text-[15px] file:bg-gray-100 file:w-full file:rounded-full file:border-0 file:text-[#3A3A3A] hover:file:cursor-pointer"
                  type="file"
                  v-validate="{ required: true }"
                  name="license_photo_2"
                  id="license_photo_2"
                  @change="licensePhotoTwo($event)"
                  accept="image/*"
                />
              </div>
              <span class="text-red-400">{{
                errors.first("license_photo_2")
              }}</span>
            </label>
          </div>
          <div
            class="md:text-lg text-sm md:col-start-1 md:col-end-3 font-bold capitalize"
          >
            <input
              type="checkbox"
              v-model="person.condition"
              v-validate="{ required: true }"
              name="condition"
            />
            {{ $t("accept") }}
            <span class="text-main-color">{{ $t("terms and condition") }}</span>
            <p class="text-red-400">{{ errors.first("condition") }}</p>
          </div>
          <button
            @click="Register()"
            class="bg-main-color text-white p-4 text-center w-full py-3 rounded-xl md:text-lg text-md md:col-start-1 md:col-end-3"
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
import SwitchLang from "@/components/Shared/Form/SwitchLang.vue";
import { sendRequest } from "../../../axios";
export default {
  name: "LoginPage",
  data() {
    return {
      checkUser: true,
      selected: "Seller",
      cities: [],
      person: {
        fullName: "",
        nickName: "",
        region: "",
        City: "",
        email: "",
        password: "",
        ID: "",
        ConfirmPassword: "",
        condition: "",
        MobileNumber: null,
        address: "",
        iban: "",
        Country: "",
        Nationality: "",
        IBAN: "",
        AccountNumber: "",
        ComercialActivity: "",
        LegalCapacity: "",
        Services: "",
        Service2: "",
        licencePhotoOne: "",
        licencePhotoTwo: "",
      },
      Service: [
        { id: 1, name: "towing and shipping" },
        { id: 2, name: "car maintenance and care" },
        { id: 3, name: "Spare Parts" },
        { id: 4, name: "Baggage Transfer" },
        { id: 5, name: "Free services and delivering household needs" },
        { id: 6, name: "Sell Your Car" },
      ],
      TypesDelivery: [
        { id: 1, name: "Special delivery" },
        { id: 2, name: "Professional delivery" },
      ],
      nations: [
        { id: 1, name: "Pakistani" },
        { id: 2, name: "American" },
        { id: 3, name: "Arabian" },
      ],
      countries: [
        { id: 1, name: "Libia" },
        { id: 2, name: "Qatar" },
        { id: 3, name: "India" },
      ],
      citie: [
        { id: 1, name: "Riyadh" },
        { id: 2, name: "Alkharag" },
        { id: 3, name: "Dawadmi" },
        { id: 4, name: "Al majmah" },
        { id: 5, name: "Al-Quwayiyah" },
        { id: 6, name: "Wadi Al Dawasir" },
        { id: 7, name: "Afif" },
        { id: 8, name: "Diriyah" },
        { id: 9, name: "Zulfi" },
        { id: 10, name: "Aflaj" },
        { id: 11, name: "Hotat Bani Tamim" },
        { id: 12, name: "Shaqra" },
        { id: 13, name: "Muzahimiyah" },
        { id: 14, name: "Alslayel" },
        { id: 15, name: "Makkah Al-Mukarramah" },
        { id: 16, name: "Jeddah" },
        { id: 17, name: "Taif" },
        { id: 18, name: "Qunfudhah" },
        { id: 19, name: "Bahra" },
        { id: 20, name: "Algmom" },
        { id: 21, name: "Rabigh" },
        { id: 22, name: "Laith" },
        { id: 23, name: "Al ardeyat" },
        { id: 24, name: "Maysan" },
        { id: 25, name: "Khulais" },
        { id: 26, name: "Adume" },
        { id: 27, name: "Ranyh" },
        { id: 28, name: "Trobeh" },
        { id: 29, name: "Al Khurma" },
        { id: 30, name: "Al mweh" },
        { id: 31, name: "Medina" },
        { id: 32, name: "Yanbu" },
        { id: 33, name: "Badr" },
        { id: 34, name: "Almehd" },
        { id: 35, name: "Hanakia" },
        { id: 36, name: "Al ola" },
        { id: 37, name: "Khaibar" },
        { id: 38, name: "Buraidah" },
        { id: 39, name: "Unaizah" },
        { id: 40, name: "Alrass" },
        { id: 41, name: "Al bkeryah" },
        { id: 42, name: "Badayea" },
        { id: 43, name: "Nabhania" },
        { id: 44, name: "Meznab" },
        { id: 45, name: "Ehsaa" },
        { id: 46, name: "Dammam" },
        { id: 47, name: "Qatif" },
        { id: 48, name: "Al khuber" },
        { id: 49, name: "Hafar Al-Batin" },
        { id: 50, name: "Jubail" },
        { id: 51, name: "Khafji" },
        { id: 52, name: "Ras Tanura" },
        { id: 53, name: "Abqaiq" },
        { id: 54, name: "Abha" },
        { id: 55, name: "Khamis Mushait" },
        { id: 56, name: "Bisha" },
        { id: 57, name: "Mahayel" },
        { id: 58, name: "Ahad Rafidah" },
        { id: 59, name: "Belqrn" },
        { id: 60, name: "Sarat" },
        { id: 61, name: "Rijal Almaa" },
        { id: 62, name: "Namas" },
        { id: 63, name: "Majarda" },
        { id: 64, name: "Tathleath" },
        { id: 65, name: "Barq" },
        { id: 66, name: "Dhahran South" },
        { id: 67, name: "Tabouk" },
        { id: 68, name: "Umluj" },
        { id: 69, name: "Wajh" },
        { id: 70, name: "Duba" },
        { id: 71, name: "Tema" },
        { id: 72, name: "Hail" },
        { id: 73, name: "Al hayet" },
        { id: 74, name: "Paqaa" },
        { id: 75, name: "Arar" },
        { id: 76, name: "Rafha" },
        { id: 77, name: "Treaf" },
        { id: 78, name: "Jazan" },
        { id: 79, name: "Samtah" },
        { id: 80, name: "Sabya" },
        { id: 81, name: "Abu Arish" },
        { id: 82, name: "Ahd al msarheh" },
        { id: 83, name: "Alaaredh" },
        { id: 84, name: "ligature" },
        { id: 85, name: "Bish" },
        { id: 86, name: "Darb" },
        { id: 87, name: "Dayer" },
        { id: 88, name: "Altwal" },
        { id: 89, name: "Najran" },
        { id: 90, name: "Sharurah" },
        { id: 91, name: "Al Baha" },
        { id: 92, name: "Baljurashi" },
        { id: 93, name: "Almakhwah" },
        { id: 94, name: "Alkalosis" },
        { id: 95, name: "Sakaka" },
        { id: 96, name: "Qurayyat" },
        { id: 97, name: "Tabarjal" },
        { id: 98, name: "Jandal" },
      ],
      region: [
        { id: 1, name: "Riyadh" },
        { id: 2, name: "Makkah Al-Mukarramah" },
        { id: 3, name: "Al-Madinah Al-Munawwarah" },
        { id: 4, name: "Al-Qassim" },
        { id: 5, name: "Eastern" },
        { id: 6, name: "Asir" },
        { id: 7, name: "Tabuk" },
        { id: 8, name: "Hail" },
        { id: 9, name: "Northern Border" },
        { id: 10, name: "Jazan" },
        { id: 11, name: "Najran" },
        { id: 12, name: "Al Baha" },
        { id: 13, name: "Al-Jawf" },
        { id: 14, name: "Farasan Island" },
        { id: 15, name: "Al Saqid" },
        { id: 16, name: "Qammah" },
        { id: 17, name: "Abu Ali" },
        { id: 18, name: "Tarot" },
        { id: 19, name: "Paradise" },
      ],
      regions: [],
    };
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
    let successServicesCallback = (res) => {
      if (res.data.success) {
        this.Services = res.data.data;
      }
    };
    sendRequest(
      "Service/GetAllService",
      "get",
      null,
      false,
      successServicesCallback,
      null
    );
  },
  components: {
    UserHeader,
    UserHeaderPhone,
    SwitchLang,
  },
  watch: {
    "person.City"(value) {
      this.getRegions(value);
    },
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
            "Account/register/Provider",
            "post",
            {
              fullName: this.person.fullName,
              nickName: this.person.nickName,
              password: this.person.password,
              email: this.person.email,
              mobileNumber: this.person.MobileNumber,
              address: this.person.address,
              region: this.person.region,
              comercialRegistrationNumber: Number(this.person.ID),
              nationality: "egypt",
              iban: Number(this.person.iban),
              comercialActivity: this.person.ComercialActivity,
              accountNumber: this.person.AccountNumber,
              legelCapcity: Number(this.person.LegalCapacity),
              serviceID: Number(this.person.Services),
              LicencePhotoOne: this.person.LicencePhotoOne.split(",")[1],
              LicencePhotoTwo: this.person.LicencePhotoTwo.split(",")[1],
            },
            false,
            successCallback,
            null
          );
        }
      });
    },
    licensePhotoOne(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.person.LicencePhotoOne = e.target.result;
      };
    },
    licensePhotoTwo(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.person.LicencePhotoTwo = e.target.result;
      };
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
