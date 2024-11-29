<template>

  <h1>Olha o carrinhoooo</h1>

  <div class="cart-container">

    <div class="itens">
      <div class="cart-item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg" />
        <h4>Iced Espresso Titulo</h4>
        <button class="remove-item" @click="removeItem">
          <iconTrash />
        </button>
        <p>R$ 8,00</p>
        <input class="btn-qntd" type="number" min="1" max="15" maxlength="2" value="1" />
      </div>


      <div class="cart-item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg" />
        <h4>Iced Espresso Titulo</h4>
        <button class="remove-item" @click="removeItem">
          <iconTrash />
        </button>
        <p>R$ 8,00</p>
        <input class="btn-qntd" type="number" min="1" max="15" maxlength="2" value="1" />
      </div>

      <div class="cart-item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg" />
        <h4>Iced Espresso Titulo</h4>
        <button class="remove-item" @click="removeItem">
          <iconTrash />
        </button>
        <p>R$ 8,00</p>
        <input class="btn-qntd" type="number" min="1" max="15" maxlength="2" value="1" />
      </div>

      <div class="cart-item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg" />
        <h4>Iced Espresso Titulo</h4>
        <button class="remove-item" @click="removeItem">
          <iconTrash />
        </button>
        <p>R$ 8,00</p>
        <input class="btn-qntd" type="number" min="1" max="15" maxlength="2" value="1" />
      </div>

      <div class="cart-item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg" />
        <h4>Iced Espresso Titulo</h4>
        <button class="remove-item" @click="removeItem">
          <iconTrash />
        </button>
        <p>R$ 8,00</p>
        <input class="btn-qntd" type="number" min="1" max="15" maxlength="2" value="1" />
      </div>


      <div class="cart-item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg" />
        <h4>Iced Espresso Titulo</h4>
        <button class="remove-item" @click="removeItem">
          <iconTrash />
        </button>
        <p>R$ 8,00</p>
        <input class="btn-qntd" type="number" min="1" max="15" maxlength="2" value="1" />
      </div>
    </div>

    <!--Division-->
    <div class="checkout-details">
      <ul>
        <li>
          <p>Subtotal : R$ 230,04</p>
          <p>Frete : R$ 230,04</p>
          <p>Taxa de Serviço : R$ 230,04</p>
          <p>Total : R$ 230,04</p>

        </li>
      </ul>

      <section class="paymment">
        <span class="paymment-method">
          <label for="pix">
            Pix
          </label>

          <input type="radio" name="paymment_method" id="pix" value="pix" v-model="metodoDePagamento">
        </span>
        <span class="paymment-method">
          <label for="cartao">
            Cartão
          </label>

          <input type="radio" id="cartao" name="paymment_method" value="cartao" v-model="metodoDePagamento">
        </span>
        <span class="paymment-method">
          <label for="boleto">
            Boleto
          </label>

          <input type="radio" id="boleto" name="paymment_method" value="boleto" v-model="metodoDePagamento">
        </span>

        <span class="paymment-method">
          <label for="ticket">
            Ticket
          </label>
          <input type="radio" id="ticket" name="paymment_method" value="ticket" v-model="metodoDePagamento">
        </span>
      </section>

      <form action="">

        <section v-if="metodoDePagamento == 'cartao' || metodoDePagamento == 'ticket'">
          <!--Cartão de credito-->
          <input type="text" placeholder="Nome do titular" />
          <input type="text" placeholder="Numero do cartão" />
          <span>
            <input type="input" placeholder="CCV" />
            <input type="input" placeholder="00/22" />
          </span>
        </section>

        <section v-if="metodoDePagamento == 'boleto'">
          <!--Boleto-->
          <p>00190 50095401 44816069 0680935 0314337 3700 00000 100</p>
        </section>


        <button class="checkout" v-if="metodoDePagamento == 'pix' || metodoDePagamento == 'boleto'">Copiar</button>
        <button class="checkout" v-else>Finalizar Compra</button>
      </form>
    </div>

  </div>




</template>
<script>
import Card from '../components/ProductCard.vue'
import iconTrash from '../assets/icons/trash.svg'
export default {
  components: {
    Card, iconTrash
  },
  data() {
    return {
      name: 'Kelly',
      metodoDePagamento: null,
    }
  },
  methods: {
    takeToCart() {
      this.$router.push('/')
    },
    removeItem() {
      console.log('Removendo item')
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
.cart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;




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
      // border: 1px solid teal;
      height: 50%;
      text-align: center;
      margin-block: 0px !important;

    }
  }

}

.checkout-details {
  width: 100%;
  border: 2px solid rgba(97, 160, 212, 0.288);

  ul {
    border-bottom: 2px dotted brown;
    margin-bottom: 15px;
    padding-bottom: 8px;
  }

  .checkout {
    width: clamp(150px, 100%, 300px);
    background: #522500;
    color: $white;
    padding-block: 10px;
    border-radius: 4px;
    cursor: pointer;
    width: 70%;
  }

  .paymment-method {
    border: 1px solid red;
    display: inline-flex;
    width: 70px;
    height: 70px;
    flex-direction: column;

    label {
      display: block;
      width: 100%;
      background: rebeccapurple;
      color: aqua !important;
    }

    input {
      opacity: 0;

      :checked {
        .paymment-method {
          border: 2px solid green;
        }
      }
    }
  }
}


@media screen and (min-width:768px) {
  .cart-container {
    max-width: 1280px;
    justify-content: space-around;
    margin-inline: auto;


    .checkout-details {
      width: clamp(100px, 35vw, 450px);
      border: 2px solid rgb(108, 197, 5);

    }
  }
}
</style>
