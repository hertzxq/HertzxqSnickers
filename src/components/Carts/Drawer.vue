<!-- eslint-disable vue/multi-word-component-names -->
 <script setup>
import CartHeader from './CartHeader.vue'
import CartDrawerList from './CartDrawerList.vue'
import { inject } from 'vue';

const onClickDrawerOpen = inject('onClickDrawerOpen')

</script>

<template>
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 cursor-pointer" @click="onClickDrawerOpen"></div>
    <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-8 flex flex-col justify-between">
        <div>
        <CartHeader />
        <CartDrawerList />
        </div>
        <div class="mt-8">
            <div class="flex justify-between py-2">
                <span>Итого:</span>
                <span>42500 ₽.</span>
            </div>
            <div class="flex justify-between py-2">
                <span>Налог 5%:</span>
                <span>1500 ₽.</span>
            </div>
            <button class="flex items-center gap-8 w-full border border-slate-200 rounded-xl p-4 mt-8 justify-center
            bg-drawerButton disabled:bg-slate-400 cursor-pointer text-white transition hover:bg-lime-500 active:bg-lime-700">
                Оформить заказ
            </button>
        </div>
    </div>
</template>