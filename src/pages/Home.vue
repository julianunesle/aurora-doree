<template>

  <div class="products-container">
    <Card v-for="item in products" :key="item.id" :idItem="item.id" :title="item.title" :img="item.image" />
  </div>
</template>
<script>
import Card from '../components/ProductCard.vue'
import axios from 'axios';
import { api_url } from '../api';
export default {
  components: {
    Card
  },
  data() {
    return {
      products : []
    }
  },
  methods: {
    getAllCoffees(){
      axios
      .get(`${api_url}/hot`)
      .then((response) => 
      this.products = response.data)
    }
  },
  mounted() {
    this.getAllCoffees()
  }
}
</script>
<style lang="scss">
.products-container {
  margin-block: 20px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  justify-content: center;
  padding: 16px;
  @include container-max-width()
}
</style>