<template>
    <div
        class="flex  w-full bg-gray-200 text-gray-800  dark:bg-gray-900 border-b-[0.5px] dark:text-white justify-center px-10 py-2 space-x-4 sticky top-0 z-[2]">
        <div class="w-full flex justify-center">
            <NuxtLink :to="link.href" @click="console.log($route.matched[0].path)" v-for="(link, index) in links"
                :key="index" class="  rounded-md px-3 py-1"
                :class="{ 'border border-gray-300 text-green-600 font-bold': $route.matched[0].path === link.href }">{{
                    link.name }}</NuxtLink>

        </div>
        <!-- <div class="w-[100px]">
            <el-select v-model="value" @change="onChangeLocale()" placeholder="Select">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div> -->
        <!-- Switch button -->
        <el-button type="success" @click="toggleDark()">
            <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
            <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
        </el-button>

    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
const value = ref('')
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

const links = [
    { name: "home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
];
const options = [
    {
        value: 'en',
        label: 'English',
    },
    {
        value: 'kh',
        label: 'Khmer',
    },
]
const onChangeLocale = () => {
    localStorage.setItem('lang', value.value.toString());

    // console.log(typeof lang)


}


</script>