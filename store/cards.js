import { defineStore } from 'pinia';

export const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: [
    {
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
    initializeCards() {
      if (typeof sessionStorage !== 'undefined') {
        const storedCards = sessionStorage.getItem('cards');
        this.cards = storedCards ? JSON.parse(storedCards) : [];
      } else {
        console.warn('sessionStorage is not available. Cards will not be persisted.');
      }
    },
      addCard(card) {
        this.cards.push(card);
        this.updateSessionStorage();
      },
  
      updateSessionStorage() {
        if (typeof sessionStorage !== 'undefined') {
          sessionStorage.setItem('cards', JSON.stringify(this.cards));
        } else {
          console.warn('sessionStorage is not available. Cards will not be persisted.');
        }
      },
  },

    getters: {
        mCards(){
            return this.cards.filter( cards => cards.serviceName.toLowerCase().startsWith('m'))
        }
    }
})