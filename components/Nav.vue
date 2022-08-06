<script setup>
const exampleData= [{name: 'blog', id:1},{name: 'fav', id:2}, {name: 'about', id: 3}];
</script>
<template>
        <div class="flex-grow -mt-10 md:mt-0">
            <ul  class="m-5" v-for="example in exampleData" :key="example.id">
                <li>{{example.name}}</li>
            </ul>
        </div>
</template>