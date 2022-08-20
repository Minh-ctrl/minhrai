<script setup>
import { Vue3Marquee } from 'vue3-marquee'
import SshPre from 'simple-syntax-highlighter';
import 'simple-syntax-highlighter/dist/sshpre.css';
import 'vue3-marquee/dist/style.css'
const darkMode = inject('darkMode');
const { data, error } = await useAsyncData("post", () => GqlPostType());
</script>
<template>
        <div class="sm:w-9/12 w-full">
            <Vue3Marquee :duration="18" :class="{darkMode: darkMode}" class="text-slate-200 SourceCode mt-4"> 🏕️  Welcome Traveller, stay awhile and listen 🏕️  </Vue3Marquee>
            <div :class="{darkMode: darkMode}" class="text-md PressStart2P text-slate-200 text-center">
            <Cow :darkMode="darkMode"/>
                <div class="mt-10" v-for ="post in data.allPosts" :key="post.title">
                    <NuxtLink class="text-xl underline" :to="`blog/${post.slug}`">
                        {{post.title}}
                    </NuxtLink>
                    <div class=" text-xs m-1"> {{post.subtitle}}</div>
                    <pre class=" text-xs m-1 Nunito"> {{Date(post.publishDate)}}</pre>
                </div>
            </div>
            <div class="w-10/12">
            </div>
        </div>
</template>