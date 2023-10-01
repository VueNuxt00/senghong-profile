<template>
    <div class="flex flex-col items-center w-full h-full justify-center sticky top-0 z-[1] m-0">
        <div class="w-full flex justify-end p-5 space-x-1 items-center px-20">

            <div>
                <label for="name" class=" dark:text-white text-4xl">Hang Senghong</label>
            </div>
            <div class="w-[200px] auto rounded-md">
                <a :href="senghong" target="_blank">
                    <img :src="senghong"
                        class="w-[200px] h-auto object-cover border-2 opacity-60 border-green-500 rounded-md" alt="">
                </a>
            </div>
        </div>
        <div class="flex justify-start items-center px-10 py-2 bg-gray-600 dark:bg-gray-900 w-full m-0  space-x-5 ">
            <NuxtLink class="text-white rounded-md px-3 py-1.5" :to="link.link"
                :class="{ 'border ': $route.path === link.link }" v-for="(link, index) in links" :key="index">
                <div class="flex space-x-2 justify-center w-full items-center ">
                    <img :src="link.img" alt="" width="20">
                    <span> {{ link.name }}</span>
                </div>
            </NuxtLink>

        </div>
        <div class=" w-full px-10  py-5">
            <NuxtPage />
        </div>
    </div>
</template>
<script setup lang="ts">
import senghong from '~/images/senghong.jpg';
import javascript from "~/assets/images/javascript.png";
import flutter from "~/assets/images/flutter.png";
import python from "~/assets/images/python.png";

const links = [
    { name: "Javascript", link: '/', img: javascript },
    { name: "Flutter", link: '/flutter', img: flutter },
    { name: "Python", link: '/python', img: python },
]


</script>
<style scoped></style>