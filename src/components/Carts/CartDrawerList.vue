<script setup>
import CartDrawer from './CartDrawer.vue'
</script>

<template>
    <div class="flex flex-col gap-4">
        <CartDrawer title="Vans air 100" img="/sneakers/sneakers-2.jpg" :price="12500"/>
        <CartDrawer title="Footwear Finder" img="/sneakers/sneakers-3.jpg" :price="22100"/>
        <CartDrawer title="foowar define" img="/sneakers/sneakers-5.jpg" :price="3500"/>
    </div>
</template>