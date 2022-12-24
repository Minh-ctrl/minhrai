<script setup>
    import { inject } from 'vue';
    import test from './test.json';
    import { marked } from 'marked';
    const darkMode = inject('darkMode');
    const {$markdown} = useNuxtApp();
    const { data, error } = await useAsyncData("post", () => GqlPostType());
    const content = ref('');
    const route = useRoute();
    let slug = route.params.slug;
    // let definedData = data.value.allPosts.filter((x)=>x.slug === slug)[0];
    onMounted(()=>{
        content.value = marked.parse(test[0].content);
    });
    console.log(test);
</script>
<template >
    <div class="sm:w-9/12 w-full">
        <div   class="italic text-emerald-500 PressStart2P text-center text-3xl xs:mt-2 mt-6" >{{test[0].title}}</div>
        <div class="sm:m-0 mt-10">
            <div v-html="content"  :class="{darkMode: darkMode}" class="text-slate-200 SourceCode md:m-3  m-3 mt-20"></div>
        </div>
    </div>
</template>