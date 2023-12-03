<template>
    <div class="flex flex-col items-center w-full h-full justify-center sticky top-0 z-[1] m-0 md:px-[80px]">
        <div class="w-full flex justify-center flex-wrap p-5 space-x-4 items-center px-20 dark:text-gray-300">
            <div class="w-[200px] auto rounded-full">
            </div>
            <div>
                <div class="mb-2">
                    <label for="name" class=" dark:text-white text-2xl sm:text-4xl  font-bold">Hang Senghong</label>
                </div>
                <br>
                <p>Hello I'm Senghong, <br> I'm Studying at <NuxtLink to="https://www.norton-u.com/" target="_blank"
                        class="text-blue-500 hover:underline">Norton University</NuxtLink>, my major Software Development
                </p>
                <p>I am working as <span>QA</span> at <a href="https://www.techbodia.com/" target="_blank"
                        class="text-red-500  font-medium text-sm">Techbodia</a></p>
            </div>
        </div>
        <!-- Skill -->
        <div class="flex w-full justify-center  flex-wrap items-center md:p-10 p-4">

            <div v-for="(skill, index) in skills" :key="index" @click="openFullImage()"
                class="md:min-w-[400px] w-[350px] group  max-w-md myanimation relative overflow-hidden h-[200px] dark:bg-gray-700 px-4 bg-gray-200 rounded-md mx-2 my-2 flex justify-center border-2 hover:shadow-md shadow-blue-400 border-transparent hover:border-green-500  items-center">
                <img :src="skill.bg"
                    class="h-full group-hover:scale-125 group-hover:opacity-70 w-full group-hover:duration-[1s] rounded-md absolute"
                    alt="">
                <!-- <FullImage :imageUrl="skill.bg" /> -->
                <h2 class="text-white text-3xl group-hover:text-4xl group-hover:text-red-400 font-bold z-[1]">
                    {{ skill.name }}</h2>
            </div>
        </div>
        <!-- 
        <div class="flex justify-start items-center px-10 py-2 bg-gray-600 dark:bg-gray-900 w-full m-0  space-x-5 ">
            <NuxtLink class="text-white rounded-md px-3 py-1.5" :to="link.link"
                :class="{ 'border ': $route.path === link.link }" v-for="(link, index) in links" :key="index">
                <div class="flex space-x-2 justify-center w-full items-center ">
                    <img :src="link.img" alt="" width="20">
                    <span> {{ link.name }}</span>
                </div>
            </NuxtLink>

        </div> -->
        <!-- <div class=" w-full px-10  py-5">
            <NuxtPage />
        </div> -->
        <!-- Contact Me -->

        <div
            class="dark:text-gray-50 text-2xl flex w-full font-medium border-b dark:border-gray-400 dark:hover:text-green-600">
            {{ `constact me`.toUpperCase() }}
        </div>


    </div>
</template>
<script setup lang="ts">


import javascript from "~/assets/images/javascript.png";
import flutter from "~/assets/images/flutter.png";
import python from "~/assets/images/python.png";


// import {skills} from ".fullcion1"
const links = [
    { name: "Javascript", link: '/', img: javascript },
    { name: "Flutter", link: '/flutter', img: flutter },
    { name: "Python", link: '/python', img: python },
]

const openFullImage = () => {
    // alert("Open Full Image")
}

const skills = [
    {
        name: "Web Development",
        program: ["Node js", "Vue Js", "Nuxt Js"],
        bg: "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png",
    },
    {
        name: "Mobile Development",
        program: ["Node js", "Vue Js", "Nuxt Js"],
        bg: "https://www.ideamotive.co/hubfs/app%20development%20cost.png",
    },

    {
        name: "Design UI/UX",
        program: ["Node js", "Vue Js", "Nuxt Js"],
        bg: "https://img.freepik.com/free-vector/gradient-style-ui-ux-background_52683-69621.jpg",
    },
    // {
    //     name: "Machine Learning (ML)",
    //     program: ["Node js", "Vue Js", "Nuxt Js"],
    //     bg: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
    // },
];


</script>
<style scoped>
.myanimation {
    animation: frombottom 2s ease-in-out;
}

@keyframes frombottom {
    0% {
        transform: translateY(50%);
    }

    100% {
        transform: translateY(0);
    }
}
</style>