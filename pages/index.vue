<script setup>
    import { Vue3Marquee } from 'vue3-marquee'
    import contents from './blog/contents.json';
    import 'simple-syntax-highlighter/dist/sshpre.css';
    import 'vue3-marquee/dist/style.css'
    import { marked } from 'marked';
    import hljs from 'highlight.js'
    const darkMode = inject('darkMode');
    setTimeout(()=>{
        document.querySelectorAll('pre').forEach((block)=>{
            hljs.highlightElement(block), 1
        })
       })
    onMounted(()=>{

    });
</script>
<template>
        <div class="sm:w-9/12 w-full">
            <Vue3Marquee :duration="18" :class="{darkMode: darkMode}" class="text-slate-200 SourceCode mt-4"> 🏕️  Welcome Traveller, stay awhile and listen 🏕️  </Vue3Marquee>
            <div :class="{darkMode: darkMode}" class="text-md PressStart2P text-slate-200 text-center">
                <Cow :darkMode="darkMode"/>
            </div>
            <div class="ml-10 text-xl text-emerald-600 mt-5 flex flex-col" v-for="content in contents" :key="content.slug">
                <NuxtLink class="PressStart2P text-emerald-500 hover:text-emerald-600 underline-offset-2 underline text-center" :to="`/blog/${content.slug}`">{{ content.title }}</NuxtLink>
                <div class="md:w-1/2 align-middle self-center">
                <pre class="text-xs text-center" v-if="content.published != '.DS_Store'">Published: {{ content.published }}  <pre>Reading_Time: {{ content.readingTime }} minutes</pre></pre>
                </div>
            </div>

        </div>
</template>

<style src="./../assets/styles/night-owl.css"></style>
