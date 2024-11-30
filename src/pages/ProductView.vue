<template>

  <div class="product-view">
    <div class="img-wrap">
      <img :src="selectedProduct.image" />
    </div>
    <div class="info">
      <button @click="takeToCart(selectedProduct.id)">Adicionar ao carrinho</button> <br />
      <h1>{{ selectedProduct ? selectedProduct.title : 'Undefined' }}</h1>
      <p>
        {{ selectedProduct.description }}
      </p>

      <section class="ingredients">
        <h4>Ingredients:</h4>
        <ul>
          <li v-for="(ingredient, index) in selectedProduct.ingredients" :key="index">{{ ingredient }}</li>
        </ul>
      </section>
    </div>


  </div>
</template>
<script>
import axios from 'axios';
import Card from '../components/ProductCard.vue'
import { api_url } from '../api';
import { useCartStore } from '../store';
import { mapActions } from 'pinia';
import { setValue } from '../utils';
export default {
  components: {
    Card
  },
  data() {
    return {
      selectedProduct: []
    }
  },
  methods: {
    ...mapActions(useCartStore,['addToCart']),
    takeToCart() {
      let item = Object.assign(this.selectedProduct, {quantity: 1, unitaryPrice: setValue(this.selectedProduct.id) })
      this.addToCart(item)

    },
    getCoffeeById() {
      let id = this.$route.params.id
      axios.get(`${api_url}/hot/${id}`)
        .then((response) => this.selectedProduct = response.data)

    },
    addProductToCart(){
      this.addToCart()
    }
  },
  mounted() {
    this.getCoffeeById()
  }
}
</script>
<style lang="scss">
.product-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .img-wrap {
    width: clamp(200px, 80dvw, 400px);
    height: 350px;
    border-radius: 6px;
    overflow: hidden;

    img {
      height: 100%;
      width: 100% !important;
    }
  }


  div {
    width: 80dvw;
    margin: 10px;
  }

  .info {
    button {
      cursor: pointer;
    }

    p {
      margin-block: 15px;
      text-align: justify;
    }
  }

}

@media screen and (min-width:768px) {
  .product-view {
    flex-direction: row !important;
    justify-self: center;
    margin-top: 50px;

    .img-wrap {
      width: clamp(270px, 35dvw, 350px);
    }

    div {
      width: 45dvw;
    }
  }
}
</style>