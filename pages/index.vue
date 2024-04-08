<template>
  <div
    class="flex flex-col items-center w-full justify-center p-1 md:px-[80px]"
  >
    <image-slider
      :images="images"
      :next-slide="nextSlide"
      :prev-slide="prevSlide"
      :current-index="currentIndex"
      @selectedIndex="selectedIndex"
    ></image-slider>

    <div class="flex w-full justify-center flex-wrap items-center md:p-10 p-4">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="md:min-w-[400px] w-[350px] group max-w-md relative overflow-hidden h-[200px] dark:bg-gray-700 px-4 bg-gray-200 rounded-md mx-2 my-2 flex justify-center border-2 hover:shadow-md shadow-blue-400 border-transparent hover:border-green-500 items-center"
      >
        <img
          :src="skill.bg"
          class="h-full group-hover:scale-125 group-hover:opacity-70 w-full group-hover:duration-[1s] rounded-md absolute"
          alt=""
        />
        <!-- <FullImage :imageUrl="skill.bg" /> -->

        <h2
          class="text-white text-3xl group-hover:text-4xl group-hover:text-red-400 font-bold z-[1]"
        >
          {{ skill.name }}
        </h2>
      </div>
    </div>

    <div
      class="dark:text-gray-50 text-2xl flex w-full font-medium border-b dark:border-gray-400 dark:hover:text-green-600"
    >
      {{ `constact me`.toUpperCase() }}
    </div>
  </div>
</template>
<script setup lang="ts">
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
];

import slide1 from "~/assets/images/slides/slide1.jpg";
import slide2 from "~/assets/images/slides/slide2.jpg";
import slide3 from "~/assets/images/slides/slide3.jpg";
const currentIndex = ref(0);
const images = [
  {
    src: slide1,
    alt: "Image 1",
  },
  {
    src: slide2,
    alt: "Image 2",
  },
  {
    src: slide3,
    alt: "Image 3",
  },
];

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
  console.log(currentIndex.value);
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const selectedIndex = (index: number) => {
  currentIndex.value = index;
};

onMounted(() => {
  setInterval(() => {
    nextSlide();
  }, 5000);
});
</script>
<style scoped>
.UpdateButton {
  background-color: blue;
  transition: background-color 0.5s, transform 0.5s;
}

.change {
  transform: translateX(42px);

  /* opacity: 0; */
}

@keyframes change {
  from {
    background-color: blue;
    transform: translateX(42px);
  }

  to {
    background-color: blue;
    transform: translateX(42px);
  }
}

.myanimation::backdrop {
  background: red;
}

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

.text {
  text-shadow: 5px 5px 10px rgb(207, 191, 191), -5px -5px 4px blue;
}
</style>
