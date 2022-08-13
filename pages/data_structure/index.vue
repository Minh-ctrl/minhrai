<script setup>
import { inject } from 'vue'
const darkMode = inject('darkMode');

</script>
<template>
    <div :class="{darkMode: darkMode}" class="PressStart2P links text-slate-200 appearance-none text-2xl"> work in progress... :P </div>
</template>