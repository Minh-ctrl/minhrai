<script setup>
defineProps({
    darkMode: Boolean,
})
const exampleData= [{name: 'blog', id:1},{name: 'fav', id:2}, {name: 'about', id: 3}];


</script>
<template>
        <div class="-mt-10 md:mt-0">
            <ul :class="{darkMode: darkMode}" class="PressStart2P links text-slate-200 text-2xl md:text-base hidden md:flex flex-col justify-center mt-4 items-center hover:scale-110 cursor-pointer" v-for="example in exampleData" :key="example.id">
                <li>{{example.name}}</li>
            </ul>
        </div>
</template>

<style scoped>

</style>