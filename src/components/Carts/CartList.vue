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
// v-if="itemsStore.isLoading" 
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" v-auto-animate>
    <template v-for="i in itemsPerPage" :key="i">
      <SkeletonCart v-if="itemsStore.isLoading" />
      <Cart
        v-else
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
    </template>
  </div>
</template>





