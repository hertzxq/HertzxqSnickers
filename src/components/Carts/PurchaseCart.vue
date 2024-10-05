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
  <div class="w-full  flex flex-col lg:flex-row justify-between items-center border border-slate-100 rounded-xl p-4 lg:p-8 cursor-pointer transition">
    <img 
      :src="img" 
      class="w-full lg:w-28 h-42 lg:h-24 object-cover mb-4 lg:mb-0 mr-4" 
      alt="Product Image" 
    />

    <div class="flex-1 ml-0 lg:ml-4 flex flex-col justify-center items-center lg:items-start">
      <p class="font-bold text-lg text-center lg:text-left">{{ title }}</p>
    </div>

    <div class="flex items-center justify-between mb-4 lg:mb-0">
      <div class="flex flex-col gap-2 text-center lg:text-left">
        <span class="font-bold text-xl mr-8">{{ price }} ₽</span>
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
