<script setup>
    import contents from './../contents.json/';
    import hljs from 'highlight.js';
    let content;
    const route = useRoute();
    let slug = route.params.slug;
    for (let i=0; i < contents.length; i++){
        if (slug === contents[i].slug){
            content = contents[i].body;
        }
    }
    setTimeout(()=>{
        document.querySelectorAll('pre').forEach((block)=>{
            hljs.highlightElement(block), 1
        })
       });
</script>
<template >
    <div class="sm:w-9/12 w-full">
        <div class="sm:m-0 mt-10">
            <div class="italic text-emerald-500 PressStart2P text-center text-3xl xs:mt-2 mt-6" >{{slug}}</div>
            <div class="pl-3 text-lg text-slate-200 SourceCode mt-10" v-html="content"/> 
        </div>
    </div>
</template>