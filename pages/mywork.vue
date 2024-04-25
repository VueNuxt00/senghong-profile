<template>
  <div class="grid justify-center">
    <div class="">
      <h2 class="text-center my-4">My Works</h2>
      <div class="container list text-center justify-center">
        <div class="space-y-4">
          <div class="one" v-for="(item, index) in evenData" :key="index">
            <img
              class="h-auto w-full duration-300"
              alt=""
              :src="item.projectImage"
              style="
                background-repeat: no-repeat;
                object-fit: contain;
                object-position: center;
              "
            />
            <div class="text-start">
              <div>{{ item.projectName }}</div>
              <a
                target="_blank"
                class="font-sans text-sm underline hover:text-blue-300 cursor-pointer"
                :ref="item.projectImage"
                :href="item.projectURL"
                >view project</a
              >
            </div>
          </div>
        </div>
        <div class="space-y-4 mt-10">
          <div class="one" v-for="(item, index) in oddData" :key="index">
            <img
              class="h-auto w-full duration-300"
              alt=""
              :src="item.projectImage"
              style="
                background-repeat: no-repeat;
                object-fit: contain;
                object-position: center;
              "
            />
            <div class="text-start">
              <div>{{ item.projectName }}</div>
              <a
                target="_blank"
                class="font-sans text-sm underline hover:text-blue-300 cursor-pointer"
                :ref="item.projectImage"
                :href="item.projectURL"
                >view project</a
              >
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis
        vitae, excepturi eius vel praesentium beatae voluptatibus, id eum,
        voluptatum quas. Laborum deleniti dolore veniam nobis culpa blanditiis
        quod asperiores?
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
// import {computed } from 'vue';
import image1 from "~/assets/images/slides/slide1.jpg";
import image2 from "~/assets/images/slides/slide2.jpg";
interface IWork {
  projectName: string;
  projectURL: string;
  projectImage: string;
}

const oddData = computed(() => {
  return workData.value.filter((item: IWork, index: number) => index % 2 !== 0);
});
const evenData = computed(() => {
  return workData.value.filter((item: IWork, index: number) => index % 2 === 0);
});

const workData = ref<IWork[]>([
  {
    projectName: "Project One01",
    projectURL: "../assets/images/slides/slide2.jpg",
    projectImage:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  },
  {
    projectName: "Project One02",
    projectURL: image1,
    projectImage: image2,
  },
  {
    projectName: "Porfolio",
    projectURL: "https://www.senghongkh.info/contact",
    projectImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjU_HPHR9sSTn37xHHkk0NF4Gs_kbHAe85Gg&s",
  },
  {
    projectName: "Project One04",
    projectURL: "../assets/images/slides/slide2.jpg",
    projectImage:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  },
  {
    projectName: "Project One05",
    projectURL: "../assets/images/slides/slide2.jpg",
    projectImage:
      "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg",
  },
  {
    projectName: "Project One04",
    projectURL: "../assets/images/slides/slide2.jpg",
    projectImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6H-wpoicibd_-GAWDXZUQGzX2kF3YeCwbJwikwdaq2Q&s",
  },
]);
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap");

* {
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
}
a {
  font-family: "roboto", sans-serif;
}
h2 {
  font-size: 20px;
  font-weight: 800;
}
p {
  font-size: 12px;
  font-weight: 400;
}
.list {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 20px;
}
.list div {
  max-width: 500px;
  overflow: hidden;
}
.list div img {
  border-radius: 10px;
}

@media (max-width: 700px) {
  .list {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0 10px;
  }
}
</style>
