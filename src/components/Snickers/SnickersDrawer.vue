<script setup>
defineProps({
  snickerDrawerOpen: Boolean
})

import SnickersHeader from './SnickersHeader.vue'
import SnickersBody from './SnickersBody.vue'
</script>

<template>
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 cursor-pointer"
          @click="snickerDrawerOpen" />
    <div class="bg-white w-1/2 fixed bottom-56 top-32 left-96 z-10 p-8 flex flex-col rounded-lg">
      <SnickersHeader :snickerDrawerOpen="snickerDrawerOpen" />
      <div class="flex flex-col items-center mb-24 mt-24 relative w-42">
        <SnickersBody />
      </div>
    </div>
  </template>
  
  