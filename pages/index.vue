<script setup>
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
</script>

<template>
        <div class="sm:w-9/12 w-full">


            <div class="text-xl text-emerald-600 mt-5 flex flex-col" v-for="content in contents" :key="content.slug">
                <NuxtLink class="PressStart2P text-emerald-500 hover:text-emerald-600 underline-offset-2 underline text-center" :to="`/blog/${content.slug}`">{{ content.title }}</NuxtLink>
                <div class="md:w-1/2 align-middle self-center">
                <pre class="md:text-xs text-center " v-if="content.published != '.DS_Store'">Published: {{ content.published }}  <pre>Reading_Time: {{ content.readingTime }} minutes</pre></pre>
                </div>
            </div>
        </div>
</template>

<style src="./../assets/styles/night-owl.css"></style>
<style >
    pre{
        font-size: 0.5rem;
        line-height: 0.5rem;
    }

</style>