<template>
  <section class="">
    <div class="bg-[#24C6C9] min-h-[300px] p-4 mx-auto">
      <div class="text-center my-4">
        <h1 class="text-white text-3xl">{{ $t("Work Hours") }}</h1>
        <span class="bg-white block w-20 mt-2 mx-auto h-2 rounded-xl"></span>
      </div>
      <div class="mt-2 md:px-12" v-for="time in times" :key="time.day">
        <div class="flex md:flex-row flex-col gap-4">
          <div class="">
            <label for="weekday">{{ $t(" Day:") }} </label>
            <select
              class="mt-1 focus:ring-[#24C6C9] focus:border-[#24C6C9] block w-full shadow-sm sm:text-sm bg-gray-100 text-[#3A3A3A] border-hidden rounded-md px-3 py-2"
              name="weekday"
              id="weekday"
              v-model="time.day"
            >
              <option v-for="day in days" :key="day" :value="day">
                {{ day }}
              </option>
            </select>
          </div>
          <div class="">
            <label for="from"> {{ $t("From:") }} </label>
            <input
              class="mt-1 focus:ring-[#24C6C9] focus:border-[#24C6C9] block w-full shadow-sm sm:text-sm bg-gray-100 text-[#3A3A3A] border-hidden rounded-md px-3 py-2"
              type="time"
              name="from"
              id="from"
              v-model="time.from"
            />
          </div>
          <div class="">
            <label for="to"> {{ $t("To:") }} </label>
            <input
              class="mt-1 focus:ring-[#24C6C9] focus:border-[#24C6C9] block w-full shadow-sm sm:text-sm bg-gray-100 text-[#3A3A3A] border-hidden rounded-md px-3 py-2"
              type="time"
              name="to"
              id="to"
              v-model="time.to"
            />
          </div>
          <button
            class="mt-8 focus:ring-[#24C6C9] focus:border-[#24C6C9] block w-7 h-7 shadow-sm bg-gray-100 rounded-full p-[0.3rem]"
          >
            <img
              class="w-62 h-full object-fit"
              src="../../assets/images/delete.png"
              alt="delete"
              @click="deleteTime(time)"
            />
          </button>
        </div>
      </div>
      <div class="flex px-12">
        <div
          class="justify-center bg-green-500 text-white rounded-lg py-2 px-3 text-[16px] mt-[54px]"
        >
          <button @click="addTime">{{ $t("Add Day") }}</button>
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="flex justify-center bg-green-500 text-white rounded-lg py-2 px-3 mx-2 text-[16px] mt-[54px]"
        >
          <button>{{ $t("Save") }}</button>
        </div>
        <div
          class="flex justify-center bg-red-500 text-white rounded-lg py-2 px-3 mx-2 text-[16px] mt-[54px]"
        >
          <button>{{ $t("Discard") }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      days: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      times: [
        {
          day: "Monday",
          from: "09:00",
          to: "18:00",
        },
        {
          day: "Tuesday",
          from: "09:00",
          to: "18:00",
        },
      ],
    };
  },
  methods: {
    deleteTime(time) {
      this.times.splice(this.times.indexOf(time), 1);
    },
    addTime() {
      this.times.push({
        day: "",
        from: "",
        to: "",
      });
    },
  },
};
</script>

<style></style>
