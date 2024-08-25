<template>
  <div class="about">
    <h1>About</h1>

    <li v-for="(item, index) in items">
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
    
    <hr>
  
    <li v-for="{ message } in items">
      {{ message }}
    </li>

    <hr>

    <li v-for="(value, key, index) in test">
      {{ index }} - {{ key }} - <span class="green">{{ value }}</span>
    </li>

    <hr>

    <div class="selectCompo">
      <select v-model="selected" class="select">
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Sélectionné: {{ selected }}</span>
    </div>

    <hr>

    <div class="selectCompo">
      <select v-model="selectedBis" class="select">
        <option disabled value="">Sélectionnez-en un</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    <span>Sélectionné : {{ selectedBis }}</span>
  </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const selected = ref('A')
const selectedBis = ref('')

const test = ref({
  title: 'Hello',
  author: 'Jane Doe',
  date: '2016-12-10'
})

const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' }
])
</script>

<style scoped>
.green {
  color: var(--green-color);
}
.selectCompo {
  padding: 1rem;
  border: 1px solid var(--green-color);
  border-radius: 5px;
  display: inline-block;
}
.select {
  margin-right: 1rem;
}
</style>