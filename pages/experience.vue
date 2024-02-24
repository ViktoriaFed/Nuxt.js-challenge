<template>
    <div class="container">
      <h2>experience page</h2>
      <div v-if="mCards">
        <div v-for="card in mCards" :key="card.serviceName">
          <card :card="card"/>
        </div>
      </div>
    </div>
</template>
  
<script setup>
  import { useCardsStore } from '~/store/cards';
  const cardsStore = useCardsStore();
  const { mCards } = toRefs(cardsStore);
</script>
  