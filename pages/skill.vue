<template>
    <div class="flex justify-center items-center w-full ">
        <h1 class=" dark:text-gray-100 text-black text-2xl font-medium m-2">Skills</h1>
    </div>
    <div class=" dark:text-white" v-for="item in data" :key="item.name">
        <span>{{ item.name }}</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full">
        <div class="h-4 bg-blue-500 rounded-full w-[3.]/4"></div>
    </div>
</template>
<script setup lang="ts">
import axios from "axios";
const data = ref<Data[]>([])

interface Data {
    name: string,
    age: number
}

onMounted(() => {
    axios.get('/api/hello').then((result) => {
        data.value = result.data.api
        console.log(data.value)
    }).catch((err) => {
        console.log(err.message);
    });
})
</script>
<style scoped>
@keyframes animate-spin {
    0% {
        transform: rotate(0deg);
    }

    100% {

        transform: rotate(360deg);
    }
}
</style>