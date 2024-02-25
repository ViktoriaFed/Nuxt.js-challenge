<template>
  <div class="container mt-5 pb-4">
  
    <div class="texty mt-4 pt-4 mb-4 pb-4">
      <h4 class="mb-4 text-center" id="heading">Coding this challenge</h4>
      <section>
        <p>Working with Nuxt.js was a new and insightful experience for me, especially considering that my background primarily revolves around Angular. I found the transition to Nuxt.js to be a learning curve, but an enjoyable one :) The simplicity of the logic in Nuxt.js was a refreshing change and made the development process smoother.</p>
        <p>As mentioned in the task, to keep the styling simple, I opted to use Bootstrap. Even though it helps with a cleaner and more organized appearance, sometimes it creates trouble when one wants to add some custom styling.</p>
        <p>One notable challenge I encountered was the shift from Nuxt.js version 2 to version 3. The differences in syntax became a source of occasional hurdles. When facing errors, I had to invest extra time in thorough research to ensure that the solutions were applicable to the specific version I was working with. This adjustment period, though challenging, allowed me to gain a deeper understanding of the nuances between versions.</p>
        <p>Despite these challenges, I appreciate the opportunity to delve into Nuxt.js and expand my skill set. Thank you for this valuable experience, and I look forward to any additional feedback or guidance.</p>
      </section>
    </div>

    <div class="container pb-4">
      <h4 class="mb-4 text-center" id="heading">Services that start with "m"</h4>
      <div class="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-xs-1 justify-content-center pt-2 mt-4">
        <div v-if="mCards" v-for="card in mCards" :key="card.serviceName" class="col">
          <card :card="card" />
        </div>
      </div>
    </div>
    
  </div>
</template>

  
<script setup>
  import { useCardsStore } from '~/store/cards';
  const cardsStore = useCardsStore();
  const { mCards } = toRefs(cardsStore);
</script>

<style>
  @media (max-width: 767px) {
      #heading {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }

    }
</style>
  