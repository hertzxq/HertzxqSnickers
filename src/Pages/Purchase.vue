<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from '@/components/Header.vue';
import PurchaseCart from '@/components/Carts/PurchaseCart.vue';
</script>

<template>
    <Header />
    <div class="flex justify-between items-center m-8">
        <h2 class="text-2xl lg:text-3xl font-bold">Оформление заказа</h2>
    </div>
    <div>
        <div>
            <div class="flex justify-between border-b border-slate-200">
                <h1>1. Корзина</h1>
                <button>Очистить корзину</button>
            </div>
            <PurchaseCart />
            <PurchaseCart />
        </div>
    </div>
</template>