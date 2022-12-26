<script setup>
    import contents from './contents.json'
    // import { Vue3Marquee } from 'vue3-marquee'

    import hljs from 'highlight.js'
    setTimeout(()=>{
            document.querySelectorAll('pre').forEach((block)=>{
                hljs.highlightElement(block), 1
            })
        });
</script>
<template>
    <div class="sm:w-9/12 w-full">
        <!-- <Vue3Marquee :duration="18" :class="{darkMode: darkMode}" class="text-slate-200 SourceCode mt-4 md:visible">  LC Questions will be solved in Python 🐍  </Vue3Marquee> -->
        <div class="text-xl text-emerald-600 mt-5 flex flex-col" v-for="content in contents" :key="content.slug">
            <!-- <pre class="xs:text-xs text-center tag mt-10" v-if="content.published != '.DS_Store'">{{content.taglines}}</pre> -->
            <NuxtLink class="PressStart2P text-emerald-500 hover:text-emerald-600 underline-offset-2 underline text-center" :to="`/data_structure/ds/${content.slug}`">{{ content.title }}</NuxtLink>
            <div class="md:w-1/2 align-middle self-center">
                <pre class="xs:text-xs text-center" v-if="content.published != '.DS_Store'">Published: {{ content.published }}  <pre>Reading_Time: {{ content.readingTime }} minutes</pre></pre>
            <!-- <div v-for="tagline in content.taglines" :key="tagline" class="text-slate-500 text-xs"> {{ tagline }}</div> -->
            </div>
        </div>
    </div>
</template>

