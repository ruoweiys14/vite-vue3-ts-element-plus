<template>
    <h2>欢迎使用vite+vue3+ts+pinia+vue-router4</h2>
    <div class="root">{{ userStore.name }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/store/user';
import '@/styles/index.css';
export default defineComponent({
    name: 'UsePiniaDemo',
    setup() {
        const userStore = useUserStore();

        return {
            userStore
        };
    }
});
</script>