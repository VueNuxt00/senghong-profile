<template>
    <div class="flex w-full justify-center items-center lg:p-10 ">
        <div
            class="w-[700px] relative my_animated bg-gray-800 h-screen justify-center flex items-center rounded-[10px] my-5 sm:mt-0">
            <!--  -->
            <div class="dark:text-white absolute top-5 md:top-20 font-bold text-2xl md:text-4xl hover:underline">Contact Me</div>
            <div
                class="md:w-[800px] w-[calc(100vw-50px)] absolute h-[500px] bg-gray-200 rounded-[15px] shadow-md shadow-green-900">
                <div class="w-full relative h-full flex justify-center">
                    <!-- My info -->
                    <div
                        class=" flex justify-center w-[300px] md:w-[400px] bg-gray-400 py-10 -top-10  absolute -right-[10px] md:right-[-50px] md:top-10 rounded-[20px] shadow-md shadow-gray-500">
                        <div class="text-gray-100 space-y-2 justify-center flex-col flex">
                            <div class="text-lg font-medium text-white">Hang Senghong</div>
                            <div v-for="(info, index) in myInfo" :key="index" class=" space-x-2">
                                <span class="text-md font-medium">{{ info.title
                                }}:</span>
                                <span v-if="index === 1" class="text-blue-600"><a :href="info.data">{{ info.data
                                }}</a></span>
                                <span v-else>{{ info.data }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="absolute top-[180px] md:top-10 md:left-[60px] space-y-1 rounded-md hover:shadow-md p-2">
                        <div class="flex flex-col space-y-0">
                            <label for="name">Your Name</label>
                            <input type="text"
                                class="px-1 rounded-md  outline-none focus:ring-yellow py-1 ring-1 ring-green-500">
                        </div>
                        <div class="flex flex-col space-y-0">
                            <label for="email">Email</label>
                            <input type="text"
                                class="px-1 rounded-md  outline-none focus:ring-yellow py-1 ring-1 ring-green-500">
                        </div>
                        <div class="flex flex-col space-y-0">
                            <label for="name">Phone</label>
                            <input type="number"
                                class="px-1 rounded-md  outline-none focus:ring-yellow py-1 ring-1 ring-green-500">
                        </div>
                        <div class="flex flex-col space-y-0">
                            <label for="name">Message</label>
                            <textarea name="" id="" cols="30" rows="3"
                                class="px-1 rounded-md  outline-none focus:ring-yellow py-1 ring-1 ring-green-500"></textarea>
                        </div>

                    </div>
                    <!-- button -->
                    <div class=" absolute top-[480px] text-white h-full md:right-[-20px]">
                        <button class="px-4 py-1.5 bg-yellow-500 rounded-md"
                            @click=" meme === 'test' ? open2() : open3()">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts" >
import { myInfo } from '~~/interfaces/interface'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
const meme = ref<string>("test")

const open2 = () => {
    ElMessage({
        message: 'Message has been sent',
        type: 'success',

    })
}
const open3 = () => {
    ElMessage({
        message: 'Please try again',
        type: 'error',
    })
}
</script>
<style scoped>
.my_animated {
    animation: from_right 0.5s ease-out;
}

@keyframes from_right {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
}
</style>