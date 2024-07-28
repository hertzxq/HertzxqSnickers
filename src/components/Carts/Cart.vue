<!-- eslint-disable vue/multi-word-component-names -->
<script setup>


defineProps({
  id: Number,
  title: String,
  img: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
})


</script>

<template>
  <div
    class="relative flex flex-col w-60 border border-slate-100 rounded-xl m-8 p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
  >
    <div class="absolute top-8 left-8">
      <img @click="onClickFavorite" :src="isFavorite ? '/like-2.svg' : '/like-1.svg'" alt="Favorite" />
    </div>
    <img :src="img" class="w-40" alt="Sneaker" />
    <p class="font-bold">{{ title }}</p>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col gap-2">
        <span class="text-slate-200">Цена:</span>
        <span class="font-bold">{{ price }} ₽.</span>
      </div>
      <button>
        <img @click="onClickAdded" :src="isAdded ? '/plus-2.svg' : '/plus-1.svg'" alt="Plus" />
      </button>
    </div>
  </div>
</template>
