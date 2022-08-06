<script setup>
const darkMode= ref(false);
const toggle = () => {
    darkMode.value = !darkMode.value;
}
</script>
<template>
    <div :class="{darkMode: darkMode}" class=" default w-screen h-screen" >
        <div class="flex flex-row-reverse">
            <div class=" 2xl:w-80 lg:w-64 md:w-32 md:fixed md:h-screen
        text-center flex flex-col md:flex-col overflow-y-auto">
                <div class="md:m-0 sm:m-0">
                    <img v-if="darkMode === false" src="/TEST.png"/>
                    <img v-if="darkMode" src="/TEST2.png"/>
                </div>
                <div class="text-3xl mt-10 mb-10">M-RAI</div>
                <Nav/>
                <label @change="toggle()" for="green-toggle" class=" self-center relative items-center mr-5 cursor-pointer">
                    <input  type="checkbox" value="" id="green-toggle" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 
                        dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full 
                        after:content-[''] after:absolute after:top-0.5 after:left-[2px] before:bg-white after:bg-emerald-900 after:border-gray-300 
                        after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-900"></div>
                </label>
            </div>
        </div>
        <slot />
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