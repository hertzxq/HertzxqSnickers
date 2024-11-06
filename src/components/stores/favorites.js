import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, onMounted } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([]);

  const addToFavorite = async (item) => {
    try {
      const exists = favorites.value.find(fav => fav.id === item.id);
      if (!exists) {
        const { data } = await axios.post(`https://3a4fbd5d3da59fc8.mokky.dev/favorites`, { item_id: item.id });
        item.favoriteId = data.id;
        favorites.value.push({ ...item, favoriteId: data.id });
        console.log(`Товар ${item.title} добавлен в избранное.`);
      } else {
        await axios.delete(`https://3a4fbd5d3da59fc8.mokky.dev/favorites/${exists.favoriteId}`);
        favorites.value = favorites.value.filter(fav => fav.id !== item.id);
        console.log(`Товар ${item.title} удален из избранного.`);
      }

      saveFavoritesToLocalStorage();

    } catch (err) {
      console.log('Ошибка при добавлении/удалении из избранного:', err);
    }
  };

  const isFavorite = (itemId) => {
    return favorites.value.some(fav => fav.id === itemId);
  };

  const saveFavoritesToLocalStorage = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  };

  const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      favorites.value = JSON.parse(storedFavorites);
    }
  };

  onMounted(() => {
    loadFavoritesFromLocalStorage();
  });

  return {
    favorites,
    addToFavorite,
    isFavorite,
    loadFavoritesFromLocalStorage, 
  };
});
