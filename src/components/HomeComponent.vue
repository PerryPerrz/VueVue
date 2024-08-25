<template>
  <div class="grid">
    <HomeItem v-bind:id="hi1Id" v-bind:is-open="hi1Bool">
      <template #title>{{ hi1title }}</template>
      <template #description>{{ hi1description }}</template>
    </HomeItem>

    <HomeItem v-bind:id="2" v-bind:is-open="true">
      <template #title>HomeItem2</template>
      <template #description>HomeItem2 description</template>
    </HomeItem>
    
    <HomeItem v-bind:id="3" v-bind:is-open="false">
      <template #title>HomeItem3</template>
      <template #description>HomeItem3 description</template>
    </HomeItem>

    <HomeItem v-bind:id="4" v-bind:is-open="true">
      <template #title>HomeItem4</template>
      <template #description>HomeItem4 description</template>
    </HomeItem>
  </div>

  <div class="buttons">
    <button @click="hi1Id++">Increment HomeItem1</button>
    <button @click="hi1Id--">Decrement HomeItem1</button>
    <button @click="hi1Bool = !hi1Bool">Toggle HomeItem1</button>
  </div>

  <div class="inputs">
    <span>
      Titre de HomeItem1
      <input type="text" v-model="hi1title"></input>
    </span>
    
    <span>
      Description de HomeItem1
      <input type="text" v-model="hi1description"></input>
    </span>
  </div>
  
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import HomeItem from './HomeItem.vue'

  const hi1Id = ref(1)
  const hi1Bool = ref(true)

  const hi1title = ref('HomeItem1')
  const hi1description = ref('HomeItem1 description')
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1rem;
  }
  .buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .inputs {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .inputs span {
    display: flex;
    row-gap: 0.5rem;
    flex-direction: column;
  }
</style>