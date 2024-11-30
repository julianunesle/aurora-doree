<template>
  <nav class="principal-menu">
  
   <RouterLink to="/" exact @click="closeMenu">Café Doree</RouterLink>
    <ul :class="{ 'show-menu': showMenu }" class="menu-list" ref="menuList">
      <RouterLink to="/" exact @click="closeMenu">Home</RouterLink>
      <RouterLink  to="/login" @click="closeMenu">Login</RouterLink>
      <RouterLink  to="/cadastrar" @click="closeMenu">Cadastro</RouterLink>
      <RouterLink to="" @click="logout">Sair</RouterLink>
    </ul>
    <span>
      <button @click="goToCart">
        <shoppingCart class="svg-icon " />
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
import { useCartStore } from '../store';
import { mapActions } from 'pinia';

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
      isUserLogged :false
    };
  },
  methods: {
    ...mapActions(useCartStore, ['setLogged']),
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
    handleClickOutside(event) {
      const menu = this.$refs.menuList; 
      const button = event.target.closest('.menu'); 
      if (menu && !menu.contains(event.target) && !button && this.showMenu == true) {
        this.closeMenu();
      }
    },
    goToCart(){
      this.$router.push('/cart')
    },
    logout(){
      this.closeMenu()
      this.setLogged(false)
      this.$router.push('/')
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    this.isUserLogged = useCartStore().isLogged
    console.log(this.isUserLogged)
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
      width: 37px;
      height: 39px;
      margin-left: 15px;

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
