<template>
    <div class="w-full p-10 space-y-2">
        <div class="flex space-x-3  ">
            <input type="text" v-model="name" placeholder="enter value"
                class="px-2 rounded-full py-1.5 focus:ring-1 outline-none focus:ring-red-500">
            <button @click="addNew()"
                class=" bg-green-700 px-3 py-1.5 rounded-full text-md font-semibold text-gray-300">Add</button>
        </div>
        <div class="p-5 bg-gray-500 rounded-sm">
            <!-- {{ items }} -->
            <ol type="A" v-for="(item, index) in items" :key="index">
                <li><input type="checkbox" @change="CompletedItem(item.id)" v-model="item.complete"> {{ item.title }}<span
                        v-if="item.complete">✅</span></li>
            </ol>
        </div>
    </div>
</template>
<script setup lang="ts">
const name = ref('')
const isComplete = ref(false)

const items = ref()

import { ref } from "vue"
const dataList = ref([
    { id: 1, title: "Create test case", complete: false },
    { id: 2, title: "Create test case", complete: true },
])

const myData = JSON.parse(localStorage.getItem('dataList')!)
items.value = myData._value
// computed: {
//     this.addNew()
// }

const addNew = () => {
    const newData = {
        id: 3,
        title: name.value,
        complete: false,
    }
    dataList.value.push(newData)

    localStorage.setItem('dataList', JSON.stringify(dataList))
    items.value = myData._value

}


const CompletedItem = (id: number) => {
    // const item = items.value.find((item) => item.id === id);
}


</script>