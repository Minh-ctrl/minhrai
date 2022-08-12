<script setup>
import { inject } from 'vue'
const darkMode = inject('darkMode');
const { data, error } = await useAsyncData("post", () => GqlPostType());

</script>
<template>
    <div class="block w-10/12">
        <div :class="{darkMode: darkMode}" class="text-md PressStart2P text-slate-200 text-center">
            a blog about... computer stuff (mostly)
            <div class=" text-xs"> grab a cup of joe while you read this :)</div>
            <h2 v-for ="post in data.allPosts" :key="post.title">{{post.title}}</h2>
        </div>
    </div>
</template>