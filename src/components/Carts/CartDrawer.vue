<script setup>
import { inject } from 'vue';


const { deleteFromCart } = inject('cartItems')

defineProps({
    title: String,
    img: String,
    price: Number
})


</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex border border-slate-200 rounded-xl p-4 mt-8">
            <button><img :src=img class="w-24" alt="Sneaker" /></button>
            <div class="m-auto">
                <p class="text-xl mb-2">{{ title }}</p>
                <span class="font-bold">{{ price }} ₽.</span>
            </div>
            <button>
            <img @click="deleteFromCart" src="/close.svg" alt="Close"/>
        </button>
        </div>
    </div>
</template>