<template>
  <div class="p-8">
    <VueSlickCarousel
      :arrows="true"
      :dots="true"
      class="w-[80%] mx-auto text-center"
    >
      <div class="h-60" v-for="(slide, index) in slides" :key="index">
        <div class="person-description space-y-4 mb-10">
          <img
            :src="slide.image"
            alt="Person Image"
            loading="lazy"
            class="md:w-28 w-20 mx-auto"
          />
          <h1 class="text-center font-bold md:text-xl text-md">
            {{ slide.name }}
          </h1>
          <p class="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            tempora placeat. Dolorem et sequi dolorum, dolore voluptas error
            expedita ipsa. Exercitationem dignissimos sit tempora. Voluptates ad
            distinctio quam expedita tempore?
          </p>
          <div class="person-rate flex mx-auto justify-center space-x-2">
            <img
              v-for="(star, starIndex) in slide.rate"
              :key="starIndex"
              src="../../../assets/images/Star.png"
              alt="Star"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "WhatTheyThink",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
      },
      slides: [
        {
          image: require("../../../assets/images/Ellipse17.png"),
          name: "andrew melad",
          rate: 5,
          alt: "Slide 1",
        },
        {
          image: require("../../../assets/images/Ellipse_15.png"),
          alt: "Slide 2",
          name: "andrew melad",
          rate: 1,
        },
        {
          image: require("../../../assets/images/Ellipse_16.png"),
          name: "andrew melad",
          rate: 4,
          alt: "Slide 3",
        },
        {
          image: require("../../../assets/images/Ellipse_8.png"),
          alt: "Slide 4",
          name: "andrew melad",
          rate: 3,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
