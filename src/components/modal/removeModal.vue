<template>
  <Modal v-if="showModal">
    <div>ایا از حذف کاربر مطمین هستید؟</div>
    <div class="flex">
      <button class="bg-cyan-700 mt-5 text-white p-2 ml-2" @click="deleteItem">
        بله
      </button>
      <button class="bg-cyan-700 mt-5 text-white p-2" @click="closeRemoveModal">
        کنسل
      </button>
    </div>
  </Modal>
</template>
<script lang="ts" setup>
import Modal from "./index.vue";
import { useGeneralStore } from "../../store/index.js";
import { computed, onMounted, ref } from "vue";

const store = useGeneralStore();

const showModal = computed(() => store.showRemovingModal);

const deleteItem = () => {
  store.removeItem();
};
const closeRemoveModal = () => {
  store.closeRemoveModal();
};
</script>
