<script setup>
import { ref } from 'vue';

defineProps({
  title: String,
  img: String,
  price: Number,
  deleteFromCart: Function
})


const emit = defineEmits(['updateQuantity']);
const counterPurchase = ref(1);  

const MinusIncrement = () => {
  if (counterPurchase.value > 1) {
    counterPurchase.value--;
    emit('updateQuantity', counterPurchase.value);  // Отправляем новое количество в родительский компонент
  }
};
const PlusIncrement = () => {
  counterPurchase.value++;
  emit('updateQuantity', counterPurchase.value);  // Отправляем новое количество в родительский компонент
};

</script>

<template>
  <div class="flex justify-between items-center border border-slate-100 rounded-xl p-8 cursor-pointer transition">
    <img 
      :src="img" 
      class="w-32 h-24 object-cover" 
      alt="Product Image" 
    />
    <div class="ml-4 flex flex-col justify-center">
      <p class="font-bold text-lg">{{ title }}</p>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-2">
        <span class="font-bold text-xl">{{ price }} ₽</span>
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <button @click="MinusIncrement" class="border border-bg-slate-900 text-obg-slate-900 rounded-lg w-8 h-8 flex justify-center items-center hover:bg-slate-100">
        -
      </button>
      <span class="text-lg font-medium">{{ counterPurchase }}</span>
      <button @click="PlusIncrement" class="border border-bg-slate-900 text-bg-slate-900 rounded-lg w-8 h-8 flex justify-center items-center hover:bg-slate-100">
        +
      </button>
      <button @click="deleteFromCart" class="text-gray-400 hover:text-gray-600 ml-2">
        ✕
      </button>
    </div>
  </div>
</template>
