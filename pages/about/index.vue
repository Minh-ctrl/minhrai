<script setup>
import { inject } from 'vue'
const darkMode = inject('darkMode');

</script>
<template>
        <div class="sm:w-9/12 w-full">
            <div class="flex flex-col">
                <!-- <img class="w-20" src="./../../public/gopher.png"/> -->
                <div class="ml-5 text-lg text-slate-200 mt-5 PressStart2P self-center"> 
                    Hey there! My name is Minh.
                </div>
                <div class="SourceCode text-slate-200 ml-5 mt-5 mr-5 xs:text-center "> 
                    I'm a Full-Stack Engineer in Japan within <p class="text-emerald-500 inline">Web Development</p>.
                    Personally, I believe in the <p class="text-emerald-500 inline"> Learn &lt;==> Practice</p> loop.
                    This website here serves as a journal for me to codify the knowledge I've accumulated from work/study/life. 
                    Expect to see blog posts relating to  <p class="text-emerald-500 inline"> Technologies (most likely web)</p>  I've been studying as well as <p class="inline text-emerald-500">Data structure and algorithms Studies</p>.
                    Occasionally I might post a thing or two related to music in  <p class="text-emerald-500 inline">Favs</p> (#under-construction).
                </div>
                <div class="SourceCode text-slate-200 ml-5 mt-5 mr-5  text-center">
                    Thanks for stopping by.
                </div>
                <div class="SourceCode text-slate-200 ml-5  mr-5  text-center">
                    Ciao ( ﾟ▽ﾟ)/
                </div>
            </div>
        </div>
</template>