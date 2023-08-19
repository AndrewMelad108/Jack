<template>
  <section class="requests">
    <div class="space-y-6">
      <div
        class="request-item bg-white min-h-[200px] rounded-lg p-6"
        v-for="Request in Requests"
        :key="Request.index"
      >
        <div class="flex justify-between gap-4 font-bold">
          <h1 class="md:text-xl text-md">{{ Request.name }}</h1>
          <p>{{ Request.date }}</p>
        </div>
        <p class="flex items-center mt-4 text-text-color">
          <img
            src="../../assets/images/location-pin.png"
            alt="location-image"
            loading="lazy"
          />

          {{ Request.location }}
        </p>
        <p class="my-6 text-text-color">{{ Request.description }}</p>
        <img
          src="../../assets/images/1667831181-Group_1.png"
          alt="request-image"
        />
        <button
          @click="requestDetails()"
          class="block rounded-lg mt-4 p-4 ml-auto text-white bg-main-color"
        >
          {{ $t("Details") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RequestsList",
  data() {
    return {
      Requests: [
        {
          name: "Service 1",
          date: "2022-01-01",
          location: "Specific Location, Saudi Arabia",
          description: "Description 1",
        },
        {
          name: "Service 2",
          date: "2022-01-01",
          location: "Specific Location, Saudi Arabia",
          description: "Description 2",
        },
        {
          name: "Service 3",
          date: "2022-01-01",
          location: "Specific Location, Saudi Arabia",
          description: "Description 3",
        },
      ],
    };
  },
  methods: {
    requestDetails() {
      this.$router.push({
        name: "Seller.RequestDetials",
        params: {
          requestId: 1,
        },
      });
    },
  },
};
</script>

<style></style>
