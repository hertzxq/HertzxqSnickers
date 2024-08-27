<script setup>
import Header from '@/components/Header.vue'
import CartList from '@/components/Carts/CartList.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

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

const addToFavorite = async (item) => {
  try {
    if (item.isFavorite) {
      await axios.delete(`https://3a4fbd5d3da59fc8.mokky.dev/favorites/${item.favoriteId}`)
      
      item.isFavorite = false
      item.favoriteId = null
      
      itemsDataFromFavorites.value = itemsDataFromFavorites.value.filter(i => i.id !== item.id)
    } else {
      const { data } = await axios.post(`https://3a4fbd5d3da59fc8.mokky.dev/favorites`, { item_id: item.id })
      
      item.isFavorite = true
      item.favoriteId = data.id
      itemsDataFromFavorites.value.push(item)
    }

  } catch (err) {
    console.log('Error:', err)
  }
}

onMounted(fetchFavoriteItems)
</script>



<template>
  <Header />
  <div>
    <div v-auto-animate class="flex justify-between items-center m-8">
      <h2 class="text-3xl font-bold">Мои закладки</h2>
    </div>
  </div>
  <CartList :items="itemsDataFromFavorites" @add-to-favorite="addToFavorite" :show-add-button="false" />
</template>
