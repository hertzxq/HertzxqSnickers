<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from '@/components/Header.vue';
import PurchaseCart from '@/components/Carts/PurchaseCart.vue';
import { useCartStore } from '@/components/stores/cart';
import { computed } from 'vue';
import Swal from 'sweetalert2'

const CartItemsStore = useCartStore()
const purchaseItems = CartItemsStore.cartItems

const deleteFromCart = (item) => {
  console.log("purchaseItems", purchaseItems.id);
  
  if (!purchaseItems) {
    console.error("purchaseItems is undefined");
    return;
  }

  const existingItem = purchaseItems.find(cartItem => cartItem.id === item.id);
  if (existingItem && existingItem.quantity > 1) {
    existingItem.quantity -= 1;
  } else {
    const index = purchaseItems.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      purchaseItems.splice(index, 1);
    }
  }
  console.log(`Товар ${item.title} удален из корзины.`);
  console.log(`Товар ${purchaseItems.title} удален из корзины.`);
};

const deleteAllCarts = () => {
  purchaseItems.splice(0, purchaseItems.length);
  console.log('Корзина очищена');
};

const totalPrice = computed(() => {
  return purchaseItems.reduce((total, item) => total + 500 + item.price * item.quantity, 0);
});

const itemPrice = computed(() => {
  return purchaseItems.reduce((total, item) => total + item.price * item.quantity, 0);
});

  const updateQuantity = (item, newQuantity) => {
    console.log("Item passed to updateQuantity:", item);
    console.log("New quantity:", newQuantity);
    console.log("purchaseItems:", purchaseItems);
  const existingItem = purchaseItems.find(i => i.id === item.id);
  if (existingItem) {
    existingItem.quantity = newQuantity;
  }
};

const successOrder = () => {
    Swal.fire({
    position: "center",
    icon: "success",
    title: "Заказ успешно оформлен!",
    showConfirmButton: false,
    timer: 1500
  });
}

const errorOrder = () => {
    Swal.fire({
    icon: "error",
    title: "Оййй...",
    text: "Вы ничего не заказали =(",
  });
}

</script>

<template>
  <Header />
  <div class="container mx-auto mt-10 flex flex-col lg:flex-row">
    <div class="main-content w-full lg:w-8/12">
      <div class="roundCart border w-full lg:w-10/12 mt-12 lg:mt-24 lg:ml-16 p-4 lg:p-8">
        <div class="flex flex-col lg:flex-row justify-between m-8 border-slate-20">
          <h1 class="font-bold text-2xl pl-4 lg:pl-10 text-center lg:text-left mt-6">1. Корзина</h1>
          <button @click="deleteAllCarts" class="flex items-center justify-center w-full lg:w-8/12 lg:pl-80 text-gray-500 hover:text-gray-700 text-xl mt-6 transition-opacity">
            <img src="/bin.svg" class="w-6 h-6 mr-2" alt="bin" /> <!-- Уменьшили размер иконки -->
            Очистить корзину
        </button>

        </div>
        <div v-if="purchaseItems.length > 0" v-auto-animate>
          <PurchaseCart
          v-for="item in purchaseItems"
          :key="item.id"
          :title="item.title"
          :img="item.img"
          :price="item.price"
          @updateQuantity="updateQuantity(item, $event)"
          :deleteFromCart="() => deleteFromCart(item)"
        />
        </div>
        <div v-else class="flex justify-center">
          <h1 class="mt-12 mb-12 text-2xl font-bold text-center">Вы пока ничего не заказали!</h1>
        </div>
      </div>

      <div class="roundCart border w-full lg:w-10/12 mt-12 lg:mt-24 lg:ml-16 p-4 lg:p-8">
        <div class="flex justify-between m-8 border-slate-20">
          <h1 class="font-bold text-2xl mt-6 text-center lg:text-left">2. Персональная информация</h1>
        </div>
        <div class="form-container grid grid-cols-1 lg:grid-cols-2 gap-4">
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

      <div class="roundCart border w-full lg:w-10/12 mt-12 lg:mt-24 lg:ml-16 mb-16 p-4 lg:p-8">
        <div class="flex justify-between m-8 border-slate-20">
          <h1 class="font-bold text-2xl text-center lg:text-left">3. Адрес доставки</h1>
        </div>
        <div class="input-field m-10">
          <label for="address" class="block text-md mb-2">Введите адрес</label>
          <input
            type="text"
            id="address"
            v-model="address"
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
        <h2 class="ml-4 lg:ml-14">Время доставки:</h2>
        <div class="flex items-center ml-4 lg:ml-8 mb-8">
          <img src="/clock.svg" alt="clock" class="w-5 h-5">
          <select
            v-auto-animate
            @change="changeSortBy"
            class="cursor-pointer pl-2 py-2 outline-none w-full lg:w-auto"
          >
            <option value="11:00">Доставка в 11:00</option>
            <option value="12:00">Доставка в 12:00</option>
            <option value="13:00">Доставка в 13:00</option>
            <option value="14:00">Доставка в 14:00</option>
          </select>
        </div>
      </div>
    </div>
    
    <div class="summary-box w-full lg:w-1/3 h-full lg:h-1/2 lg:mr-16 mt-12 lg:mt-72 bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto lg:ml-auto">
      <div class="flex justify-between mb-6">
        <h2 class="text-xl font-semibold">Итого:</h2>
        <h2 class="text-3xl font-bold text-black">{{ totalPrice }} ₽</h2>
      </div>

      <div class="mb-6 border-b pb-6">
        <div class="flex items-center mb-2">
          <span class="text-lg">Стоимость товаров:</span>
          <span class="ml-auto text-lg font-semibold">{{ itemPrice }} ₽</span>
        </div>

        <div class="flex justify-between">
          <span class="text-lg">Доставка:</span>
          <span class="text-lg font-semibold">500 ₽</span>
        </div>
      </div>

      <div class="promo-section mb-6">
        <button><p class="text-sm text-gray-600 hover:text-slate-900">У меня есть промокод</p></button>
      </div>

      <button v-if="purchaseItems.length > 0" @click="successOrder" class="w-full py-3 text-white font-semibold rounded-lg bg-orange-500 hover:bg-orange-600">
        Перейти к оплате
      </button>
      <button v-else @click="errorOrder" class="w-full py-3 text-white font-semibold rounded-lg bg-orange-500 hover:bg-orange-600">
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
max-width: 100%;
}

.summary-box {
border-radius: 16px; 
}

button {
transition: background-color 0.3s ease;
}
</style>
