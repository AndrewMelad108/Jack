<template>
  <section class="WelcomeMassage">
    <h1 class="name text-3xl font-bold py-4 capitalize">
      Hi <span class="text-main-color">{{ name }}</span>
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
