<template>
  <nav class="principal-menu">
  
   <RouterLink to="/" exact @click="closeMenu">Home</RouterLink>
    <ul :class="{ 'show-menu': showMenu }" class="menu-list" ref="menuList">
      <RouterLink to="/" exact @click="closeMenu">Home</RouterLink>
      <RouterLink to="/login" @click="closeMenu">Login</RouterLink>
      <RouterLink to="/cadastrar" @click="closeMenu">Cadastro</RouterLink>
    </ul>
    <span>
      <button @click="goToCart">
        <shoppingCart class="svg-icon menu" />
      </button>
      <button @click="toggleMenu">
        <menuCloseIcon v-if="showMenu" class="svg-icon menu" />
        <menuIcon v-else class="svg-icon menu" />
      </button>
    </span>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
import menuIcon from '../assets/icons/menu.svg';
import menuCloseIcon from '../assets/icons/close.svg';
import shoppingCart from '../assets/icons/shopping-cart.svg';

export default {
  name: 'Menu',
  components: {
    menuIcon,
    menuCloseIcon,
    shoppingCart,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
    handleClickOutside(event) {
      const menu = this.$refs.menuList; // Referência ao elemento ul
      const button = event.target.closest('.menu'); // Verifica se o clique foi em um botão
      if (menu && !menu.contains(event.target) && !button && this.showMenu == true) {
        console.log('Clique fora do menu, fechando...'); // Para depuração
        this.closeMenu();
      }
    },
    goToCart(){
      this.$router.push('/cart')
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
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
        color: rgba($white, 0.1);
      }
    }
  }
}
</style>
