<template>
    <div class="flex w-full justify-center items-center lg:p-10 ">
        <form method="POST" @submit.prevent="AddMessage" class="w-full flex h-full justify-center">
            <div
                class="w-[700px]  relative my_animated dark:bg-gray-800 bg-gray-300 h-screen justify-center flex items-center rounded-[10px] my-5 sm:mt-0">
                <!--  -->
                <div class="dark:text-white absolute top-5 md:top-15 font-bold text-2xl md:text-4xl hover:underline">Contact
                    Me
                </div>
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
                                <input type="text" placeholder="enter name" v-model="Info.name"
                                    class="px-1 rounded-md  outline-none focus:ring-yellow py-1 ring-1 ring-green-500">
                            </div>
                            <div class="flex flex-col space-y-0">
                                <label for="email">Email</label>
                                <input type="text" placeholder="enter your email address" v-model="Info.email"
                                    class="px-1 rounded-md  outline-none focus:ring-yellow py-1 ring-1 ring-green-500">
                            </div>
                            <div class="flex flex-col space-y-0">
                                <label for="name">Phone</label>
                                <input type="number" placeholder="enter phone number" v-model="Info.phone"
                                    class="px-1 rounded-md  outline-none focus:ring-yellow appearance-none py-1 ring-1 ring-green-500">
                            </div>
                            <div class="flex flex-col space-y-0">
                                <label for="name">Message</label>
                                <textarea name="" id="" cols="30" rows="3" placeholder="enter your message"
                                    v-model="Info.message"
                                    class="px-1 rounded-md  outline-none focus:ring-yellow py-1 ring-1 ring-green-500"></textarea>
                            </div>

                        </div>
                        <!-- button -->
                        <div class=" absolute top-[480px] text-white h-full md:right-[-20px]">
                            <button class="px-4 py-1.5 bg-yellow-500 rounded-md" type="submit" :disabled="isLoading"
                                :class="{ 'bg-gray-400': isLoading }"><span v-if="isLoading">Sending...</span><span
                                    v-else>Submit</span></button>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts" >
import { myInfo } from '~~/interfaces/interface'
import { ErrorMessage, SuccessMessage } from '~/utils/message'
import axios from "axios";
import { ref } from 'vue'
const isLoading = ref<boolean>(false)
interface myInfo {
    name: string,
    email: string,
    phone: number | null,
    message: string,
}

const Info = reactive<myInfo>({
    name: '',
    email: '',
    phone: null,
    message: '',
})



const chatID: number = 947503787
const token = "6729315582:AAEh0uM15vNhvEF9-qRyGHRGzTa24TnqSdo"
const AddMessage = async () => {
    isLoading.value = true
    try {

        if (Info.name && Info.message && Info.message != '') {
            const messages: string = `Name: ${Info.name} \n Email: ${Info.email} \n Phone: ${Info.phone} \n Message: ${Info.message}`;
            const api: string = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${messages}`
            await axios.post(api)
            SuccessMessage()
            isLoading.value = false
            Info.email = ''
            Info.name = ''
            Info.message = ''
            Info.phone = null

        } else {
            ErrorMessage("Please enter valid values")
            isLoading.value = false
        }
    } catch (error) {
        ErrorMessage(error)
    }
}
</script>