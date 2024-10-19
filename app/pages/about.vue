<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => queryContent('/about').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>
<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
  </div>
</template>