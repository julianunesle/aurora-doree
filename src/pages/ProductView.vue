<template>

  <div class="product-view">
    <div class="img-wrap">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg" />
    </div>
    <div class="info">
      <button >Adicionar ao carrinho</button> <br/>
      <!-- <button @click="takeToCart" >Comprar +</button> -->

      <h1>Cafezinho Top</h1>
      <p>
        Ännu en berömd och utsökt kall dryck för dem som föredrar choklad. Tänk dig smaken av en shake med choklad och vispad grädde på toppen.
      </p>

      <section class="ingredients">
        <h4>Ingredients:</h4>
        <ul>
          <li>Coffee</li>
          <li>Is</li>
          <li>Mjölk</li>
          <li>Cocoa</li>
          <li>Vispgrädde</li>
        </ul>
      </section>
    </div>


  </div>
</template>
<script>
import Card from '../components/ProductCard.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      name: 'Kelly'
    }
  },
  methods: {
    takeToCart(){
      this.$router.push('/cart')
    }
  },
  mounted() {
    //  console.log('Abri!')
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
    width: 80dvw;

    img {
      width: 100% !important;
    }
  }
  
  
  div {
    width: 80dvw;
    border: 1px solid green;
    margin: 10px;
  }
  
  .info{
    p{
      margin-block: 15px;
      text-align: justify;
    }
  }

}

@media screen and (min-width:768px) {
  .product-view {
    flex-direction: row !important;

    .img-wrap {
      width: 35dvw;

    }

    div {
      border: 5px solid rgb(128, 36, 0);
      width: 45dvw;
    }
  }
}
</style>