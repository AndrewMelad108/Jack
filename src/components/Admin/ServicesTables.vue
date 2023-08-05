<template>
  <section class="tables overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            #id
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>

          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y capitalize divide-gray-200">
        <tr v-for="option in options" :key="option.id">
          <td
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            {{ option.id }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ option.name }}
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <button class="text-blue-600">Edit</button>
            <!-- <button class="text-red-600">Delete</button> -->
          </td>
        </tr>
        <!-- Add more rows here -->
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "ServicesTables",
  props: ["options"],
  data() {
    return {
      //   options: [
      //     {
      //       id: 1,
      //       name: "",
      //     },
      //   ],
    };
  },
};
</script>

<style></style>
