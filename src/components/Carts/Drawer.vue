<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import CartHeader from './CartHeader.vue'
import CartDrawer from './CartDrawer.vue'
import DrawerCart from './DrawerCart.vue'
import EmptyDrawer from './EmptyDrawer.vue'
import { inject, computed } from 'vue'

const props = defineProps({
  cartItems: {
    type: Array,
    default: () => []
  },
  drawerPrice: Number
})

const emit = defineEmits(['deleteFromCart', 'drawerPrice'])
const onClickDrawerOpen = inject('onClickDrawerOpen')
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 cursor-pointer"
    @click="onClickDrawerOpen"
  ></div>
  <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-8 flex flex-col justify-between">
    <div>
      <CartHeader v-if="props.cartItems.length" />
      <EmptyDrawer v-if="!props.cartItems.length" />
      <CartDrawer
        v-for="item in props.cartItems"
        :key="item.id"
        :title="item.title"
        :img="item.imageUrl"
        :price="item.price"
        :deleteFromCart="() => emit('deleteFromCart', item)"
      />
    </div>
    <DrawerCart v-if="props.cartItems.length" :drawerPrice="drawerPrice" />
  </div>
</template>
