<template>
  <Modal v-if="showModal">
    <div @click="close" class="text-left cursor-pointer">بستن</div>
    <form @submit.prevent="submit">
      <div class="flex flex-col">
        <div class="flex flex-col mb-8">
          <lable>نام</lable>
          <input
            type="text"
            v-model="formData.firstName"
            class="form-input px-4 py-3 border border-slate-50"
          />
        </div>
        <div class="flex flex-col mb-8">
          <lable>نام خانوادگی</lable>
          <input
            type="text"
            v-model="formData.lastName"
            class="form-input px-4 py-3 border border-slate-50"
          />
        </div>
        <div class="flex flex-col mb-8">
          <lable>شماره موبایل</lable>
          <input
            type="text"
            v-model="formData.phone"
            class="form-input px-4 py-3 border border-slate-50"
          />
        </div>
        <div class="flex flex-col mb-8">
          <div class="flex">
            <lable class="inline text-sm">شماره دانشجویی</lable>
            <span @click="generate" class="inline text-xs cursor-pointer mr-2"
              >اخذ شماره دانشجویی</span
            >
          </div>
          <input
            type="text"
            v-model="formData.studentNumber"
            class="form-input px-4 py-3 border border-slate-50"
          />
        </div>
        <button type="submit" class="bg-cyan-700 mt-5 text-white p-2">
          ثبت
        </button>
      </div>
    </form>
  </Modal>
</template>
<script lang="ts" setup>
import Modal from "./index.vue";
import { useGeneralStore } from "../../store/index.js";
import { computed, onMounted, ref } from "vue";

const store = useGeneralStore();

const showModal = computed(() => store.showEditingModal);
const formData = ref({
  firstName: "",
  lastName: "",
  studentNumber: null,
  phone: null,
});
onMounted(() => {
  formData.value.id = store.editingItem.id;
  formData.value.firstName = store.editingItem.firstName;
  formData.value.lastName = store.editingItem.lastName;
  formData.value.phone = store.editingItem.phone;
  formData.value.studentNumber = store.editingItem.studentNumber;
});
const clear = () => {
  formData.value.id = null;
  formData.value.firstName = null;
  formData.value.lastName = null;
  formData.value.phone = null;
  formData.value.studentNumber = null;
};
const submit = () => {
  store.editUser(formData.value);
  clear();
};
const close = () => {
  store.closeEditModal();
  clear();
};
const generate = () => {
  var stdNumber = Math.floor(1000 + Math.random() * 9000000000);
  formData.value.studentNumber = stdNumber;
};
</script>
