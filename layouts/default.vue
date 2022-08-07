<script setup>
import { provide } from 'vue';
const darkMode= ref(false);
const toggle = () => {
    darkMode.value = !darkMode.value;
}
provide('darkMode', darkMode);
</script>
<template>
    <div :class="{darkMode: darkMode}" class="default w-screen h-screen" >
        <div class="flex flex-row-reverse">
            <div class=" l:w-80 lg:w-64 md:w-32 md:fixed md:h-screen text-center flex flex-col md:flex-col overflow-y-auto">
                <label @change="toggle()" for="green-toggle" class=" self-center relative items-center mr-5 cursor-pointer">
                    <input  type="checkbox" value="" id="green-toggle" class="sr-only peer">
                    <div class="w-11 h-6 bg-white  peer dark:bg-white peer-focus:ring-green-300 
                        dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full 
                        after:content-[''] after:absolute after:top-0.5 after:left-[2px] before:bg-white after:bg-slate-200 after:border-gray-300 
                        after:border  after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
                </label>
                <img :class="{icon_inverted: darkMode}" src="/mokapot.gif"/>
                <div :class="{darkMode: darkMode}" class="title PressStart2P text-xl mt-10 mb-10 text-slate-200 ">THE_MOKA_POT</div>
                <Nav :darkMode="darkMode"/>
            </div>
        </div>
        <slot :darkMode="darkMode">
        </slot>
    </div>
</template>