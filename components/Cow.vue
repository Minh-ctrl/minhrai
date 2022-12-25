<script setup>
import SshPre from 'simple-syntax-highlighter';
import 'simple-syntax-highlighter/dist/sshpre.css';

defineProps({
    darkMode: Boolean,
});
</script>
<template>
<div class="flex flex-col justify-center mt-2">
   <pre language="js" class="w-96 self-center">
    _____________________________
    const message_from_cow = 🍔 
    _____________________________
\    ^__^
        \ /(oo)\______
            (__)\     *  )\/\
             ||----w||
              ||     || </pre>
</div>
</template>

<style scoped>
    .font-size{
        font-size: 0.8rem;
    }
</style>
