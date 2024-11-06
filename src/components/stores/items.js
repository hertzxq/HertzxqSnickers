import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useItemsStore = defineStore('items', () => {
  const items = ref([])
  const isLoading = ref(false) 

  const fetchItems = async (filters) => {
    try {
      const params = {}
  
      if (filters.search) {
        params.title = `*${filters.search}*`
      }
  
      if (filters.sortBy) {
        const sortBy = filters.sortBy
  
        if (sortBy === 'name') {
          params.sortBy = 'name'
        } else if (sortBy === 'price') {
          params.sortBy = 'price'
        } else if (sortBy === '-price') {
          params.sortBy = '-price'
        }
      }
  
      isLoading.value = true 
      const { data } = await axios.get('https://3a4fbd5d3da59fc8.mokky.dev/sneackers', { params })

      // Плоский JSON уже не требует преобразования
      const flattenedData = data.items || data; // Прямое присваивание данных

      flattenedData.forEach((item) => (item.isFavorite = false))
      console.log(flattenedData)
      
      items.value = flattenedData
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false  
    }
  }

  const toggleAdded = (itemId) => {
    const item = items.value.find((i) => i.id === itemId)
    if (item) {
      item.isAdded = !item.isAdded
    }
  }

  return { items, isLoading, fetchItems, toggleAdded } 
})
