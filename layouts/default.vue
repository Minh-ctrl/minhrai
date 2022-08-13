<script setup>
import { provide } from 'vue';
const darkMode= ref(false);
provide('darkMode', darkMode);
const toggle = () => {
    darkMode.value = !darkMode.value;
};
watchEffect(()=>{
  useHead({
    title: 'The Moka Pot',
    // or, instead:
    // titleTemplate: (title) => `My App - ${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
      class: darkMode.value ? 'darkMode' : 'backgroundDark'
    }
  });
});
</script>
<template>
    <div>
        <div class="flex flex-row-reverse">
            <div class=" l:w-80 lg:w-64 md:w-32 md:fixed md:h-screen text-center flex flex-col md:flex-col overflow-y-auto">
                <label @change="toggle()" for="green-toggle" class=" self-center relative items-center mr-5 cursor-pointer">
                    <input  type="checkbox" value="" id="green-toggle" class="sr-only peer">
                    <div class="w-11 h-6 bg-white peer dark:bg-white  
                        peer-checked:after:translate-x-full 
                        after:content-[''] after:absolute after:top-0.5 after:left-[2px] before:bg-white after:bg-slate-200 after:border-gray-300 
                        after:border  after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
                </label>
                <img :class="{icon_inverted: darkMode}" src="/mokapot.gif"/>
                <div :class="{darkMode: darkMode}" class="title PressStart2P text-xl text-slate-200 ">THE_MOKA_POT</div>
                <div :class="{darkMode: darkMode}"  class="text-xs text-slate-200 PressStart2P">version 0.70</div>
                <Nav :darkMode="darkMode"/>
            </div>
        </div>
        <slot/> 
    </div>
</template>