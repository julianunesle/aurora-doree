import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({ 
        count: 0, 
        name: 'Sol', 
        cartList: []
    }),

    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
      addToCart(item){
       let existOnCart = this.cartList !== null && this.cartList.find(({id}) => id == item.id) 
       if(!existOnCart){
         this.cartList.push(item)
        }else{
         console.log('tem')
       }
      }
    },
  })