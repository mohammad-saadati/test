<template>
  <div>
    <div
      class="absolute w-[300px] h-[auto] bg-white top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] shadow p-5"
    >
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useGeneralStore } from "../../store/index.js";

const store = useGeneralStore();
</script>
