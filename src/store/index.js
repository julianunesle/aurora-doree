import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
  state: () => ({
    count: 0,
    isLogged: false,
    cartAmout: 0,
    cartList: []
  }),

  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    setLogged(status){
      this.isLogged = status
    },
    getSubtotal() {
      let total = 0
      for (let n = 0; n < this.cartList.length; n++) {
        let currentItem = this.cartList[n]
        total += currentItem.unitaryPrice * currentItem.quantity
      }
      this.cartAmout = total.toFixed(2)
    },
    addToCart(item) {
      let existOnCart = this.cartList !== null && this.cartList.find(({ id }) => id == item.id)
      if (!existOnCart) {
        this.cartList.push(item)
        this.getSubtotal()
      } else {
        console.log('tem')
      }
    },

    changeQuantity(id, qnt) {
      let product = this.cartList.filter((item) => item.id == id)
      product[0].quantity = qnt
      this.getSubtotal()
    },
    removeToCart(id) {
      let index = this.cartList.findIndex(product => product.id == id)
      this.cartList.splice(index, 1)
      this.getSubtotal()
    }
  },
})