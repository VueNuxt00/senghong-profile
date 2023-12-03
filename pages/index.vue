<template>
    <div class="flex flex-col items-center w-full justify-center  top-0  m-0 md:px-[80px]">

        <div class="flex justify-between items-start w-full space-x-2 h-full mt-4">
            <div class="myanimation w-2/4 h-[500px] border-2 rounded-md overflow-hidden">
                <img class=" w-full h-full object-cover" src="~~/assets/images/senghongpic.jpg" alt="">
            </div>
            <div class="w-full">
                <span class=" dark:text-gray-100 text-[120px] font-[Roboto]">
                    {{ `seng hong`.toUpperCase() }}
                </span>
                <p class=" dark:text-gray-100 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab quibusdam numquam veritatis, at dolorem
                    assumenda perferendis molestiae ex porro suscipit corrupti alias ea enim recusandae voluptas quaerat
                    exercitationem ratione cumque tempore aliquam repellendus iusto earum? Aliquid doloremque porro illum
                    molestiae cum, ea nisi nesciunt illo accusamus expedita maxime atque laudantium placeat voluptas,
                    distinctio
                    ducimus hic? Id temporibus, fuga modi quisquam reprehenderit doloribus obcaecati rerum aut saepe eaque
                    cumque illum non ut dolores! Amet inventore sequi deserunt! Ex, perferendis impedit cum recusandae saepe
                    magni eligendi tempore modi, debitis ea doloremque a? Excepturi in fuga hic! Repellendus fugiat odit sit
                    atque et cupiditate, sint labore cumque itaque? Repudiandae enim vero nulla ducimus omnis! Blanditiis
                    quisquam repudiandae quod molestiae sapiente recusandae magni quae debitis numquam nesciunt architecto
                    vitae, voluptatem vel quasi unde labore inventore voluptas eveniet. Doloribus amet aliquid ipsum tenetur
                    rem, molestiae optio vitae dolorem odio ullam perferendis ducimus tempore similique aliquam pariatur
                    fugiat
                    culpa, saepe veniam consectetur minima ad voluptate labore dicta. Perspiciatis expedita possimus
                    voluptate
                    dicta vitae illo excepturi, illum quidem nobis animi voluptatem quam cumque cupiditate quos adipisci
                    culpa
                    sequi eos debitis molestiae facere dignissimos obcaecati voluptates delectus. Dolorum laborum aspernatur
                    magnam voluptates eum tenetur sapiente omnis perspiciatis.
                </p>
            </div>

        </div>




        <div class="flex w-full justify-center  flex-wrap items-center md:p-10 p-4">
            <div v-for="(skill, index) in skills" :key="index" @click="openFullImage()"
                class="md:min-w-[400px] w-[350px] group  max-w-md  relative overflow-hidden h-[200px] dark:bg-gray-700 px-4 bg-gray-200 rounded-md mx-2 my-2 flex justify-center border-2 hover:shadow-md shadow-blue-400 border-transparent hover:border-green-500  items-center">
                <img :src="skill.bg"
                    class="h-full group-hover:scale-125 group-hover:opacity-70 w-full group-hover:duration-[1s] rounded-md absolute"
                    alt="">
                <!-- <FullImage :imageUrl="skill.bg" /> -->

                <h2 class="text-white text-3xl group-hover:text-4xl group-hover:text-red-400 font-bold z-[1]">
                    {{ skill.name }}</h2>
            </div>
        </div>

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
        transform: translateY(-50%);
        transform: translateX(-50%);
    }

    100% {
        transform: translateY(0);
        transform: translateX(0);
    }
}
</style>