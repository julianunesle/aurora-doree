<template>
    <div class="login-container">
        <form @submit.prevent="signUp" v-if="!completedSignup">
            <input type="text" v-model="userData.firstname" placeholder="Primeiro nome">
            <input type="text" v-model="userData.lastname" placeholder="Sobrenome">
            <input type="email" v-model="userData.email" placeholder="email@exemple.com">
            <input type="password" v-model="userData.password" placeholder="Escolha uma senha">
            <input type="submit" placeholder="Cadastrar">
            <span> Já tem conta? Faça <RouterLink to="/login">login aqui</RouterLink> e venha tomar um café conosco !</span>

        </form>
        <div class="completedSignup" v-else>
            <h3>Cadastro realizado com sucesso!</h3>
            <RouterLink to="/login">Vem fazer login aqui.</RouterLink>
        </div>
     
    </div>
</template>
<script>
import axios from 'axios';
import { api_aurora_doree } from '../api';
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            userData: [],
            completedSignup : false
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
                this.completedSignup = true;
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
<style lang="scss">
.completedSignup{
    a{
        text-decoration: underline;
    }
}
</style>