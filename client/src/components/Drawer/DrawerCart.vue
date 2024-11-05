<script setup>
import { computed } from 'vue'
// import Swal from 'sweetalert2'

const props = defineProps({
  drawerPrice: Number,
  cartItems: {
    type: Array
  }
})


// function onClickBuy() {
//   Swal.fire({
//   position: "center",
//   icon: "success",
//   title: "Заказ оформлен!",
//   showConfirmButton: false,
//   timer: 1500
// });
// }


const taxRate = 0.05
const taxAmount = computed(() => props.drawerPrice * taxRate)
Math.round(taxAmount.value)
</script>

<template>
  <div class="mt-8">
    <div class="flex justify-between py-2">
      <span class="font-bold">Итого:</span>
      <span class="font-bold">{{ props.drawerPrice }} ₽.</span>
    </div>
    <RouterLink to="/purchase">
      <button
      @click="onClickBuy"
        v-if="!props.cartItems.length < 3"
        class="flex items-center gap-8 w-full border border-slate-200 rounded-xl p-4 mt-8 justify-center bg-drawerButton disabled:bg-slate-400 cursor-pointer text-white transition hover:bg-lime-500 active:bg-lime-700"
      >
      Оформить заказ
    </button>
    </RouterLink>
  </div>
</template>
