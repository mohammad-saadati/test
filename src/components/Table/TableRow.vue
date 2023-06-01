<template>
  <tr
    v-for="(user, index) in users"
    :key="index"
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
  >
    <td class="px-6 py-4">{{ user.id }}</td>
    <td class="px-6 py-4">{{ user.firstName }} {{ user.lastName }}</td>
    <td class="px-6 py-4">{{ user.studentNumber }}</td>
    <td class="px-6 py-4">{{ user.phone }}</td>
    <td class="px-6 py-4">
      <button
        class="bg-cyan-500 hover:bg-cyan-600 p-2 ml-2"
        @click="editModal(index, user)"
      >
        ویرایش
      </button>
      <button class="bg-cyan-500 hover:bg-cyan-600 p-2" @click="confirmModal">
        حذف
      </button>
    </td>
  </tr>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useGeneralStore } from "../../store/index.js";

const store = useGeneralStore();

const users = computed(() => store.users);

const confirmModal = (index) => {
  store.showRemoveModal()
};
const editModal = (index, user) => {
  store.trackEditingItem(index, user)
};
</script>

