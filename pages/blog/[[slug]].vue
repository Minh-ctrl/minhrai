<script setup>
    const { data, error } = await useAsyncData("post", () => GqlPostType());
    const route = useRoute();
    let slug = route.params.slug;
    let definedData = data.value.allPosts.filter((x)=>x.slug === slug)[0];
    console.log(definedData);
</script>
<template>
    <div class="block w-10/12">
        <h1 class="text-white">{{definedData.title}}</h1>
        <div v-html="definedData.body" class="text-white"></div>
    </div>
</template>