<template>
<nav class="navbar">
    <div class="navbar-menu">
        <RouterLink to="/" class="navbar-item" v-bind:class="{ 'is-active': $route.path === '/' }">Home</RouterLink>
        <RouterLink to="/1" class="navbar-item" :class="{ 'is-active': $route.path === '/1' }">Page 1</RouterLink>
        <RouterLink to="/2" class="navbar-item" :class="{ 'is-active': $route.path === '/2' }">Page 2</RouterLink>
        <RouterLink to="/3" class="navbar-item" :class="{ 'is-active': $route.path === '/3' }">Page 3</RouterLink>
        <RouterLink to="/4" class="navbar-item" :class="{ 'is-active': $route.path === '/4' }">Page 4</RouterLink>
        <RouterLink to="/about" class="navbar-item" :class="{ 'is-active': $route.path === '/about' }">About</RouterLink>
    </div>
</nav>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>

<style>
.navbar {
    padding: 1rem;
    margin: 1rem;
}

.navbar-item {
    margin-right: 5rem;
    color: #333;
    text-decoration: none;
}

.navbar-item:hover {
    color: var(--green-color);
    transition: .5s;
}

.is-active {
    color: var(--green-color);
    font-weight: bold;
}

@media (max-width: 847px) {
    .navbar-menu {
        display: flex;
        flex-direction: column;
    }

    .navbar-item {
        margin-right: 0;
        margin-bottom: 1rem;
    }
}
</style>