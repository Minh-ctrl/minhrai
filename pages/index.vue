<script setup>
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import { inject } from 'vue'
const darkMode = inject('darkMode');
const { data, error } = await useAsyncData("post", () => GqlPostType());
</script>
<template>
    <body  >
        <div class="block w-10/12">
            <!-- <marquee :class="{darkMode: darkMode}" class="text-white PressStart2P"> ⚠️ you've reached moka's site ⚠️  </marquee> -->
            <div :class="{darkMode: darkMode}" class="text-md PressStart2P text-slate-200 text-center">
            <Cow :darkMode="darkMode"/>
                <div class="mt-10" v-for ="post in data.allPosts" :key="post.title">
                    <NuxtLink class="text-xl underline" :to="`blog/${post.slug}`">
                        {{post.title}}
                    </NuxtLink>
                    <div class=" text-xs"> {{post.subtitle}} {{post.publishDate}}</div>
                </div>
            </div>
            <div class="w-10/12">
            </div>
        </div>
    </body>
</template>