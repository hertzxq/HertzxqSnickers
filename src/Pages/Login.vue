<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from '@/components/Header.vue';
</script>

<template>
    <Header />
    <div class="w-full h-full m-auto min-h-screen flex items-center justify-center">
        <div class="w-11/12 md:w-1/2 lg:w-1/3 m-auto bg-white rounded-xl p-8 shadow-lg">
            <h1 class="text-3xl text-center mb-8">Вход</h1>
            <form>
                <div class="mb-4">
                    <label class="text-lg block font-medium text-slate-700">Имя пользователя</label>
                    <input
                        type="text"
                        class="text-base mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
                               disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                               invalid:border-pink-500 invalid:text-pink-600
                               focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        required
                    />
                </div>
                
                <div class="mb-4">
                    <label class="text-lg block font-medium text-slate-700">Пароль</label>
                    <input
                        type="password"
                        class="text-base mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
                               disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                               invalid:border-pink-500 invalid:text-pink-600
                               focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        required
                    />
                </div>
                
                <div class="mb-4">
                    <label class="text-lg block font-medium text-slate-700">Подтвердите пароль</label>
                    <input
                        type="password"
                        class="text-base mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
                               disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                               invalid:border-pink-500 invalid:text-pink-600
                               focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        required
                    />
                </div>

                <button type="submit"
                    class="text-base w-full border border-slate-200 rounded-xl p-4 mt-8
                           justify-center bg-drawerButton disabled:bg-slate-400
                           cursor-pointer text-white transition hover:bg-lime-500
                           active:bg-lime-700 pt-4"
                >Зарегистрироваться</button>
                
                <div class="text-center mt-4">
                    <span class="text-emerald-800 font-bold text-lg">Нет аккаунта?</span>
                    <router-link class="text-lg ml-2 text-lime-600" to="/registration">Зарегистрироваться</router-link>
                </div>
            </form>
        </div>
    </div>
</template>
