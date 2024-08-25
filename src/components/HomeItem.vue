<template>
  <div class="item card">
      <h3>
        <slot name="title"></slot>
      </h3>
      <h5>
        <slot name="description"></slot>
      </h5>
      <div>
        <h4>Datas envoyés par le parent</h4>
        <span>
          id : {{ id }} | open : {{ isOpen }}
        </span>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  isOpen: Boolean
})

</script>

<style scoped>
.item {
  display: grid;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--h3-color);
}

.card {
  max-width: 800px;
  padding: 1rem;
  border: 2px solid var(--green-color);
  border-radius: 1rem;
  z-index: 1;
}

.card:hover {
  box-shadow: 0 0 10px 0 var(--green-color);
  transition: all 0.3s ease-in-out;
  scale: 1.02;
}
</style>
