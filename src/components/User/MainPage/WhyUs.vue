<template>
  <section
    class="WhyUs bg-main-color min-h-[300px] text-white md:text-xl txext-md py-20 my-20"
  >
    <h1 class="text-center text-white text-5xl font-bold pt-10 pb-4">
      {{ $t("Why Us") }}
    </h1>
    <span class="line block w-24 bg-white h-1 rounded-full mx-auto"></span>
    <div
      class="WhyUs-contnet py-20 flex lg:flex-row flex-col justify-around items-center gap-16 px-10"
    >
      <div class="item flex gap-10">
        <img
          src="./../../../assets/images/Ellipse_2.png"
          alt="image-icons"
          loading="lazy"
          class="self-start"
        />
        <div class="item-description">
          <h1 class="font-bold text-32l">title head</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, tempora aspernatur cupiditate quaerat, obcaecati quos
          </p>
        </div>
      </div>
      <div class="item flex gap-10">
        <img
          src="./../../../assets/images/Ellipse_2.png"
          alt="image-icons"
          loading="lazy"
          class="self-start"
        />
        <div class="item-description">
          <h1 class="font-bold text-32l">title head</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, tempora aspernatur cupiditate quaerat, obcaecati quos
          </p>
        </div>
      </div>
      <div class="item flex gap-10">
        <img
          src="./../../../assets/images/Ellipse_2.png"
          alt="image-icons"
          loading="lazy"
          class="self-start"
        />
        <div class="item-description">
          <h1 class="font-bold text-32l">title head</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, tempora aspernatur cupiditate quaerat, obcaecati quos
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyUs",
  data() {},
};
</script>

<style></style>
