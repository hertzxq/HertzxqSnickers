<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  img: String,
  price: Number
})

const isLiked = ref(true)
const isAdded = ref(false)

const onClickLike = () => {
  isLiked.value = !isLiked.value
}

const onClickAdd = () => {
  isAdded.value = !isAdded.value
}
</script>

<template>
  <div
    class="relative flex flex-col w-60 border border-slate-100 rounded-xl m-8 p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
  >
    <div @click="onClickLike" class="absolute top-8 left-8">
      <img :src="isLiked ? '/like-1.svg' : '/like-2.svg'" alt="Favorite" />
    </div>
    <img :src="img" class="w-40" alt="Sneaker" />
    <p class="font-bold">{{ title }}</p>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col gap-2">
        <span class="text-slate-200">Цена:</span>
        <span class="font-bold">{{ price }} руб.</span>
      </div>
      <button>
        <img :src="isAdded ? '/plus-2.png' : '/plus-1.svg'" alt="Plus" @click="onClickAdd" />
      </button>
    </div>
  </div>
</template>
