<script setup>
import { inject } from 'vue'
const darkMode = inject('darkMode');

</script>
<template>
    <div :class="{darkMode: darkMode}" class="PressStart2P text-white">About</div>
</template>