<script setup>
import Cart from './Cart.vue'

defineProps({
  items: Array
})

const emit = defineEmits(['addToFavorite', 'onClickToAdd'])
</script>

<template>
  <div class="grid grid-cols-4 gap-2" v-auto-animate>
    <Cart
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :img="item.imageUrl"
      :price="item.price"
      :id="item.id"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
      :onClickFavorite="() => emit('addToFavorite', item)"
      :onClickToAdd="() => emit('onClickToAdd', item)"
    />
  </div>
</template>
