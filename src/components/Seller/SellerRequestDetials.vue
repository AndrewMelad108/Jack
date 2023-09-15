<template>
  <section class="SellerRequestDetials p-8">
    <header class="grid md:grid-cols-2 grid-cols-1 items-start justify-between">
      <WelcomeMassage name="User" />
      <InputSearch />
    </header>
    <div
      @click="
        $router.push({
          name: 'Seller.Requests',
        })
      "
      class="back_Requests cursor-pointer mx-4 my-8 flex gap-4 font-bold items-center text-xl"
    >
      <img
        src="../../assets/images/Back.png"
        alt="Back-icon"
        loading="lazy"
        v-if="Lang === 'en'"
      />{{ $t("Details") }}
      <img
        src="../../assets/images/Back.png"
        v-if="Lang === 'ar'"
        alt="Back-icon"
        loading="lazy"
      />
    </div>
    <div
      class="request-details-content w-full grid md:grid-cols-4 grid-cols-1 items-center gap-4"
    >
      <div class="md:col-start-1 md:col-end-4 col-start-1 col-end-2">
        <div
          class="person-details my-6 p-3 gap-4 bg-white md:text-md text-sm shadow-md shadow-slate-400 rounded-xl min-h-52 flex items-center"
        >
          <img
            src="../../assets/images/1667831181-Group_1.png"
            alt=""
            class="h-10"
          />
          <div class="person-info">
            <h1 class="text-lg">Jack</h1>
            <p class="flex items-center text-text-color">
              <img
                src="../../assets/images/location-pin.png"
                alt="location-image"
              />
              Suadi Arabia Riyadh, Saudi Arabia
            </p>
          </div>
        </div>
        <div class="Offer-detials mt-10">
          <div
            class="bg-white md:text-md text-sm shadow-md shadow-slate-400 rounded-xl min-h-52 grid lg:grid-cols-2 grid-cols-1 gap-y-6 p-6"
          >
            <p class="font-bold">
              {{ $t("Spare Parts Type") }}
              <span class="text-text-color md:px-6">
                {{ Offer.SparePartsType }}</span
              >
            </p>
            <p class="font-bold">
              {{ $t("Brand")
              }}<span class="text-text-color md:px-6 px-2">
                {{ Offer.Brand }}</span
              >
            </p>
            <p class="font-bold">
              {{ $t("Model") }}
              <span class="text-text-color md:px-6 px-2">
                {{ Offer.Model }}</span
              >
            </p>
            <p class="font-bold">
              {{ $t("Year of Manufactur")
              }}<span class="text-text-color md:px-4 px-2">
                {{ Offer.YearofManufactur }}</span
              >
            </p>
            <p class="font-bold">
              {{ $t("Car Serial Number") }}
              <span class="text-text-color md:px-6 px-2">
                {{ Offer.CarSerialNumber }}</span
              >
            </p>
            <p class="font-bold">
              {{ $t("Part Name") }}
              <span class="text-text-color px-6"> {{ Offer.PartName }}</span>
            </p>
          </div>

          <p class="md:text-lg text-sm my-4 capitalize">
            {{ $t("total amount is") }} {{ total }}
          </p>
          <!-- <div class="checkAllPrices my-4 flex gap-2 items-center">
            <input
              type="checkbox"
              class="w-5 h-5 rounded-xl"
              v-model="PriceCheck"
            />
            <span class="md:text-lg text-sm">{{
              $t("Price includes shipping")
            }}</span>
          </div> -->
          <div class="OfferPhotos my-4">
            <h1 class="my-4 md:text-xl text-md font-bold">
              {{ $t("Attached images") }}
            </h1>

            <div
              class="photos items-start flex space-y-4 gap-2 md:flex-row flex-col my-6 justify-between"
            >
              <div class="photo1">
                <MapGoogle></MapGoogle>
              </div>
              <div class="photo2">
                <img
                  :src="imageUrl"
                  alt="الصورة المختارة"
                  class="md:w-[80%] md:mx-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          @click="
            $router.push({
              name: 'Seller.SellerOferCreate',
              params: {
                OfferId: 1,
              },
            })
          "
          class="bg-main-color h-12 font-bold w-full border-2 md:text-lg text-sm text-white p-1 md:px-3 md:py-2 rounded-lg"
        >
          {{ $t("Send Offer") }}
        </button>
      </div>
      <img
        src="../../assets/images/1667831181-Group_1.png"
        alt=""
        class="w-52 h-52 md:col-start-4 place-self-center justify-self-center md:col-end-5 col-start-1 col-end-2"
      />
    </div>
  </section>
</template>

<script>
import WelcomeMassage from "@/components/Shared/WelcomeMassage.vue";
import InputSearch from "@/components/Shared/Form/InputSearch.vue";
import MapGoogle from "../../components/Shared/Map.vue";

export default {
  name: "SellerRequestDetials",
  data() {
    return {
      imageUrl: require("@/assets/images/Saudi_licene_front.jpg"),
      Lang: localStorage.getItem("lang"),
      total: "750",
      Offer: {
        SparePartsType: "new",
        Brand: "Yamaha",
        Model: "Hilux",
        YearofManufactur: "2022",
        CarSerialNumber: "54546186441864",
        PartName: "Something",
      },
      services: [
        {
          name: "service",
          description: "Description",
          Amount: 2,
          PartCost: 400,
          Total: 2,
        },
        {
          name: "service",
          description: "Description",
          Amount: 2,
          PartCost: 400,
          Total: 2,
        },
      ],
      PriceCheck: false,
    };
  },

  components: {
    WelcomeMassage,
    InputSearch,
    MapGoogle,
  },
};
</script>

<style></style>
