<script setup>
    import { inject } from 'vue';
    const darkMode = inject('darkMode');
    const {$markdown} = useNuxtApp();
    const { data, error } = await useAsyncData("post", () => GqlPostType());
    const content = ref('');
    const route = useRoute();
    let slug = route.params.slug;
    let definedData = data.value.allPosts.filter((x)=>x.slug === slug)[0];
    onMounted(()=>{
        content.value = $markdown.render(definedData.body);
    });
    
</script>
<template >
    <div class="sm:w-9/12 w-full">
        <div  :class="{darkMode: darkMode}" class="italic text-emerald-500 PressStart2P text-center text-3xl xs:mt-2 mt-6" >{{definedData.title}}</div>
        <div class="sm:m-0 mt-10">
            <div v-html="content"  :class="{darkMode: darkMode}" class="text-slate-200 SourceCode m-4"></div>
        </div>
    </div>
</template>