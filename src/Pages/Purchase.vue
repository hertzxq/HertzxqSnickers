<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from '@/components/Header.vue';
import PurchaseCart from '@/components/Carts/PurchaseCart.vue';

</script>

<template>
    <Header />
    <div class="container mx-auto mt-10 flex">
      <div class="main-content w-8/12">
        <div class="roundCart border w-10/12 mt-24 ml-16">
          <div class="flex justify-between m-8 border-slate-20">
            <h1 class="font-bold text-2xl pl-10 text-center mt-6">1. Корзина</h1>
            <button class="flex w-8/12 pl-80 opacity-50 text-xl mt-6">
              <img src="/bin.svg" class="mt-1.5 mr-2" alt="bin" />Очистить корзину
            </button>
          </div>
          <PurchaseCart
          v-for="item in cartItems"
          :key="item.id"/>
          <PurchaseCart />
        </div>
  
        <div class="roundCart border text-center w-10/12 mt-24 ml-16">
          <div class="flex justify-between m-8 border-slate-20">
            <h1 class="font-bold text-2xl mt-6">2. Персональная информация</h1>
          </div>
          <div class="form-container grid grid-cols-2 gap-4">
            <div class="input-field m-4">
              <label for="firstName" class="block text-lg font-semibold mb-2">Имя</label>
              <input
                type="text"
                id="firstName"
                v-model="firstName"
                class="border rounded-lg w-full p-3"
                :class="{'border-red-500': !firstName && submitted}"
                placeholder="Ваше имя"
              />
            </div>
            <div class="input-field m-6">
              <label for="lastName" class="block text-lg font-semibold">Фамилия</label>
              <input
                type="text"
                id="lastName"
                v-model="lastName"
                class="border rounded-lg w-full p-3"
                :class="{'border-red-500': !lastName && submitted}"
                placeholder="Ваша фамилия"
              />
              <p v-if="!lastName && submitted" class="text-red-500 text-sm mt-2">Введите вашу фамилию</p>
            </div>
            <div class="input-field m-8">
              <label for="email" class="block text-lg font-semibold mb-2">E-Mail</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="border rounded-lg w-full p-3"
                placeholder="Ваш email"
              />
            </div>
            <div class="input-field m-8">
              <label for="phone" class="block text-lg font-semibold mb-2">Телефон</label>
              <input
                type="tel"
                id="phone"
                v-model="phone"
                class="border rounded-lg w-full p-3"
                placeholder="+7(999)999-99-99"
              />
            </div>
          </div>
        </div>
  
        <div class="roundCart border w-10/12 mt-24 ml-16 mb-16">
          <div class="flex justify-between m-8 border-slate-20 ml-10 mb-24">
            <h1 class="font-bold text-2xl pl-10 text-center mt-6">3. Адрес доставки</h1>
          </div>
          <div class="input-field m-10">
            <label for="phone" class="block text-md mb-2">Введите адрес</label>
            <input
              type="tel"
              id="phone"
              v-model="phone"
              class="border rounded-lg w-full p-3"
              placeholder="Москва ул.Мира 12"
            />
          </div>
          <div class="comment-box m-10">
            <label for="comment" class="block text-lg mb-2">Добавьте комментарий</label>
            <textarea
              id="comment"
              class="border rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Type your comment here..."
            ></textarea>
          </div>
          <h1 class="mb-2 ml-8">Время доставки</h1>
          <div class="relative inline-block text-left mb-8 ml-8">
            <button
              type="button"
              class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Доставка в 11:00
              <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="summary-box w-full h-1/2 mr-16 mt-72 bg-white rounded-lg shadow-lg p-8 max-w-md ml-auto">
        <div class="flex justify-between mb-6">
          <h2 class="text-xl font-semibold">Итого:</h2>
          <h2 class="text-3xl font-bold text-black">2365 ₽</h2>
        </div>
  
        <div class="mb-6 border-b pb-6">
          <div class="flex items-center mb-2">
            <span class="text-lg">Стоимость товаров:</span>
            <span class="ml-auto text-lg font-semibold">0 ₽</span>
          </div>
  
          <div class="flex justify-between mb-2">
            <span class="text-lg">Налоги:</span>
            <span class="text-lg font-semibold">0 ₽</span>
          </div>
  
          <div class="flex justify-between">
            <span class="text-lg">Доставка:</span>
            <span class="text-lg font-semibold">0 ₽</span>
          </div>
        </div>
  
        <div class="promo-section mb-6">
          <button><p class="text-sm text-gray-600 hover:text-slate-900">У меня есть промокод</p></button>
        </div>
  
        <button @click="test" class="w-full py-3 text-white font-semibold rounded-lg bg-orange-500 hover:bg-orange-600">
          Перейти к оплате
        </button>
      </div>
    </div>
  </template>

<style scoped>
.roundCart {
  border-radius: 40px;
}

.input-field {
  display: flex;
  flex-direction: column;
}

.form-container {
  max-width: 800px;
  margin: auto;
}

.summary-box {
  border-radius: 16px; 
}

button {
  transition: background-color 0.3s ease;
}
</style>