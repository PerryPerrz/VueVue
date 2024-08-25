<template>
  <div>
      <h1>Page One</h1>
      <input v-bind:value="text" v-on:input="onInput" placeholder="Tapez">
      <p>Votre texte : {{ text }}</p>
      <p class="error" v-if="text.length <= 6">Moins de 6 car</p>
      <p>Nombre de caractères : <span class="green">{{ carCpt }}</span></p>

      <h3>Valeur stockée dans le store</h3>
      <input v-model="textBis" placeholder="Tapez (Double Binding)">
      <p v-if="check">Votre texte : {{ textBis }}</p>
      <p v-else>Indiquez une valeur</p>

      <p class="error" v-if="textBis.length <= 6">Moins de 6 car</p>

      <hr>

      <h3>Ajout des données dans le Store "datas"</h3>
      
      <div>
        <span class="opt">(Recupérable <RouterLink to="/3"> ici </RouterLink>)</span>

        <div class="buttons">
          <button @click="add" :disabled="isEmpty" :class="{ disabled: isEmpty }">Ajouter</button>
          <button @click="store.displayDatas">Afficher</button>
          <button @click="store.clearData">Vider</button>
      </div>
      </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useDatasStore } from '@/store/useDatasStore';
import { RouterLink } from 'vue-router';

const text = ref('')
const textBis = ref('')
const carCpt = ref(0)

const store = useDatasStore();

function onInput(e){
  text.value = e.target.value
  carCpt.value = text.value.length
}

function check(){
  return textBis.value.length == 0;
}

const isEmpty = computed(() => textBis.value.length == 0)

function add(){
  store.addData(textBis.value);
}
</script>

<style scoped>
.error {
  color:lightsalmon
}
.green {
  color: var(--green-color)
}
a {
  color: var(--green-color);
  text-decoration: none
}
.opt {
  margin-right: 1rem;
}
.disabled {
  background-color: #e7e6e6;
  color: gray;
}
.disabled:hover {
  cursor: not-allowed;
}
.buttons {
  justify-content: center;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
</style>