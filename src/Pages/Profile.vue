<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from '@/components/Header.vue';
</script>
<template>
    <Header />
    <div class="w-full m-auto">
        <div class="w-60 m-auto mt-24 mb-24">
            <h1 class="text-3xl">Личный кабинет</h1>
        </div>
        <div class="w-60 h-60 m-auto">
            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="">
        </div>
        <div class="w-60 m-auto mt-16 mb-24">
            <p class="text-3xl ml-20">Гость</p>
            <router-link to="/registration">
                <button
                    class="gap-8 w-full border border-slate-200 rounded-xl p-4 mt-16
                    justify-center bg-drawerButton disabled:bg-slate-400
                    cursor-pointer text-white transition hover:bg-lime-500 active:bg-lime-700 pt-4"
                    >
                    Зарегистрироваться
                </button>
        </router-link>
        </div>
        <div class=" text-white ">.</div>
    </div>

</template>