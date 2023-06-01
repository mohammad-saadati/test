<template>
  <div>
    <router-link
      class="inline-block bg-cyan-500 hover:bg-cyan-600 p-3 mb-2"
      to="/add-user"
      >افزودن کاربر</router-link
    >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-slate-400">
        <tr>
          <th scope="col" class="px-6 py-3 text-lg">شناسه</th>
          <th scope="col" class="px-6 py-3 text-lg">نام کامل</th>
          <th scope="col" class="px-6 py-3 text-lg">شماره دانشجوبی</th>
          <th scope="col" class="px-6 py-3 text-lg">موبایل</th>
          <th scope="col" class="px-6 py-3 text-lg"></th>
        </tr>
      </thead>
      <tbody>
        <TableRow />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import TableRow from "./TableRow.vue";
import { computed } from "vue";
import { useGeneralStore } from "../../store/index.js";

const store = useGeneralStore();

const users = computed(() => store.users);

const confirmModal = () => {};
const editModal = (index, user) => {
  store.trackEditingItem(index, user);
};

</script>
