<template>
  <section class="WelcomeMassage">
    <h1 class="name md:text-3xl text-xl font-bold py-4 capitalize">
      {{ $t("Hi") }} <span class="text-main-color">{{ name }}</span>
    </h1>
  </section>
</template>

<script>
export default {
  name: "WelcomeMassage",
  props: ["name"],
};
</script>

<style></style>
