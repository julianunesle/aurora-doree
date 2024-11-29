<template>
  <nav class="principal-menu">
    sasa
    <ul class="menu-list">
      <RouterLink to="/" exact>Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/cadastrar">Cadastro</RouterLink>
    </ul>
    <span>

      <button @click="goToCart">
        <shoppingCart class="svg-icon menu" />
      </button>
      <button @click="toggleMenu">
        <menuCloseIcon class="svg-icon menu" v-if="showMenu" />
        <menuIcon class="svg-icon menu" v-else />
      </button>
    </span>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
// import menuIcon from '../assets/vue.svg'
import menuIcon from '../assets/icons/menu.svg'
import menuCloseIcon from '../assets/icons/close.svg'
import shoppingCart from '../assets/icons/shopping-cart.svg'
export default {
  name: 'Menu',
  components: {
    menuIcon, menuCloseIcon,shoppingCart
  },
  data() {
    return {
      showMenu: false

    }
  },
  methods: {
    toggleMenu() {
      const menuList = document.getElementsByClassName('menu-list')[0]
      this.showMenu = !this.showMenu
      this.showMenu ? menuList.classList.add('show-menu') : menuList.classList.remove('show-menu')
    },
    goToCart(){
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss" scoped>
.principal-menu {
  background: $background;
  height: 8dvh;
  overflow-y: visible;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-inline: 36px;
  color: $white;
  button {
    background: none;
    cursor: pointer;

    .svg-icon {
      width: 45px;
      height: 47px;

      path {
        stroke: antiquewhite !important;
        color: antiquewhite;
        fill: wheat;
      }
    }
  }

  ul {
    display: none;

    &.show-menu {
      display: flex;
      flex-direction: column;
      width: 50%;
      background: $background;
      height: max-content;
      position: absolute;
      top: 8dvh;
      right: 0;
    }


    a {
      display: inline-flex;
      width: 100%;
      padding: 12px;
      color: $white;

      &:visited {
        color: rgba($white ,.1);
      }
    }

  }

}
</style>
