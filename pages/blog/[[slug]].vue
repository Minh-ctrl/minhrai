<script setup>
    // const darkMode = inject('darkMode');
    import { inject } from 'vue';
    import contents from './contents.json';
    import { marked } from 'marked';
    import hljs from 'highlight.js'
    // const content = ref('');
    let content;
    const route = useRoute();
    let slug = route.params.slug;

    for (let i=0; i < contents.length; i++){
        if (slug === contents[i].slug){
            content = contents[i].body;
        }
    }
    onMounted(()=>{
       setTimeout(()=>{
        document.querySelectorAll('pre').forEach((block)=>{
            hljs.highlightElement(block), 100
        })
       })
    });
</script>
<template >
    <div class="sm:w-9/12 w-full">

        <div class="sm:m-0 mt-10">
            <div class="italic text-emerald-500 PressStart2P text-center text-3xl xs:mt-2 mt-6" >{{slug}}</div>
            <div class="ml-10 text-lg text-slate-200 SourceCode mt-10" v-html="content"/> 
        </div>
    </div>
</template>