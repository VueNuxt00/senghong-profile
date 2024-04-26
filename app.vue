<template>
  <div class="flex flex-col w-full">
    <!-- Nav bar -->
    <div class="sticky top-0 z-10 flex w-full justify-center">
      <NavBar />
    </div>
    <!-- Main content -->
    <div class="dark:bg-gray-900 w-full min-h-[100vh]">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
useSeoMeta({
  title: "Senghong",
  ogTitle: "Senghong",
  description:
    "This is the website description about my experience with daily work",
  ogDescription: "This is my amazing site, let me tell you all about it.",
});
</script>
