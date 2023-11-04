<template>
    <div class="fixed inset-4 z-50 flex justify-center items-center bg-black bg-opacity-50">
        <img :src="imageUrl" class="w-[600px] h-auto object-cover" />
    </div>
</template>
  
<script>
export default {
    props: {
        imageUrl: {
            type: String,
            required: true,
        },
    },
};
</script>