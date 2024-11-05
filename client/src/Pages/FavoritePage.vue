<script setup>
import Header from '@/components/Header.vue'
import CartList from '@/components/Carts/CartList.vue'
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'

const itemsDataFromFavorites = ref([])

const fetchFavoriteItems = async () => {
  try {
    const { data: favoritesData } = await axios.get('https://3a4fbd5d3da59fc8.mokky.dev/favorites')
    const { data: itemData } = await axios.get('https://3a4fbd5d3da59fc8.mokky.dev/sneackers')

    itemsDataFromFavorites.value = itemData
      .filter((item) => favoritesData.some((fav) => fav.item_id === item.id))
      .map((item) => ({
        ...item,
        isFavorite: true,
        favoriteId: favoritesData.find((fav) => fav.item_id === item.id).id
      }))
  } catch (err) {
    console.log('Error fetching favorite items:', err)
  }
}

watch(itemsDataFromFavorites, async () => {
  await fetchFavoriteItems()
})

onMounted(fetchFavoriteItems)
</script>



<template>
  <Header />
  <div>
    <div v-auto-animate class="flex justify-between items-center m-8">
      <h2 class="text-3xl font-bold">Мои закладки</h2>
    </div>
    <div v-if="!itemsDataFromFavorites"  class="flex justify-center h-screen">
      <h1 class="mt-96 text-2xl font-bold">Добавьте товары, чтобы увидить их здесь!</h1>
    </div>
  </div>
  <div>
    <CartList :items="itemsDataFromFavorites" @add-to-favorite="addToFavorite" :show-add-button="false" />
  </div>
</template>
