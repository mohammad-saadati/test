<template>
  <div class="container mx-auto px-4 rtl">
    <Table />
    <EditingModal />
    <removeModal />
  </div>
</template>

<script setup lang="ts">
import Table from "../components/Table/index.vue";
import EditingModal from "../components/modal/editModal.vue";
import removeModal from "../components/modal/removeModal.vue";
</script>

<style></style>
