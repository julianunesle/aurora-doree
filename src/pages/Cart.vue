<template>
<Modal v-if="showModal"/> <!--Colocar if-->
  <div v-if="itensOnCart.length == 0" class="empty-cart">
    <h3>Ainda não escolheu um cafézinho?</h3>
    <RouterLink to="/">Venha ver nossas opçoes! </RouterLink>
  
  </div>



  <div v-else class="cart-container">
    <div class="itens">
      <div class="cart-item" v-for="(item, index) in itensOnCart" :key="item.id">
        <img :src="item.image" />
        <h4>{{ item.title }}</h4>
        <button class="remove-item" @click="removeItem(item.id)">
          <iconTrash />
        </button>
        <p> R$ {{ item.unitaryPrice }}</p>
        <input :key="item.id" class="btn-qntd" type="number" min="1" max="15" maxlength="2" :value="item.quantity"
          @change="updateItem(item.id, index)" />
      </div>
    </div>


    <div class="checkout-details">
      <p v-if="!isLogged">
         <RouterLink to="/login?status=checkout">Entre para finalizar</RouterLink>
      </p>
      <span v-else >
        <ul>
          <li>
            <p>Subtotal : R$ {{ taxes.amount }}</p>
            <p>Frete : R$ {{ taxes.shipping }}</p>
            <p>Taxa de Serviço : R$ {{ taxes.tax }}</p>
            <p>Total : R$ {{ taxes.total }}</p>
  
          </li>
        </ul>
  
        <section class="paymment">
          <span class="paymment-method">
            <label for="pix">
              Pix
              <iconPix />
            </label>
            <input type="radio" name="paymment_method" id="pix" value="pix" v-model="metodoDePagamento">
          </span>
          <span class="paymment-method">
            <label for="cartao">
              Cartão
              <iconCreditCard />
            </label>
  
            <input type="radio" id="cartao" name="paymment_method" value="cartao" v-model="metodoDePagamento">
          </span>
          <span class="paymment-method">
            <label for="boleto">
              Boleto
              <iconBarCode />
            </label>
  
            <input type="radio" id="boleto" name="paymment_method" value="boleto" v-model="metodoDePagamento">
          </span>
  
          <span class="paymment-method">
            <label for="ticket">
              Ticket
              <iconTicket />
            </label>
            <input type="radio" id="ticket" name="paymment_method" value="ticket" v-model="metodoDePagamento">
          </span>
        </section>
  
        <form @submit.prevent="finalizarCompra">
  
          <section v-if="metodoDePagamento == 'cartao' || metodoDePagamento == 'ticket'">
            <p style="marginBlock: 20px ;">{{ metodoDePagamento == 'cartao' ? 'Cartão de credito' : 'Vale Alimentação' }}
            </p>
            <input type="text" placeholder="Nome do titular" />
            <input type="text" placeholder="Numero do cartão" />
            <span>
              <input type="input" placeholder="CCV" />
              <input type="input" placeholder="00/22" />
            </span>
          </section>
  
          <section v-if="metodoDePagamento == 'boleto'">
            <p class="text-center">Linha digitavel</p>
            <p>00190 50095401 44816069 0680935 0314337 3700 00000 100</p>
          </section>
          <section v-if="metodoDePagamento == 'pix'">
            <p class="text-center">Chave aleatória</p>
            <p>BR0019 0 50095401 44816069 AEQ0680935 GG0314337 3700 7181712 280924FLRK</p>
          </section>
  
  
          <button class="checkout" v-if="metodoDePagamento == 'pix' || metodoDePagamento == 'boleto'">Copiar</button>
          <button class="checkout"type="submit" v-else-if="metodoDePagamento">Finalizar Compra</button>
        </form>
      </span>
    </div>

  </div>




