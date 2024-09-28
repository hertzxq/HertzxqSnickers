import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useItemsStore = defineStore('items', () => {
  const items = ref([])
  const isLoading = ref(false) 

  const fetchItems = async (filters) => {
    try {
      const params = {};
  
      if (filters.search) {
        params.title = `*${filters.search}*`;
      }
  
      if (filters.sortBy) {
        const sortBy = filters.sortBy;
  
        if (sortBy === 'name') {
          params.sortBy = 'name';
        } else if (sortBy === 'price') {
          params.sortBy = 'price';
        } else if (sortBy === '-price') {
          params.sortBy = '-price';
        }
      }
  
      isLoading.value = true; 
      const { data } = await axios.get('https://3a4fbd5d3da59fc8.mokky.dev/sneackers', { params });
      items.value = data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;  
    }
  };

  const toggleFavorite = (itemId) => {
    const item = items.value.find((i) => i.id === itemId);
    if (item) {
      item.isFavorite = !item.isFavorite; // Инвертируем значение isFavorite
    }
  };

  // Функция для изменения состояния добавления в корзину у товара
  const toggleAdded = (itemId) => {
    const item = items.value.find((i) => i.id === itemId);
    if (item) {
      item.isAdded = !item.isAdded; // Инвертируем значение isAdded
    }
  };
  
  return { items, isLoading, fetchItems, toggleFavorite, toggleAdded } 
})
