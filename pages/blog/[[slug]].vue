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
<template>
    <div class="block w-10/12" >
        <div v-html="content"  :class="{darkMode: darkMode}" class="text-white PressStart2P"></div>
    </div>
</template>