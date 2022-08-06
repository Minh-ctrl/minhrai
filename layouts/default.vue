<script setup>
import Nav from '../components/Nav.vue';
</script>
<template>
    <!-- navigation bar, every page will always have this -->
    <div class="w-screen h-screen default flex flex-row-reverse">
        <Nav />
        <slot/>
    </div>
    
</template>
<style>
    .default{
        background-color: rgba(29,42,41,255);
    }
</style>