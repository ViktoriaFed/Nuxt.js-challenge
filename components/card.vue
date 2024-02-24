<template>
    <div class="card m-1 p-1">
                <div class="card-body">
                    <h5 class="card-title text-truncate">{{ card.serviceName }}</h5>
                    <p class="card-text">{{ card.businessName }}</p>
                    <p class="card-text">{{ card.rating }}</p>
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
</style>