<template>
  <div class="flex flex-col w-full">
    <!-- Nav bar -->
    <NavBar />
    <!-- Main content -->
    <div class="dark:bg-gray-900 w-full min-h-[100vh]">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <Footer />
  </div>
</template>
