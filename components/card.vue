<template>
    <div class="card m-1 p-1">
                <div class="card-body d-flex flex-column fs-5">

                    <h5 class="card-title text-truncate border-bottom pb-2">{{ card.serviceName }}</h5>
                    <p class="card-text" id="name">{{ card.businessName }}</p>

                    <div class="rating d-flex align-items-center">
                        <template v-for="i in Math.floor(card.rating)">
                            <font-awesome-icon icon="star" style="color: #FFD43B;" />
                        </template>
                        <template v-if="card.rating - Math.floor(card.rating) > 0">
                            <font-awesome-icon icon="star-half-alt" style="color: #FFD43B;" />
                        </template>

                        <p class="card-text" id="rating">{{ card.rating }}</p>
                    </div>
                    <div class="btns d-flex mt-2 text-center justify-content-center">
                        <NuxtLink to="/" class="btn m-2" id="redirect">To the provider</NuxtLink> 
                        <NuxtLink to="/" class="btn m-2" id="details">Details</NuxtLink> 
                     
                    </div>
                    
                </div>
    </div>
</template>

<script setup>
    const props = defineProps(['card']);
</script>

<style>
    .img {
        max-height: 240px;
        max-width: 70%;
        margin: 0 auto;
        object-fit: cover;
    }
    .rating {
        display: flex;
    }
</style>