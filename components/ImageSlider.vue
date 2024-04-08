<template>
  <div class="w-full relative">
    <div
      v-for="(image, index) in images"
      :key="index"
      :class="{ hidden: index !== props.currentIndex }"
    >
      <div class="mx-4 h-[250px] lg:h-[400px] rounded-lg overflow-hidden">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-fill"
        />
      </div>
    </div>
    <div class="w-full justify-between flex absolute px-5 top-[45%]">
      <button
        @click="props.prevSlide"
        class="bg-gray-700 bg-opacity-20 hover:bg-opacity-50 rounded-md px-2 py-0.5"
      >
        <Icon
          name="material-symbols:arrow-back-ios-new-rounded"
          color="white"
        />
      </button>
      <button
        @click="props.nextSlide"
        class="bg-gray-700 bg-opacity-20 hover:bg-opacity-50 rounded-md px-2 py-0.5"
      >
        <Icon name="material-symbols:arrow-forward-ios" color="white" />
      </button>
    </div>
    <div
      class="flex absolute justify-center w-full bottom-2 font-bold text-white"
    >
      <button
        v-for="(im, index) in images"
        :key="index"
        class="font-bold text-[30px]"
        :class="{ 'text-green-500': props.currentIndex === index }"
        @click="$emit('selectedIndex', index)"
      >
        -
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Image {
  src: string;
  alt: string;
}

const props = defineProps({
  currentIndex: {
    type: Number,
    require: true,
  },
  images: Array<Image>,
  nextSlide: Function,
  prevSlide: Function,
});
</script>

<style scoped></style>
