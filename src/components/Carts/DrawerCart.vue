<script setup>
defineProps({
    price: Number
})
</script>

<template>
        <div class="mt-8" >
            <div class="flex justify-between py-2">
                <span>Итого:</span>
                <span>1234 ₽.</span>
            </div>
            <div class="flex justify-between py-2">
                <span>Налог 5%:</span>
                <span>1234 ₽.</span>
            </div>
            <button class="flex items-center gap-8 w-full border border-slate-200 rounded-xl p-4 mt-8 justify-center
            bg-drawerButton disabled:bg-slate-400 cursor-pointer text-white transition hover:bg-lime-500 active:bg-lime-700">
                Оформить заказ
            </button>
        </div>
</template>