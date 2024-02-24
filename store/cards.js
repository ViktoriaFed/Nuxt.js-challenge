import { defineStore } from 'pinia';

export const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: [{
        serviceName: "Grocery delivery",
        businessName: "Spar",
        rating: 4.4,
    },
    {
        serviceName: "Babysitter",
        businessName: "Babysitter&Co",
        rating: 4.8, 
    },
    {
        serviceName: "Makeup for any occasion",
        businessName: "Anna Smith",
        rating: 5, 
    }
    ],
  }),

  actions: {
    addCard(card) {
      this.cards.push(card)
    },
  },

    getters: {
        mCards(){
            return this.cards.filter( cards => cards.serviceName.toLowerCase().startsWith('m'))
        }
        // getCardByChar: (state) => {  
        //     return state.cards.filter(card => card.serviceName..startsWith('m'));
        // }
    }
})