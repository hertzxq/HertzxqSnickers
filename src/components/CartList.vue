<script setup>
import Cart from './Cart.vue'
</script>

<template>
  <div class="grid grid-cols-4 gap-2">
    <Cart title="Vans air 100" img="/sneakers/sneakers-8.jpg" :price="6500" />
    <Cart title="Foot Gear Guru" img="/sneakers/sneakers-6.jpg" :price="5600" />
    <Cart title="JORDAN BOOST 5500" img="/sneakers/sneakers-5.jpg" :price="12550" />
    <Cart title="Vans air 400" img="/sneakers/sneakers-4.jpg" :price="15500" />
    <Cart title="Vans air 100" img="/sneakers/sneakers-3.jpg" :price="12990" />
    <Cart title="Shoe Savvy" img="/sneakers/sneakers-2.jpg" :price="10000" />
    <Cart title="Stride Star" img="/sneakers/sneakers-4.jpg" :price="13400" />
    <Cart title="Sole Collider0" img="/sneakers/sneakers-3.jpg" :price="8100" />
    <Cart title="Quick Step" img="/sneakers/sneakers-5.jpg" :price="9200" />
    <Cart title="Footwear Finder" img="/sneakers/sneakers-12.jpg" :price="19200" />
  </div>
</template>
