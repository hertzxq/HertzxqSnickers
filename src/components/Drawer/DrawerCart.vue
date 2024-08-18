<script setup>
import { computed } from 'vue'

const props = defineProps({
  drawerPrice: Number,
  cartItems: {
    type: Array
  }
})

function onClickBuy() {
  alert('Заказ оформлен')
}

const taxRate = 0.05
const taxAmount = computed(() => props.drawerPrice * taxRate)
Math.round(taxAmount.value)
</script>

<template>
  <div class="mt-8">
    <div class="flex justify-between py-2">
      <span>Итого:</span>
      <span>{{ props.drawerPrice }} ₽.</span>
    </div>
    <div class="flex justify-between py-2">
      <span>Налог 5%:</span>
      <span>{{ Math.round(taxAmount) }} ₽.</span>
    </div>
    <button
    @click="onClickBuy"
      v-if="!props.cartItems.length < 3"
      class="flex items-center gap-8 w-full border border-slate-200 rounded-xl p-4 mt-8 justify-center bg-drawerButton disabled:bg-slate-400 cursor-pointer text-white transition hover:bg-lime-500 active:bg-lime-700"
    >
      Оформить заказ
    </button>
  </div>
</template>
