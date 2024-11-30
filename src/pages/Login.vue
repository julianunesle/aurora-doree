<template>

    <div class="login-container">
        <form @submit.prevent="signIn">
            <input type="text" v-model="userData.email" required placeholder="email@exemple.com">
            <input type="password" v-model="userData.password" required placeholder="******">
            <input type="submit" placeholder="Entrar">
            <span v-if="errorMsg?.id == 1">Senha incorreta, <RouterLink to="/cadastrar">recupere aqui</RouterLink> e
                venha tomar um café
                conosco !</span>
            <span v-else> {{ errorMsg == null ? 'Ainda não tem conta?' : 'Esse e-mail não existe! ' }} Se <RouterLink
                    to="/cadastrar">cadastre aqui</RouterLink> e venha tomar um café
                conosco !</span>

        </form>

    </div>
</template>
<script>
import { api_aurora_doree } from '../api';
import axios from 'axios';
import { mapActions } from 'pinia';
import { useCartStore } from '../store';
import { RouterLink } from 'vue-router';
export default {
    components: {
        RouterLink
    },
    data() {
        return {
            userData: [],
            errorMsg: null,

        }
    },
    methods: {
        ...mapActions(useCartStore, ['setLogged']),
        signIn() {
            let data = {
                email: this.userData.email,
                password: this.userData.password
            }
            axios.post(`${api_aurora_doree}signin`, data)
                .then(() => {
                    this.setLogged(true)
                    this.$router.push('/')
                }).catch((err) => {
                    this.errorMsg = err.response.data
                })
        }
    }
}
</script>
<style lang="scss">
.login-container {
    @include flex-column();
    align-items: center;
    min-height: 80vh;
    justify-content: center;

    form {
        width: min-content;
        input {
            width: clamp(100px, 80vw, 450px);
        }

        span {
            a {
                text-decoration: underline;
                font-weight: 700;
            }
        }
    }
}
</style>