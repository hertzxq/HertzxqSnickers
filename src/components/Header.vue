<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
  onClickDrawerOpen: Function
})

</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-10 mb-15">
    <div class="flex items-center gap-5">
      <a href="/"><img src="/logo.png" alt="logo" class="w-10" /></a>
      <div>
        <a href="/"><h2 class="text-xl font-bold">Heartzxq Snickers</h2></a>
        <p class="text-slate-500">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul class="flex items-center gap-10 mr-20">
      <li class="flex items-center gap-5 text-slate-500">
        <button><img src="/cart.svg" alt="cart" @click="onClickDrawerOpen" /></button>
        <button><b class="hover:text-stone-700" @click="onClickDrawerOpen" >0 ₽.</b></button>
      </li>
      <li class="flex items-center gap-5 text-slate-500">
        <a href="/heart"><img src="/heart.svg" alt="heart" /></a>
        <a href="/heart"><span class="hover:text-stone-700">Закладки</span></a>
      </li>
      <li class="flex items-center gap-5 text-slate-500">
        <a href="/profile"><img src="/profile.svg" alt="profile" /></a>
        <a href="/profile"><span class="hover:text-stone-700">Профиль</span></a>
      </li>
    </ul>
  </header>
</template>
