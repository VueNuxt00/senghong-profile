<template>
    <div class="w-full p-4 flex justify-start space-x-2 items-start dark:text-white  relative ">
        <div class="flex flex-col space-y-4 dark:bg-gray-800 bg-gray-200 w-[200px] p-2 rounded-md  sticky top-0">
            <button @click="changeSection(index)" v-for="(link, index) in links" :key="index" class=" px-2 py-1 rounded-sm"
                :class="{ 'bg-gray-600': item === index }">
                {{ link.name }}
            </button>
        </div>

        <div class="w-full h-[calc(100vh-200px)] bg-gray-800 rounded-sm p-5">

            <div v-if="item === 1">
                <h2>Hello Vue3 js</h2>
                <a href="https://vuejs.org/"  target="_blank" class=" text-green-500 underline hover:text-green-400">Go to vue web site for tutorial</a>
            </div>
            <div v-else-if="item === 2">
                Hello Nuxt3 js
            </div>
            <div v-else>
                <h2>Hello Node js</h2>
            </div>
        </div>

    </div>
</template>
  
<script lang="ts" setup>
import { ref } from "vue"

const item = ref(0)

const links = [
    { name: "Node Js", item: "1", },
    { name: "Vue3 Js", item: "2", },
    { name: "Nuxt3 Js", item: "3", },
]
const changeSection = (index: number) => {
    item.value = index
}
</script>