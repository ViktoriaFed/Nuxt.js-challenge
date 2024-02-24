<template>
    <div class="container mt-5">
      <div class="row">

        <div class="col-lg-9 fs-5">
          <div class="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-xs-1 justify-content-center">
            <div v-for="card in cards" :key="card.id">
              <card :card="card" />
            </div>
          </div>
        </div>
  
        
        <div class="col-lg-3 fs-5">
          <button class="btn mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm" id="add-btn">Add a service</button>
  
          <div class="collapse" id="collapseForm">
            <div class="card card-body">
              <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                  <label for="service-name" class="form-label">Service name</label>
                  <input v-model="newserviceName" type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label for="business-name" class="form-label">Business name</label>
                  <input v-model="newbusinessName" type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label for="service-rating" class="form-label">Service rating</label>
                  <input v-model="newrating" type="text" class="form-control">
                </div>
                <button type="submit" class="btn"  id="add-btn">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>

    import { ref } from 'vue';
    import { useCardsStore } from '~/store/cards';

    const cardsStore = useCardsStore();
    const { cards } = storeToRefs(cardsStore);

    const newserviceName = ref('');
    const newbusinessName = ref('');
    const newrating = ref('');

    const handleSubmit = () => {
    if (newserviceName.value.length > 0) {
        cardsStore.addCard({
        serviceName: newserviceName.value,
        businessName: newbusinessName.value,
        rating: newrating.value
        });
        newserviceName.value = "";
        newbusinessName.value = "";
        newrating.value = "";
        
    }
    };
    
</script>
