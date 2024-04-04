<template>
    <div class="min-h-[100vh] dark:text-gray-200">
        <div v-if="id === 1">
            <span>Javascript</span>
        </div>
        <div v-else-if="id == 2">
            <span>Express Js</span>
        </div>
        <div v-else>
            <!-- <span>{{ $t('welcome') }}</span> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const id = ref();
router.beforeEach((to, from, nuxt) => {
    id.value = to.params.id
    console.log(from)
})
</script>