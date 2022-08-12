<script setup>
defineProps({
    darkMode: Boolean,
})
const exampleData= [{name: 'blog', id:1, route:'/'},{name: 'fav', id:2, route:'/fav'}, {name: 'about', id: 3, route:'/about'}];


</script>
<template>
        <div class="-mt-10 md:mt-0">
            <NuxtLink :to="`${example.route}`" :class="{darkMode: darkMode}" class="PressStart2P links text-slate-200 appearance-none text-2xl md:text-base hidden md:flex flex-col justify-center mt-4 items-center hover:scale-110 cursor-pointer" v-for="example in exampleData" :key="example.id">
                <li>{{example.name}}</li>
            </NuxtLink>
        </div>
</template>

<style scoped>

</style>