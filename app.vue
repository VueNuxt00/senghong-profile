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
