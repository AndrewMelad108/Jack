<template>
  <section class="requests">
    <div class="space-y-6">
      <div
        class="request-item bg-white min-h-[200px] rounded-lg p-6"
        v-for="Request in Requests"
        :key="Request.index"
      >
        <div class="flex justify-between gap-4 font-bold">
          <h1 class="md:text-xl text-md">{{ $t(Request.name) }}</h1>
          <p>{{ Request.createdDate.split("T")[0] }}</p>
        </div>
        <p class="flex items-center mt-4 text-text-color">
          <img
            :src="`https://jackfrontend-001-site1.etempurl.com/Images/${Request.image}`"
            alt="Request-image"
            loading="lazy"
            class="mt-4 w-10 h-10"
          />

          {{ Request.location }}
        </p>
        <p class="my-6 text-text-color">{{ Request.description }}</p>

        <button
          @click="requestDetails(Request.id, Request.name)"
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
  props: ["Requests"],
  data() {
    return {
      Request: [
        // {
        //   name: "Service 1",
        //   date: "2022-01-01",
        //   location: "Specific Location, Saudi Arabia",
        //   description: "Description 1",
        // },
        // {
        //   name: "Service 2",
        //   date: "2022-01-01",
        //   location: "Specific Location, Saudi Arabia",
        //   description: "Description 2",
        // },
        // {
        //   name: "Service 3",
        //   date: "2022-01-01",
        //   location: "Specific Location, Saudi Arabia",
        //   description: "Description 3",
        // },
      ],
    };
  },
  methods: {
    requestDetails(id, requestName) {
      console.log(id);
      this.$router.push({
        name: "Provider.RequestDetials",
        params: {
          requestId: id,
          requestType: requestName.replace(" ", ""),
        },
      });
    },
  },
};
</script>

<style></style>
