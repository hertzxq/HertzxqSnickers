<script setup>
import Cart from './Cart.vue';
import SkeletonCart from './SkeletonCart.vue';
import { useItemsStore } from '../stores/items';
import { ref } from 'vue';

const itemsStore = useItemsStore();
const itemsPerPage = ref(12);

defineProps({
  items: {
    type: Array,
    required: true,
  },
  showAddButton: Boolean,
  snickerDrawerOpen: Boolean,
  onClickToAdd: Function
});


</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" v-auto-animate>
    <!-- Если данные загружаются, показываем скелетоны -->
    <template v-if="itemsStore.isLoading">
      <SkeletonCart v-for="i in itemsPerPage" :key="i" />
    </template>

    <template v-else>
      <Cart
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :img="item.imageUrl"
      :price="item.price"
      :subtitle="item.subtitle"
      :id="item.id"
      :isAdded="item.isAdded"
      :onClickToAdd="onClickToAdd"  
      :snickerDrawerOpen="snickerDrawerOpen"
      :showAddButton="showAddButton"
    />
    </template>
  </div>
</template>






