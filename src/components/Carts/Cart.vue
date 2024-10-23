<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-undef -->
<script setup>
import { useFavoritesStore } from '../stores/favorites'; 
import { computed } from 'vue';

const favoritesStore = useFavoritesStore();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: String,
  img: String,
  price: Number,
  subtitle: String,
  isAdded: Boolean,
  onClickToAdd: Function, 
  snickerDrawerOpen: Function, 
  showAddButton: Boolean
});

const favoriteStatus = computed(() => favoritesStore.isFavorite(props.id));

</script>

<template>
  <div
    class="relative flex flex-col w-60 border border-slate-100 rounded-xl m-8 p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
  >
    <div class="absolute top-8 left-8">
      <img
        @click="favoritesStore.addToFavorite({ id, title, img, price, subtitle })"
        :src="favoriteStatus ? '/like-2.svg' : '/like-1.svg'"
        alt="Favorite"
      />
    </div>
    <img 
      :src="img" 
      class="w-40" 
      alt="Sneaker" 
      @click="snickerDrawerOpen({ id, title, img, price, subtitle })" 
    />
    <p class="font-bold" @click="snickerDrawerOpen({ id, title, img, price, subtitle })">
      {{ title }}
    </p>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col gap-2" @click="snickerDrawerOpen({ id, title, img, price, subtitle })">
        <span class="text-slate-200">Цена:</span>
        <span class="font-bold">{{ price }}</span>
      </div>
      <button v-if="showAddButton">
        <img
          @click="onClickToAdd({ id, title, img, price, subtitle, isAdded })"
          :src="isAdded ? '/plus-2.svg' : '/plus-1.svg'"
          alt="Plus"
        />
      </button>
    </div>
  </div>
</template>

