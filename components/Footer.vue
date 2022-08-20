<script setup>
defineProps({
    darkMode: Boolean,
});
</script>
<template>
    <footer class="flex flex-row justify-center">
        <a class=" cursor-pointer m-1" href="https://github.com/Minh-ctrl">
        <img class="h-9"  :class="{icon_inverted: darkMode === false}" src="../public/githubPNG.png"/>
        </a>
        <a class=" cursor-pointer m-1" href="https://www.linkedin.com/in/minh-lai-ba7717194/">
        <img class="h-9"  :class="{linkedin: darkMode === false}"  src="../public/linkedin.png"/>
        </a>
    </footer>
</template>