<template>
    <div>
        <h2>Component de Page Four.</h2>
        <p> Prop envoyé par le parent : <span class="green msgSendbyParent">{{ msg || 'Aucune' }}</span></p>
        <div class="buttons">
            <button @click="emitResponse">Emit</button>
            <button @click="resetResponse">Reset</button>
        </div>
    </div>
</template>

<script setup>
// les props sont les données envoyées par le parent vers le composant enfant. Ici on déclare ceux acceptés par le composant enfant
const props = defineProps({
    msg: String
})

// les emits sont les événements envoyés par le composant enfant vers le parent. Ici on déclare le nom de l'évenement que le composant enfant peut émettre, ici l'enfant peut émettre des events de type 'response'
const emit = defineEmits(['response'])

// on emit un message vers le parent
  function emitResponse() {
    emit('response', 'Je suis le composant enfant')
  }

  function resetResponse(){
    emit('response', '')
  }
</script>

<style scoped>
    .green {
        color: var(--green-color);
    }
    .buttons {
        justify-content: center;
        display: flex;
        gap: 10px;
    }
</style>