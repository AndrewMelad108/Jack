<template>
  <section class="WhatTheyThink">
    <h1
      class="text-center text-black md:text-5xl text-2xl font-bold pt-10 pb-4"
    >
      {{ $t("What They Think") }}
    </h1>
    <span class="line block w-24 bg-main-color h-1 rounded-full mx-auto"></span>
    <div class="WhatTheyThink-content mx-auto mt-20 px-10">
      <div class="persons flex justify-between">
        <img
          src="../../../assets/images/Vector_(1).png"
          alt="forward.png"
          loading="lazy"
          class="self-start md:m-auto w-6"
        />
        <div class="person-description space-y-4 mb-10">
          <img
            src="../../../assets/images/Ellipse_8.png"
            alt="Ellipse_8.png"
            loading="lazy"
            class="md:w-28 w-20 mx-auto"
          />
          <h1 class="text-center font-bold md:text-xl text-md">Andrew Melad</h1>
          <div class="person-rate flex mx-auto justify-center space-x-2">
            <img
              src="../../../assets/images/Star.png"
              alt="Star.png"
              loading="lazy"
            />
            <img
              src="../../../assets/images/Star.png"
              alt="Star.png"
              loading="lazy"
            />
            <img
              src="../../../assets/images/Star.png"
              alt="Star.png"
              loading="lazy"
            />
            <img
              src="../../../assets/images/Star.png"
              alt="Star.png"
              loading="lazy"
            />
            <img
              src="../../../assets/images/Star.png"
              alt="Star.png"
              loading="lazy"
            />
          </div>
        </div>
        <img
          src="../../../assets/images/Vector.png"
          alt="back.png"
          loading="lazy"
          class="self-start md:m-auto w-6"
        />
      </div>
      <p class="w-[80%] mx-auto text-center text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet odio
        sunt eius accusantium asperiores a exercitationem expedita libero?
        Commodi exercitationem, accusantium quasi excepturi nesciunt tempore
        magni voluptatibus soluta asperiores tempora?
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhatTheyThink",
  data() {
    return {};
  },
};
</script>

<style></style>
