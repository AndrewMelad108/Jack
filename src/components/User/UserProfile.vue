<template>
  <section
    class="UserProfile px-2 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4"
  >
    <div class="">
      <div class="bg-white rounded-[20px] pt-[40px] pb-[30px]">
        <div class="flex justify-center">
          <img class="rounded-full w-[200px] h-[200px]" alt="" />
        </div>
        <div>
          <div
            class="flex items-center justify-center border-2 rounded-[10px] bg-gray-100 focus:ring-[#24C6C9] focus:border-[#24C6C9] px-[35px] py-[12px] mt-[50px] mx-[90px]"
          >
            <input
              class="text-sm text-grey-100 text-[15px] file:w-full file:rounded-full file:border-0 file:text-[#3A3A3A] hover:file:cursor-pointer"
              type="file"
              name="upload_photo"
              id="upload_photo"
              @change="onFileChanged($event)"
              accept="image/*"
            />
          </div>
          <!-- <div
                  :v-if="errors.upload_photo"
                  class="text-red-600 pt-1 text-xs"
                  role="alert"
                >
                  {{ errors.upload_photo }}
                </div> -->
        </div>
      </div>
    </div>
    <div class="Form-user bg-white h-auto rounded-lg p-4">
      <h1 class="font-bold text-lg">personal information</h1>
      <input
        type="text"
        placeholder="FirstName"
        class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
      />
      <input
        type="text"
        placeholder="LastName"
        class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
      />
      <select
        class="focus:outline-0 mt-4 p-3 rounded-lg text-text-color bg-gray-100 w-full mx-auto"
      >
        <option disabled selected value="">
          {{ $t("Select Region") }}
        </option>

        <option value="asd1">asd</option>
        <option value="asd2">asd</option>
        <option value="asd3">asd</option>
      </select>
      <select
        class="placeholder:capitalize focus:outline-0 mt-4 p-3 rounded-lg text-text-color bg-gray-100 w-full mx-auto"
      >
        <option disabled selected value="">
          {{ $t("Select City") }}
        </option>

        <option value="asd1">asd</option>
        <option value="asd2">asd</option>
        <option value="asd3">asd</option>
      </select>
      <h1 class="font-bold mt-2 text-lg">Contact information</h1>
      <input
        type="text"
        placeholder="Contact Number"
        class="placeholder:text-text-color bg-gray-100 w-full p-3 rounded-md mt-4"
      />
      <button class="w-full p-2 mt-10 text-white rounded-lg bg-main-color">
        Save changes
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserProfile",
};
</script>

<style></style>
