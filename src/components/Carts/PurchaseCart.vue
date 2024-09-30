<script setup>
</script>

<template>
    <div class="flex justify-between items-center  border border-slate-100 rounded-xl p-8 cursor-pointer transition">
      <img 
        src="/like-1.svg" 
        class="w-24 h-24 object-cover" 
        alt="Sneaker" 
      />
      <div class="ml-4 flex flex-col justify-center">
        <p class="font-bold text-lg">Название</p>
        <p class="text-sm text-gray-500">Нижнее Название</p>
      </div>
      <!-- Цена и количество -->
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-2">
          <span class="font-bold text-xl">12 000 ₽</span>
        </div>
      </div>
      <div class="flex items-center space-x-2 ">
          <button class="border border-bg-slate-900 text-obg-slate-900rounded-lg w-8 h-8 flex justify-center items-center hover:bg-slate-100">
            -
          </button>
          <span class="text-lg font-medium">2</span>
          <button class="border border-bg-slate-900 text-bg-slate-900 rounded-lg w-8 h-8 flex justify-center items-center hover:bg-slate-100">
            +
          </button>
          <button class="text-gray-400 hover:text-gray-600 ml-2">
            ✕
          </button>
        </div>
    </div>
  </template>
  