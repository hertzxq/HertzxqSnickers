<script setup>
defineProps({
  title: String,
  img: String,
  price: Number,
  drawerPrice: Function,
  deleteFromCart: Function
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex border border-slate-200 rounded-xl p-4 mt-8">
      <button><img :src="img" class="w-24" alt="Sneaker" /></button>
      <div class="m-auto ml-2">
        <p class="text-xl mb-1.5">{{ title }}</p>
        <span class="font-bold">{{ price }} ₽.</span>
      </div>
      <button>
        <img class="mt-24 w-14" @click="deleteFromCart" src="/close.svg" alt="Close" />
      </button>
    </div>
  </div>
</template>
