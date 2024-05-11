
<template>
  <div
    class="flex flex-col items-center w-full justify-center p-1 md:px-[80px]"
  >
    <image-slider
      :images="Images"
      :next-slide="nextSlide"
      :prev-slide="prevSlide"
      :current-index="currentIndex"
      @selectedIndex="selectedIndex"
    ></image-slider>

    <div class="flex w-full justify-center flex-wrap items-center md:p-10 p-4">
      <div
        id="content"
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
import useSkill from "~/composables/useSkill";
import { onMounted } from "vue";
const { skills, currentIndex, Images, nextSlide, prevSlide, selectedIndex } =
  useSkill();
</script>
<style scoped>
.UpdateButton {
  background-color: blue;
  transition: background-color 0.5s, transform 0.5s;
}

.change {
  transform: translateX(42px);
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

#content {
  animation: fade-in 0.5s linear forwards;
  animation-timeline: view();
  animation-range: 100px 300px;
  /* animation-range-end: contain; */
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
