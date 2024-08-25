<template>
  <Navbar/>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Navbar from './components/Navbar.vue';

</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }

button:hover {
  cursor: pointer;
}
</style>
