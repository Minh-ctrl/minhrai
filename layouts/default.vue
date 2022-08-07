<script setup>
const darkMode= ref(false);
const toggle = () => {
    darkMode.value = !darkMode.value;
}
</script>
<template>
    <div :class="{darkMode: darkMode}" class="default w-screen h-screen" >
        <div class="flex flex-row-reverse">
            <div class=" 2xl:w-80 lg:w-64 md:w-32 md:fixed md:h-screen
        text-center flex flex-col md:flex-col overflow-y-auto">
                    <img :class="{icon_inverted: darkMode}" src="/mokapot.gif"/>
                <div :class="{darkMode: darkMode}" class="title PressStart2P text-xl mt-10 mb-10 text-slate-200 ">THE_MOKA_POT</div>
                <Nav :darkMode="darkMode"/>
                <label @change="toggle()" for="green-toggle" class=" self-center relative items-center mr-5 cursor-pointer">
                    <input  type="checkbox" value="" id="green-toggle" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200  peer dark:bg-gray-700 peer-focus:ring-green-300 
                        dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full 
                        after:content-[''] after:absolute after:top-0.5 after:left-[2px] before:bg-white after:bg-slate-200 after:border-gray-300 
                        after:border  after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-900"></div>
                </label>
            </div>
        </div>
        <slot/>
    </div>

</template>