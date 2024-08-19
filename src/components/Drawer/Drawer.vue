<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import CartHeader from '../Carts/CartHeader.vue'
import CartDrawer from './CartDrawer.vue'
import DrawerCart from './DrawerCart.vue'
import EmptyDrawer from './EmptyDrawer.vue'
import { inject, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  cartItems: {
    type: Array,
    default: () => []
  },
  drawerPrice: Number
})

onMounted(() => {
  document.body.classList.add('overflow-hidden');
});

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
});

const emit = defineEmits(['deleteFromCart', 'drawerPrice'])
const onClickDrawerOpen = inject('onClickDrawerOpen')
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 cursor-pointer"
    @click="onClickDrawerOpen"
  />
  <div
    class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-8 flex flex-col justify-between"
  >
    <!-- Заголовок корзины -->
    <CartHeader v-if="props.cartItems.length" />

    <!-- Пустая корзина -->
    <EmptyDrawer v-if="!props.cartItems.length" />

    <!-- Контейнер для прокрутки товаров -->
    <div class="flex-grow overflow-y-auto">
      <!-- Товары в корзине -->
      <CartDrawer
        v-for="item in props.cartItems"
        :key="item.id"
        :title="item.title"
        :img="item.imageUrl"
        :price="item.price"
        :deleteFromCart="() => emit('deleteFromCart', item)"
      />
    </div>

    <!-- Итоговая часть корзины -->
    <DrawerCart
      v-if="props.cartItems.length"
      :drawerPrice="drawerPrice"
      cartItems="props.cartItems"
    />
  </div>
</template>

