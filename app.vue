<template>
  <div class="flex flex-col w-full ">
    <!-- Nav bar -->
    <NavBar />
    <!-- Main content -->
    <div class=" dark:bg-gray-900 min-h-screen relative m-0 ">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <Footer  />
  </div>
</template>
  