<template>
    <div>
      <h1>Page Three</h1>
      <p>Count : {{ count }}</p>

      <div class="buttons">
        <button @click="count++">Increment</button>
        <button @click="count--">Decrement</button>
      </div>

      <hr>

      <input v-model="texte" placeholder="Enter text here" />
      <p>Votre texte : <span class="green">{{ display }}</span></p>

      <p>
        Check me :
        <input type="checkbox" v-model="checked">
        |
        <span class="green">{{ displayBis }}</span>
      </p>
    
      <hr>

      (Pour ajouter des données dans le store c'est par <a href="/1">ici</a>)
      <p>Les données du store : <span class="green">{{ datas }}</span></p>
      <button @click="store.displayDatas">Afficher</button>
    </div>
</template>

<script setup>
import {ref, watch, computed} from 'vue'
import { useDatasStore } from '@/store/useDatasStore';

const count = ref(0);
const texte = ref('');
const display = ref('');

const checked = ref(false);
const displayBis = ref('Unchecked');

const store = useDatasStore();

function displayCheckbox(value) {
  displayBis.value = value ? 'Checked' : 'Unchecked';
}

watch(count, (newCount) => {
  console.log(`new count is: ${newCount}`)
})

watch(texte, (newTexte) => {
  display.value = newTexte;
})

watch(checked, displayCheckbox)

// Get the datas from the store
const datas = computed (() => store.getDatas());

</script>

<style scoped>
.green {
  color: var(--green-color);
}
.buttons {
  justify-content: center;
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
a {
  color: var(--green-color);
  text-decoration: none
}
</style>