<template>
    <div class="login-container">
        <form @submit.prevent="signUp">
            <input type="text" v-model="userData.firstname" placeholder="Primeiro nome">
            <input type="text" v-model="userData.lastname" placeholder="Sobrenome">
            <input type="email" v-model="userData.email" placeholder="email@exemple.com">
            <input type="password" v-model="userData.password" placeholder="Escolha uma senha">
            <input type="submit" placeholder="Cadastrar">
            <span> Já tem conta? Faça <RouterLink to="/login">login aqui</RouterLink> e venha tomar um café conosco !</span>

        </form>
    </div>
</template>
<script>
import axios from 'axios';
import { api_aurora_doree } from '../api';
export default {
    data() {
        return {
            userData: []
        }
    },
    methods: {
        signUp() {
            let data = {
                firstname: this.userData.firstname,
                lastname: this.userData.lastname,
                email: this.userData.email,
                password: this.userData.password
            }
            axios.post(`${api_aurora_doree}signup`,
                data
            ).then((response) => {
                console.log(response)
            })
            console.log('teste', this.userData)
            console.table(this.userData)
        }
    },
    mounted() {
    }
}
</script>
<style lang="scss"></style>