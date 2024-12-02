<template>
  <div class="modal-overlay" v-if="show">
    <div class="modal">
      <h4>Pedido Finalizado !</h4>
      <p>Seu produto chegará em breve, acompanhe o status da compra pelo e-mail</p>
      <button class="checkout" @click="$emit('closeMenu')">OK</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: Boolean,
  
  }
}
</script>
<style lang="scss">
.modal-overlay {
  background: rgba(0, 0, 0, 0.418);
  height: 100dvh;
  position: absolute;
  width: 100dvw;
  top: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    background: white;
    width: clamp(150px, 85dvw, 430px);
    height: clamp(200px, 10vh, 400px);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    padding: 30px;

    h4 {
      font-size: 28px;
    }

    button {
      @include gradient();
      height: 35px;
      padding: 10px 50px;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }
  }
}
</style>
