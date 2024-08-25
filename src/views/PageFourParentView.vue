<template>
    <div>
        <h1>Page Four</h1> 
        <PageFourEnfantComponent v-bind:msg="msg" v-on:response="(msg1) => childMsg = msg1"/>
        <p> <span class="green">Parent > </span>Message émit par l'enfant : <span :title="childMsg" class="green">{{ childMsg }}</span></p>
        
        <hr>

        <PageFourEnfantComponent :msg="msgBis" @response="(msg2) => childMsgBis = msg2" />
        <p><span class="green">Parent > </span>Message émit par l'enfant : <span class="green" :title="childMsgBis">{{ childMsgBis }}</span></p>

        <button @click="completeMsgBis" class="completeBtn">Compléter le message</button>

        <hr>
        
        <PageFourEnfantComponentBis>
            <template #slot1>YAAAAAAA</template>
            Il y a un slot 🎃</PageFourEnfantComponentBis>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    import PageFourEnfantComponent from '../components/PageFourEnfantComponent.vue'
    import PageFourEnfantComponentBis from '@/components/PageFourEnfantComponentBis.vue';

    //Le message émit par l'enfant correspond au second argument, il est récup dans msg et on le stock dans childMsg
    const childMsg = ref('')
    const childMsgBis = ref('')

    const msg = 'Dindon'
    const msgBis = ref('Glou')

    function completeMsgBis() {
        msgBis.value += msgBis.value
    }

</script>

<style scoped>
    .green {
        color: var(--green-color);
    }
    .completeBtn {
        margin-bottom: 1rem;
    }
</style>