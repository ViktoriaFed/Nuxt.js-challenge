<template>
    <div>
        <header>
        <nav class="navbar navbar-expand fs-4" id="navbar">
            <div class="container-fluid">
                <NuxtLink to="/" class="navbar-brand fw-bold ms-2">Nuxt.js</NuxtLink> 
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav" id="navlinks" style="color: #fff;">
                        <li class="navbar-item ms-2">
                            <NuxtLink to="/" class="nav-link ms-2">Homepage</NuxtLink>
                        </li>
                        <li class="navbar-item">
                            <NuxtLink to="/experience" class="nav-link">Experience</NuxtLink>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    </header>

    <!-- output the page content-->

        <div>
            <slot />
        </div>
    </div>
    
</template>

<script setup>
    
    const loadBootstrapScript = () => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    script.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
    };

    import { onMounted } from 'vue';
 
    onMounted(() => {
    loadBootstrapScript();
    });
</script>

<style scoped>
.router-link-exact-active{
    color: #fff;
}
</style>

