<template>
    <div class="flex w-full justify-center items-center m-5 lg:px-10">
        <!-- Form contact -->
        <div class="w-full"></div>
        <!-- Information -->
        <div class="flex flex-col w-full items-center justify-center dark:text-gray-100">
            <div class="w-[400px]">
                <form @submit.prevent="onSubmit" class="flex flex-col space-y-4 w-full">
                    <div class=" flex flex-col items-start justify-start w-full">
                        <label for="name">Username</label>
                        <input type="text" id="first_name" v-model="name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John" required>
                    </div>
                    <!-- email -->
                    <div class=" flex flex-col items-start justify-start">
                        <label for="name">Username</label>
                        <input type="text" id="first_name" v-model="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John" required>
                    </div>
                    <!-- phone -->
                    <div class=" flex flex-col items-start justify-start">
                        <label for="name">Username</label>
                        <input type="text" id="first_name" v-model="phone"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John" required>
                    </div>
                    <!-- Message -->
                    <div class=" flex flex-col items-start justify-start">
                        <label for="name">Message</label>
                        <textarea id="message" rows="4" v-model="message"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."></textarea>

                    </div>
                    <div>
                        <button class="px-3 py-1 bg-green-500 rounded-md" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script  lang="ts">
interface data {
    name: string,
    email: string,
    phone: number,
    message: string,
}
export default {
    // data() {
    //     return {
    //         name: '',
    //         email: '',
    //         phone: '',
    //         message: '',
    //     }
    // },

    setup() {
        const name = ref('');
        const email = ref('');
        const phone = ref('');
        const message = ref('');

        return { name, email, phone, message }

    },
    methods: {
        onSubmit() {
            const messages = "";

            console.log(this.name, this.email, this.phone, this.message)
        }
    }
}
</script>