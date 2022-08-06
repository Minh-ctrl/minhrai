<script setup>
const darkMode= ref(false);
const switchRef = ref({checked: false});
const exampleData= [{name: 'blog', id:1},{name: 'fav', id:2}, {name: 'about', id: 3}];

if (process.client){
    if (window.matchMedia && window.matchMedia("prefers-color-scheme: dark").matches){
        nextTick(()=>{
            switchRef.value.checked= true;
            switchToggle();
        })
    }
}
const darkAttrs = () => { 
    if(darkMode.value){
        document.documentElement.setAttribute('data-mode', 'dark')
        document.body.classList.add('darker')
    }
    else{
        document.documentElement.removeAttribute('data-mode')
    }
}
const switchToggle = () => {
    if (switchRef.value.checked){
        darkMode.value = true
        darkAttrs()
    }else{
        darkMode.value = false
        darkAttrs()

    }
}
const switchEvent = () => {
    console.log('here?')
    nextTick(()=>{
        switchToggle()
    })
}
</script>
<template>
    <div class="w-full md:p-8 md:pr-0 2xl:w-80 lg:w-64 md:w-36 md:fixed md:h-screen
     text-center flex flex-col md:flex-col overflow-y-auto">
        <img v-if="darkMode === false" src="../public/c3d-studio-gamer-day-lamp1.jpg"/>
        <img v-if="darkMode" src="../public/c3d-studio-gamer-night-lamp1.jpg"/>
        <div class="text-3xl mt-10 mb-10">MI(NH)-RAI</div>
        <div class="flex-grow -mt-10 md:mt-0">
            <ul  class="m-5" v-for="example in exampleData" :key="example.id">
                <li>{{example.name}}</li>
            </ul>
            <label for="green-toggle" class="inline-flex relative items-center mr-5 cursor-pointer">
                <input @click="switchEvent()" type="checkbox" value="" id="green-toggle" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 
                            dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full 
                            after:content-[''] after:absolute after:top-0.5 after:left-[2px] before:bg-white after:bg-emerald-900 after:border-gray-300 
                            after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-900"></div>
            </label>
        </div>
    </div>
</template>