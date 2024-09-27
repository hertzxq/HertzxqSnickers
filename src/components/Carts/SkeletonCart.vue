<script setup>
import SkeletonPlaceholder from '../SkeletonPlaceholder.vue';
</script>

<template>
    <div
      class="relative flex flex-col w-full border border-slate-100 rounded-xl m-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
    >
      <div class="w-full h-56 overflow-hidden rounded-lg">
        <SkeletonPlaceholder height="200px" width="360px" border-radius="8%"/>
      </div>
        <p class="font-bold text-xl m-auto"><SkeletonPlaceholder height="25px" width="150px" /></p>
      <div class="flex justify-between mt-5">
        <div class="flex flex-col gap-2 ml-8">
            <SkeletonPlaceholder height="30px" width="50px" border-radius="10%"/>
            <SkeletonPlaceholder height="30px" width="50px" border-radius="10%"/>
        </div>
        <button class="flex items-center gap-2 mt-9 bg-slate-50 rounded-xl p-1.5 hover:bg-slate-100 m-6">
            <SkeletonPlaceholder height="30px" width="50px" border-radius="10%"/>
        </button>
      </div>
    </div>
  </template>