<template>
    <div class="container">
 
    
        <div class="container">
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm">Add a service</button>
            <div class="collapse"  id="collapseForm">
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
                    
                        <button type="submit" class="btn btn-primary">Add</button>
                    </form>
                </div>

            </div>
            
        </div>

        <div class="row row-cols-lg-4 row-cols-md-4 row-cols-sm-3 row-cols-xs-2 justify-content-center">
            <div v-for="card in cards" >
                <card :card="card"/>
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
  }
};
    
</script>
