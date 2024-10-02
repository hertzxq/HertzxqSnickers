<script setup>
import { onMounted, reactive, provide, watch } from 'vue';
import { ref } from 'vue';
import { useItemsStore } from '@/components/stores/items';
import { useCartStore } from '@/components/stores/cart';

import Header from '@/components/Header.vue';
import CartList from '@/components/Carts/CartList.vue';
import Drawer from '@/components/Drawer/Drawer.vue';
import SnickersDrawer from '@/components/Snickers/SnickersDrawer.vue';

const selectedItem = ref(null);
const items = useItemsStore();
const cart = useCartStore(); 

const filters = reactive({
  sortBy: '',
  search: ''
});

const drawer = ref(false);
const snickerDrawer = ref(false);

const onClickDrawerOpen = () => {
  drawer.value = !drawer.value;
};

const snickerDrawerOpen = (item) => {
  selectedItem.value = item;
  snickerDrawer.value = !snickerDrawer.value;
};

const changeSortBy = (event) => {
  filters.sortBy = event.target.value;
  console.log('filters.sortBy:', filters.sortBy);
};

const changeSearch = (event) => {
  filters.search = event.target.value;
};

const addToCart = (item) => {
  cart.addToCart(item); 
  items.toggleAdded(item.id);
};

// Удаление из корзины
const deleteFromCart = (item) => {
  cart.deleteFromCart(item); 
  items.toggleAdded(item.id);
};

const onClickToAdd = (item) => {
  if (!item.isAdded) {
    addToCart(item);
  } else {
    deleteFromCart(item);
  }
};

onMounted(async () => {
  await items.fetchItems(filters);
});

watch(filters, async () => {
  await items.fetchItems(filters);
});

provide('onClickDrawerOpen', onClickDrawerOpen);
provide('items', items);
provide('cartItems', cart.cartItems); 
</script>

<template>
  <Header :drawerPrice="cart.totalAmount" :onClickDrawerOpen="onClickDrawerOpen" />
  <Drawer
    :drawerPrice="cart.totalAmount"
    :cartItems="cart.cartItems" 
    @delete-from-cart="deleteFromCart"
    v-if="drawer"
  />
  <SnickersDrawer
    :selectedItem="selectedItem"
    v-if="snickerDrawer"
    :snickerDrawerOpen="snickerDrawerOpen"
  />
  <div v-auto-animate class="flex flex-col lg:flex-row justify-between items-center m-4 lg:m-8 space-y-4 lg:space-y-0">
    <h2 class="text-2xl lg:text-3xl font-bold">Все кроссовки</h2>
    <div class="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
      <select
        v-auto-animate
        @change="changeSortBy"
        class="border border-slate-200 rounded-lg cursor-pointer pl-4 py-2 outline-none w-full lg:w-auto"
      >
        <option value="name">По названию (А-Я)</option>
        <option value="price">По возрастанию цены</option>
        <option value="-price">По убыванию цены</option>
      </select>
      <div class="relative w-full lg:w-auto">
        <input
          @input="changeSearch"
          class="border border-slate-200 rounded-lg pl-10 py-2 pr-4 outline-none focus:border-slate-400 w-full lg:w-auto"
          type="text"
          placeholder="Поиск..."
        />
        <img
          class="absolute left-3 top-1/2 transform -translate-y-1/2"
          src="/search.svg"
          alt="search"
        />
      </div>
    </div>
  </div>
  <CartList
    :items="items.items" 
    :onClickToAdd="onClickToAdd"
    :show-add-button="true"
    :snickerDrawerOpen="snickerDrawerOpen"
  />
</template>
