<script setup>
defineProps({
  snickerDrawerOpen: Boolean,
  selectedItem: Object,
})

import SnickersHeader from './SnickersHeader.vue'
import SnickersBody from './SnickersBody.vue'
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 cursor-pointer"
    @click="snickerDrawerOpen"
  ></div>
  
  <div
    class="bg-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2 fixed bottom-4 sm:bottom-10 md:bottom-20 lg:bottom-32 left-1/2 transform -translate-x-1/2 z-20 p-4 sm:p-8 flex flex-col rounded-lg"
  >
    <SnickersHeader :snickerDrawerOpen="snickerDrawerOpen" />
    
    <div class="flex flex-col items-center mb-6 sm:mb-12 mt-6 sm:mt-12 relative w-full">
      <SnickersBody
        :id="selectedItem.id"
        :title="selectedItem.title"
        :image="selectedItem.img"
        :price="selectedItem.price"
      />
    </div>
  </div>
</template>

  