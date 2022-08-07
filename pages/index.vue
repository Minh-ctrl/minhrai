<script setup>
    import { inject } from 'vue'
    const darkMode = inject('darkMode');
</script>
<template>
        <div :class="{darkMode: darkMode}" class="text-3xl PressStart2P text-white">
            Testing
        </div>
</template>