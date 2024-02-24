<template>
  <div class="container mt-5">
    <h4 class="mb-4" id="heading">Services that start with "m"</h4>
    <div class="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-xs-1 justify-content-center">
      <div v-if="mCards" v-for="card in mCards" :key="card.serviceName" class="col">
        <card :card="card" />
      </div>
    </div>
  
    <div class="texty mt-4">
      <h4 class="mb-4" id="heading">Coding this challenge</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae odit temporibus vel ullam commodi quos itaque quasi. Molestias laudantium eligendi in aliquid dolorum a rem excepturi voluptas tenetur, ab sint.</p>
    </div>
  </div>
</template>

  
<script setup>
  import { useCardsStore } from '~/store/cards';
  const cardsStore = useCardsStore();
  const { mCards } = toRefs(cardsStore);
</script>
  