</template>
<script>
import Card from '../components/ProductCard.vue'
import iconTrash from '../assets/icons/trash.svg'
import { useCartStore } from '../store/index';
import { mapActions } from 'pinia';
import { setTax } from '../utils';
import iconPix from '../assets/icons/paymment/pix.svg'
import iconCreditCard from '../assets/icons/paymment/credit-card.svg'
import iconBarCode from '../assets/icons/paymment/bar-code.svg'
import iconTicket from '../assets/icons/paymment/ticket.svg'
import { RouterLink } from 'vue-router';
import Modal from '../components/Modal.vue';



export default {
  components: {
    Card, iconTrash, iconPix, iconCreditCard,
    iconBarCode, iconTicket, Modal
  },
  data() {
    return {
      metodoDePagamento: null,
      teste: useCartStore().name,
      itensOnCart: useCartStore().cartList,
      amout: useCartStore().cartAmout,
      taxes: setTax(useCartStore().cartAmout),
      isLogged: useCartStore().isLogged,
      showModal: useCartStore().modalIsVisible,

    }
  },
  methods: {
    ...mapActions(useCartStore, ['removeToCart', 'changeQuantity']),
    takeToCart() {
      this.$router.push('/')
    },
    updateItem(id, index) {
      let valueInput = document.querySelectorAll('.btn-qntd')[index].value
      // valueInput = valueInput <= 0 ? 1 : valueInput && valueInput > 15 ? 15 : valueInput
      this.changeQuantity(id, Number(valueInput <= 0 ? 1 : valueInput))
      this.amout = useCartStore().cartAmout
      this.setTaxes()
    },
    removeItem(id) {
      this.removeToCart(id)
      this.amout = useCartStore().cartAmout
      this.setTaxes()
    },

    setTaxes() {
      this.taxes = setTax(this.amout)
    },
    finalizarCompra(){
   
      setTimeout(() => {
        // this.$router.push("/")

      },1700)
    
    }
  },
  watch: {
    metodoDePagamento(value) {
      console.log('Valor é:', value)
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss">
.empty-cart{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90dvh;

  a{
    text-decoration: underline;
    font-weight: 500;
  }
}
.text-center{
  text-align: center;
  margin-block: 10px;
}
.cart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-block: 32px;

  .cart-item {
    width: 350px;
    border: 1px solid $palebrown;
    border-radius: 8px;
    padding: 5px;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr .5fr;
    grid-template-rows: 1.5fr 1fr;
    grid-template-areas:
      "img title title btn"
      "img value qntd qntd"
    ;

    img {
      width: 85px;
      border-radius: 5px;
      grid-area: img;
    }

    .remove-item {
      width: 30px;
      height: 25px;
      cursor: pointer;
      background: none;


      svg {
        width: 100%;
        height: 100%;
        transition: .6s;

        &:hover {


          filter: drop-shadow(1.5px 2px 1px $palebrown);
        }
      }
    }

    h4 {
      grid-area: title;
    }

    .btn-qntd {
      height: 50%;
      text-align: center;
      margin-block: 0px !important;

    }
  }

}

.checkout-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  span{
    display: inline-block;
  }

  ul {
    border-bottom: .5px solid brown;
    margin-top: 25px;
    margin-bottom: 15px;
    padding-bottom: 8px;

  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;

    input {
      width: 100%;
    }

  }

  .checkout {
    width: clamp(150px, 100%, 300px);
    background: #522500;
    color: $white;
    padding-block: 10px;
    border-radius: 4px;
    cursor: pointer;
    width: clamp(100px, 75vw, 250px);

    align-self: center;
    justify-self: center;
  }

  .paymment-method {
    display: inline-flex;
    width: 70px;
    height: 70px;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      cursor: pointer;

      svg {
        width: 70%;
        height: 70%;
      }
    }

    input {
      display: none !important;
      width: 0;
      height: 0;
    }
  }
}


@media screen and (min-width:768px) {
  .cart-container {
    max-width: 1280px;
    margin-inline: auto;
    justify-content: center;
    column-gap: 50px;

    .cart-item {
      width: 400px;
    }

    .checkout-details {
      width: clamp(100px, 35vw, 450px);

      ul {
        margin-top: 0;
      }

    }
  }
}
</style>
