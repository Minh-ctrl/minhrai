<script setup>
import SshPre from 'simple-syntax-highlighter';
import 'simple-syntax-highlighter/dist/sshpre.css';

defineProps({
    darkMode: Boolean,
});
</script>
<template>
<div class="flex flex-col justify-center">
<pre :class="{darkMode: darkMode}" class="text-slate-200  font-mono font-size">
_____________________________
</pre>
   <ssh-pre language="js" class=" w-96  self-center">(((const message_from_cow = 🍔 ))) </ssh-pre>
<pre :class="{darkMode: darkMode}" class="text-slate-200  font-mono font-size">
_____________________________
  \    ^__^
           \  (oo)\_______
                (__)\        )\/\
                 ||----w||
                  ||     || </pre>
</div>
</template>

<style scoped>
    .font-size{
        font-size: 0.8rem;
    }
</style>
