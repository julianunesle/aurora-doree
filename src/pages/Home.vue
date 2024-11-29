<template>

  <div class="products-container">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
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
  methods: {},
  mounted() {
    //  console.log('Abri!')
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