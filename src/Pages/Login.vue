<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Header from '@/components/Header.vue';
import { ref } from 'vue';

const userName = ref('');
const password = ref('');

const authentication = async () => {
    try {
        const res = await fetch("https://3a4fbd5d3da59fc8.mokky.dev/auth", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: userName.value,
                password: password.value
            })
        });

        if (!res.ok) {
            throw new Error(`Ошибка: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);

        if (data.token) {
            localStorage.setItem('authToken', data.token);
            alert('Вы успешно вошли в систему!');
        } else {
            alert('Не удалось получить токен аутентификации.');
        }

    } catch (err) {
        console.error('Произошла ошибка:', err);
        alert('Ошибка при входе. Проверьте данные и попробуйте снова.');
    }
};
</script>

<template>
    <Header />
    <div class="w-full h-full m-auto min-h-screen flex items-center justify-center">
        <div class="w-11/12 md:w-1/2 lg:w-1/3 m-auto bg-white rounded-xl p-8 shadow-lg">
            <h1 class="text-3xl text-center mb-8">Вход</h1>
            <form @submit.prevent="authentication">
                <div class="mb-4">
                    <label class="text-lg block font-medium text-slate-700">Имя пользователя</label>
                    <input
                        v-model="userName"
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
                        v-model="password"
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
                >Войти</button>
                
                <div class="text-center mt-4">
                    <span class="text-emerald-800 font-bold text-lg">Нет аккаунта?</span>
                    <router-link class="text-lg ml-2 text-lime-600" to="/registration">Зарегистрироваться</router-link>
                </div>
            </form>
        </div>
    </div>
</template>
