<script setup>
defineProps({
    id: Number,
    title: String,
    image: String,
    price: Number,
    subtitle: String
})


</script>

<template>
<div class="flex justify-start">
    <img class="w-50" :src="image" alt="image is dead" />
</div>
<div class="flex justify-start">
    <h1 class="text-3xl font-bold mt-4">{{ title }}</h1>
</div>
<div class="flex justify-start">
    <p class="text-slate-400 text-xl mt-2">{{ price }} ₽</p>
</div>
<div class="flex text-center mt-8 mb-16 text-slate-400 w-42">{{ subtitle }}</div>
</template>