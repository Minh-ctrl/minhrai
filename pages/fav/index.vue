<script setup>
import { inject } from 'vue'
const darkMode = inject('darkMode');

</script>
<template>
    <div :class="{darkMode: darkMode}" class="PressStart2P text-white">Things I like... That might or might not be programming</div>
</template>