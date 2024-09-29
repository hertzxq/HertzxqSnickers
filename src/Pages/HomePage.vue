<script setup>
import { onMounted, reactive, provide, watch, computed } from 'vue'
import axios from 'axios'
import { ref } from 'vue'

import { useItemsStore } from '@/components/stores/items'

import Header from '@/components/Header.vue'
import CartList from '@/components/Carts/CartList.vue'
import Drawer from '@/components/Drawer/Drawer.vue'
import SnickersDrawer from '@/components/Snickers/SnickersDrawer.vue'

const cartItems = ref([])
const selectedItem = ref(null)
const items = useItemsStore()

const filters = reactive({
  sortBy: '',
  search: ''
})

const drawer = ref(false)
const snickerDrawer = ref(false)

const onClickDrawerOpen = () => {
  drawer.value = !drawer.value
}

const snickerDrawerOpen = (item) => {
  selectedItem.value = item
  snickerDrawer.value = !snickerDrawer.value
}

const changeSortBy = (event) => {
  filters.sortBy = event.target.value
  console.log('filters.sortBy:', filters.sortBy)
}

const changeSearch = (event) => {
  filters.search = event.target.value
}


const addToFavorite = async (item) => {
  try {
    console.log("Начало операции addToFavorite. Текущее состояние isFavorite:", item.isFavorite);

    if (!item.isFavorite) {
      console.log("Товар еще не в избранном. Добавляем...");
      const obj = { item_id: item.id };

      // Отправляем запрос на добавление в избранное
      const { data } = await axios.post(`https://3a4fbd5d3da59fc8.mokky.dev/favorites`, obj);
      console.log('Ответ сервера после добавления:', data);

      item.favoriteId = data.id;
      item.isFavorite = true;

      // Принудительное обновление объекта
      item = { ...item };

      console.log("Присвоенный favoriteId после добавления:", data.id);
    } else {
      console.log("Товар уже в избранном. Удаляем...");

      if (item.favoriteId) {
        console.log("Удаляем запись избранного с id:", item.favoriteId);

        // Отправляем запрос на удаление по favoriteId
        const response = await axios.delete(`https://3a4fbd5d3da59fc8.mokky.dev/favorites/${item.favoriteId}`);
        console.log("Ответ сервера после удаления:", response);

        item.favoriteId = null;
        item.isFavorite = false;

        // Принудительное обновление объекта
        item = { ...item };
      } else {
        console.log("favoriteId отсутствует. Невозможно удалить.");
      }
    }
  } catch (err) {
    console.log('Ошибка при добавлении/удалении из избранного:', err);
  }
};




const addToCart = async (item) => {
  cartItems.value.push(item)
  items.toggleAdded(item.id)
}

const deleteFromCart = async (item) => {
  const index = cartItems.value.findIndex(cartItem => cartItem.id === item.id)
  if (index !== -1) {
    cartItems.value.splice(index, 1)
    items.toggleAdded(item.id)
  }
}


const onClickToAdd = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    deleteFromCart(item)
  }
}

const totalAmount = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price, 0)
})

onMounted(async () => {
  await items.fetchItems(filters);
})

watch(filters, async () => {
  await items.fetchItems(filters)
})

provide('onClickDrawerOpen', onClickDrawerOpen)
provide('cartItems', cartItems)
provide('items', items)
</script>

<template>
  <Header :drawerPrice="totalAmount" :onClickDrawerOpen="onClickDrawerOpen" />
  <Drawer
    :drawerPrice="totalAmount"
    :cartItems="cartItems"
    @delete-from-cart="deleteFromCart"
    v-if="drawer"
  />
  <SnickersDrawer
    :selectedItem="selectedItem"
    v-if="snickerDrawer"
    :snickerDrawerOpen="snickerDrawerOpen" />
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
    :addToFavorite="addToFavorite" 
    :onClickToAdd="onClickToAdd"
    :show-add-button="true"
    :snickerDrawerOpen="snickerDrawerOpen"
  />
</template>
