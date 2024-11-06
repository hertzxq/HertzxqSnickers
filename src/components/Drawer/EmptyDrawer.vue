<script setup>
import { inject } from 'vue'

const onClickDrawerOpen = inject('onClickDrawerOpen')
</script>

<template>
  <div class="mt-72">
    <img class="m-auto size-32" src="/package-icon.png" alt="package-icon" />
    <h1 class="text-3xl text-center text-bold">Корзина пустая</h1>
    <p class="text-center text-slate-400 mt-2">
      Добавьтее хотя бы одну пару кроссовок, чтобы сделать заказ.
    </p>
    <button
      @click="onClickDrawerOpen"
      class="flex m-auto items-center gap-4 w-64 border border-slate-200 rounded-2xl p-4 mt-8 justify-center bg-drawerButton disabled:bg-slate-400 cursor-pointer text-white transition hover:bg-lime-500 active:bg-lime-700"
    >
      <svg
        class="transition hover:-translate-x-1 rotate-180"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H14.7143"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Оформить заказ
    </button>
  </div>
</template>
