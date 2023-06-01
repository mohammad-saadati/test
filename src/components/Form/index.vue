<template>
  <div class="container mx-auto w-[300px]">
    <div class="my-5 text-left">
      <router-link to="/">بازگشت به خانه</router-link>
    </div>
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
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import AddForm from "../components/Form/index.vue";
import { useGeneralStore } from "../../store/index.js";

const store = useGeneralStore();

const formData = ref({
  firstName: "",
  lastName: "",
  studentNumber: null,
  phone: null,
});
const submit = () => {
  store.addUser(formData.value);
};
const generate = () => {
  var stdNumber = Math.floor(1000 + Math.random() * 9000000000);
  formData.value.studentNumber = stdNumber;
};
</script>
