<script setup>
import Nav from '../components/Nav.vue';
const darkMode= ref(false);
const toggle = () => {
    darkMode.value = !darkMode.value;
}
</script>
<template>
    <div :class="{darkMode: darkMode}"  class="default duration-200 transition-colors w-screen h-screen flex flex-row-reverse">
        <div class="w-full md:pr-0 2xl:w-80 lg:w-64 md:w-36 md:fixed md:h-screen
     text-center flex flex-col md:flex-col overflow-y-auto">
            <img v-if="darkMode === false" src="../public/TEST.png"/>
            <img v-if="darkMode" src="../public/TEST2.png"/>
            <div class="text-3xl mt-10 mb-10">MI(NH)-RAI</div>
            <label @change="toggle()" for="green-toggle" class="inline-flex self-center	 relative items-center mr-5 cursor-pointer">
                <input  type="checkbox" value="" id="green-toggle" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 
                            dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full 
                            after:content-[''] after:absolute after:top-0.5 after:left-[2px] before:bg-white after:bg-emerald-900 after:border-gray-300 
                            after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-900"></div>
            </label>
            <Nav />
        </div>
        <slot/>
    </div>
    
</template>
<style>
    .default{
        background-color: rgba(29,42,41,255);
    }
    .darkMode{
        background-color: rgba(25,38,48,255);
    }
</style>