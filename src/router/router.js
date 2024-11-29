import { createWebHistory, createRouter } from "vue-router";

import HomeView from '../pages/Home.vue'
import LoginView from '../pages/Login.vue'
import SignUpView from '../pages/Sign-up.vue'
 
const routes = [
    { path: '/', component: HomeView },
    {path: '/login', component: LoginView},
    {path: '/cadastrar', component: SignUpView},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router