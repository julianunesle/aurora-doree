<template>

<Menu/>
  <main>
    <RouterView/>
  </main>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router';
import Menu from './components/Menu.vue';

export default {
  components:{
    Menu
  },
  data() {
    return {
    }
  },
  methods: {},
  mounted() {
  }
}
</script>
<style lang="scss" type="text/scss" >

</style>