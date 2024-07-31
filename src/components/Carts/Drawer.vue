<!-- eslint-disable vue/multi-word-component-names -->
 <script setup>
import CartHeader from './CartHeader.vue'
import CartDrawer from './CartDrawer.vue';
import drawerCart from './DrawerCart.vue';
import { inject } from 'vue';

const onClickDrawerOpen = inject('onClickDrawerOpen')
const cartItems = inject('cartItems')

</script>

<template>
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 cursor-pointer" @click="onClickDrawerOpen"></div>
    <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-8 flex flex-col justify-between">
        <div>
        <CartHeader/>
        <CartDrawer
        v-for="item in cartItems"
        :key="item.id"
        :title="item.title"
        :img="item.imageUrl"
        :price="item.price" 
        />
        </div>
        <drawerCart
        />
    </div>
</template>