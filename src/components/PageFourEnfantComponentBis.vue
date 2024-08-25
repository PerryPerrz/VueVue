<template>
    <div>
        <h2>Component Bis de Page Four.</h2>
        <slot name="slot1">Poulet</slot>
        <slot>Je suis le slot de base.</slot>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const cpt = ref(0)
    
    const plusOne = computed({
        get: () => cpt.value + 1,
        set: (value) => cpt.value = value
    })

    console.log('plusOne', plusOne.value) // On appel le getter, ça vaut 1

    plusOne.value = 10 // On appel le setter
    console.log('cpt', cpt.value) // Ça vaut 10

    console.log('plusOne', plusOne.value) // On appel le getter, ça vaut 11
</script>

<style scoped></style>