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
      name: 'Kelly'
    }
  },
  methods: {},
  mounted() {
  //  console.log('Abri!')
  }
}
</script>
<style lang="scss" type="text/scss" >

</style>