<script setup>
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
    <div class="block w-10/12">
        <div v-html="content" class="text-white PressStart2P"></div>
    </div>
</template>