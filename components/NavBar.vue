<template>
    <div
        class="md:flex hidden w-full bg-gray-200 text-gray-800  dark:bg-gray-900 border-b-[0.5px] dark:text-white justify-center px-10 py-2 space-x-4 sticky top-0 z-[2]">
        <div class="w-full flex justify-center">
            <NuxtLink :to="link.href" @click="console.log($route.matched[0].path)" v-for="(link, index) in links"
                :key="index" class="  rounded-md px-3 py-1"
                :class="{ 'border border-gray-300 text-green-600 font-bold': $route.matched[0].path === link.href }">{{
                    link.name }}</NuxtLink>

        </div>
        <!-- Switch button -->
        <el-tooltip :content="value + ' Mode'" placement="top">
            <el-switch v-model="value" @click="toggleDark()"
                style=" --el-switch-on-color:  #00b058; --el-switch-off-color: #6C6464; --el-switch-border-color:#0803FF"
                active-value="Dark" inactive-value="Light" />
        </el-tooltip>
    </div>
    <div
        class="md:hidden justify-center items-center  flex w-full p-2 fixed z-10 bottom-0 bg-gray-800 text-white font-bold">
        <!-- <span>Navigation Bar</span> -->
        <nuxt-link :to="link.href" v-for="link in links" :key="link.name" class="w-full flex  justify-evenly"
            :class="{ 'text-green-500': $route.path === link.href }">
            <span>{{ link.name }}</span>
        </nuxt-link>
    </div>
</template>
<script setup lang="ts">
import { links, toggleDark, isDark } from '@/interfaces/interface'

import { ref } from "vue"
const value = ref('')
</script>