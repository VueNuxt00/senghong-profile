<template>
  <div class="flex flex-col items-start justify-start">
    <label for="name">{{ label }}</label>
    <input
      :v-model="model"
      type="text"
      class="min-w-[250px] py-1 px-2 rounded-md outline-none bg-gray-100"
      :placeholder="placeholder"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
defineProps(["label", "placeholder", "model"]);
</script>
