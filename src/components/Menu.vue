<template>
  <nav>

  <menuIcon/>
    <ul>
      <RouterLink to="/" exact>Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/cadastrar">Cadastro</RouterLink>
    </ul>
  </nav>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import menuIcon from '../assets/icons/menu-open.svg'
import SVGIcon from './SVGIcon.vue';
// import iconMenu from '../assets/icons/menu-open.svg'
export default {
  name: 'Menu',
  components:{
    SVGIcon
  },
  data() {
    return {
      icone : menuIcon
    }
  }
}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
