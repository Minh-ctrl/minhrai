<script setup>
defineProps({
    darkMode: Boolean,
})
const exampleData= [{name: 'Blog', id:1, route:'/'},{name: 'Favs (TBA)', id:2, route:'/fav'},  {name:'DSA', id: 3, route: '/data_structure'},  {name: 'About', id: 4, route:'/about'}];
</script>
<template>
        <div class="">
            <NuxtLink :to="`${example.route}`" :class="{darkMode: darkMode}" class="PressStart2P links hover:text-emerald-500 text-slate-200 text-sm  m-2 xs:text-5xl md:text-base  md:flex flex-col justify-center  items-center hover:scale-110 cursor-pointer" v-for="example in exampleData" :key="example.id">
                <li class ="coffeMug" >{{example.name}}</li>
            </NuxtLink>
            <Footer :darkMode="darkMode"/>
        </div>
</template>

<style scoped>

</style>