<script setup>
import Cart from './Cart.vue'


defineProps({
  items: {
    type: Array,
    required: true,
  },
  showAddButton: Boolean,
  snickerDrawerOpen: Boolean,
  addToFavorite: Function,
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" v-auto-animate>
    <Cart
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :img="item.imageUrl"
      :price="item.price"
      :subtitle="item.subtitle"
      :id="item.id"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
      :onClickFavorite="() => emit('addToFavorite', $event)"
      :onClickToAdd="() => emit('onClickToAdd', $event)"
      :onClick="() => emit('snickerDrawerOpen', item)"
      :showAddButton="showAddButton"
      :snickerDrawerOpen="() => emit('snickerDrawerOpen', $event)"
    />
  </div>
</template>

