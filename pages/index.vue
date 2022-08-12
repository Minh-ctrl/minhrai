<script setup>
import { inject } from 'vue'
const darkMode = inject('darkMode');
const { data, error } = await useAsyncData("post", () => GqlPostType());
console.log(data);
</script>
<template>
    <div class="block w-10/12">

        <div :class="{darkMode: darkMode}" class="text-md PressStart2P text-slate-200 text-center">
            <Cow :darkMode="darkMode"/>
            <div class="mt-10" v-for ="post in data.allPosts" :key="post.title">
                <NuxtLink class="text-xl underline" :to="`blog/${post.slug}`">
                    {{post.title}}
                </NuxtLink>
                <div> {{post.subtitle}}</div>
            </div>
        </div>
    </div>
</template>