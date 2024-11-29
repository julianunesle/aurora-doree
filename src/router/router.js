import { createWebHistory, createRouter } from "vue-router";

import HomeView from '../pages/Home.vue'
import LoginView from '../pages/Login.vue'
import SignUpView from '../pages/Sign-up.vue'
import ProductView from "../pages/ProductView.vue";
import CartView from "../pages/Cart.vue";

 
const routes = [
    { path: '/', component: HomeView },
    {path: '/produto/:id', component: ProductView},
    {path: '/cart', component: CartView},
    {path: '/login', component: LoginView},
    {path: '/cadastrar', component: SignUpView},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router