<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
  onClickDrawerOpen: Function,
  drawerPrice: Number
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
        <router-link to="/"><img src="/cart.svg" alt="cart" @click="onClickDrawerOpen"/></router-link>
        <router-link to="/">
          <b class="hover:text-stone-700" @click="onClickDrawerOpen"
            >{{ drawerPrice }} <span v-if="drawerPrice >= 0">₽.</span></b
          >
        </router-link>
      </li>
      <li class="flex items-center gap-5 text-slate-500">
        <router-link to="/favorites"><img src="/heart.svg" alt="heart" /></router-link>
        <router-link to="/favorites"
          ><span class="hover:text-stone-700">Закладки</span></router-link
        >
      </li>
      <li class="flex items-center gap-5 text-slate-500">
        <router-link to="/profile"><img src="/profile.svg" alt="profile" /></router-link>
        <router-link to="/profile"><span class="hover:text-stone-700">Профиль</span></router-link>
      </li>
    </ul>
  </header>
</template>
