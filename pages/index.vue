<script setup>
    import { Vue3Marquee } from 'vue3-marquee'
    import test from './blog/test.json';
    import hljs from 'highlight.js'
    import SshPre from 'simple-syntax-highlighter';
    import 'simple-syntax-highlighter/dist/sshpre.css';
    import 'vue3-marquee/dist/style.css'
    import { marked } from 'marked';
    const darkMode = inject('darkMode');
    const {$markdown} = useNuxtApp();

    let content = ref('');
    onMounted(()=>{
       content.value = marked.parse(test[1])
       setTimeout(()=>{
        document.querySelectorAll('pre').forEach((block)=>{
            hljs.highlightElement(block), 1000
        })
       })
    });
    console.log('check')
    console.log(test);
</script>
<template>
        <div class="sm:w-9/12 w-full">
            <Vue3Marquee :duration="18" :class="{darkMode: darkMode}" class="text-slate-200 SourceCode mt-4"> 🏕️  Welcome Traveller, stay awhile and listen 🏕️  </Vue3Marquee>
            <div :class="{darkMode: darkMode}" class="text-md PressStart2P text-slate-200 text-center">
                <Cow :darkMode="darkMode"/>
                <!-- <div v-for="names in test" :key="names.title">
                    <div class="text-md">{{ names.title }}</div>
                    <div class="text-sm"> {{ names.content }}</div>
                </div> -->
            </div>
            <div class="ml-5 text-lg text-slate-200 SourceCode mr-5" v-html="content"/> 
            <div class="w-10/12">
            </div>
        </div>
</template>

<style src="./../assets/styles/night-owl.css"></style>
