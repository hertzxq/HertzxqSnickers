<script setup>
import Cart from './Cart.vue'
import { inject } from 'vue';

defineProps({
  items: Array,
})

const addToFavorite = inject('addToFavorite')

</script>

<template>
  <div class="grid grid-cols-4 gap-2">
    <Cart
    v-for="item in items"
    :key="item.id"
    :title="item.title"
    :img="item.imageUrl"
    :price="item.price" 
    :id="item.id"
    :isFavorite="item.isFavorite"
    :isAdded="item.isAdded"
    :onClickFavorite="() => addToFavorite(item)"
    />
  </div>
</template>
