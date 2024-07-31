<script setup>
import { onMounted, reactive, provide, watch } from 'vue';
import axios from 'axios';
import { ref } from 'vue';

import Header from './Header.vue'
import CartList from './Carts/CartList.vue'
import Drawer from './Carts/Drawer.vue';

const items = ref([])
const cartItems = ref([])

const filters = reactive({
  sortBy: '',
  search: ''
})

const drawerOpen = ref(false)

const onClickDrawerOpen = () => {
  drawerOpen.value = !drawerOpen.value
  console.log("clicked");
}

const changeSortBy = (event) => {
  filters.sortBy = event.target.value
}

const changeSearch = (event) => {
  filters.search = event.target.value
}

const fetchFavoriteItems = async () => {
  try {
    const { data: favorites } = await axios.get(`https://3a4fbd5d3da59fc8.mokky.dev/favorites`)

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)

      if (!favorite) {
        return item
      }

      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const fetchItems = async () => {
  try {
    const {data} = await axios.get('https://3a4fbd5d3da59fc8.mokky.dev/sneackers?sortBy=' + filters.sortBy)

    items.value = data.map((item) => ({
      ...item,
      isFavorite: false,
      isAdded: false
    }))

  } catch (error) {
    console.log(error);
  }
}

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id
      }

      item.isFavorite = true

      const { data } = await axios.post(`https://3a4fbd5d3da59fc8.mokky.dev/favorites`, obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://3a4fbd5d3da59fc8.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
    console.log(item);
  } catch (err) {
    console.log(err)
  }
}

const addToCart = (item) => {
  cartItems.value.push(item)
  item.isAdded = true
}

const deleteFromCart = (item) => {
  cartItems.value.splice(cartItems.value.indexOf(item), 1)
  item.isAdded = false
}

const onClickToAdd = (item) => {
  if(!item.isAdded) {
    addToCart(item)
  }else {
    deleteFromCart(item)
  }

  console.log(cartItems.value);
}


onMounted(async () => {
  await fetchItems(),
  await fetchFavoriteItems()
})
watch(filters, fetchItems)

watch(filters, async () => {
  try {
    const {data} = await axios.get('https://3a4fbd5d3da59fc8.mokky.dev/sneackers?title=*' + filters.search + '*')
    items.value = data
  } catch (error) {
    console.log(error);
  }
})

provide("addToFavorite", addToFavorite)
provide("onClickDrawerOpen", onClickDrawerOpen)
provide("cartItems", cartItems, deleteFromCart, addToCart)

</script>

<template>
  <Header :onClickDrawerOpen="onClickDrawerOpen" />
  <Drawer v-if="drawerOpen" />
  <div>
  <div class="flex justify-between items-center m-8">
    <h2 class="text-3xl font-bold">Все кроссовки</h2>
    <div class="flex items-center space-x-4">
      <select @change="changeSortBy" class="border border-slate-200 rounded-lg cursor-pointer pl-4 py-2 outline-none">
        <option value="name">По названию</option>
        <option value="price">По возрастанию (дешевле)</option>
        <option value="-price">По убыванию (дороже)</option>
      </select>
      <div class="relative">
        <input 
          @input="changeSearch"
          class="border border-slate-200 rounded-lg pl-10 py-2 pr-4 outline-none focus:border-slate-400" 
          type="text" 
          placeholder="Поиск..." />
        <img class="absolute left-3 top-1/2 transform -translate-y-1/2" src="/search.svg" alt="search">
      </div>
    </div>
  </div>
  </div>
  <CartList
  :items="items"
  @add-to-favorite="addToFavorite"
  @add-to-cart="onClickToAdd"
  />
</template>
