<template>
    <div>
        <h1 v-if="count % 2 == 0" class="basic">Page Two</h1>
        <h1 v-else class="green">Page Two</h1>
        
        <div class="buttons">
            <button @click="displayWelcome">Bonjour 👋</button>
            <button v-on:click="increment">Clics : {{ count }}</button>
            <button @click="increment">Nombre de clic(s) : {{ count }} </button>
        </div>
        <hr>

        <button @click="toggle">Toggle</button>
        <h2 v-if="show">Show vaut true 😀</h2>
        <h2 v-else>Show vaut false 😔</h2>

        <hr>

        <form @submit.prevent="addTodo">
            <div class="todo">
                <input v-model="newTodo" required placeholder="Nouvelle tâche">
                <button>Ajouter une tâche</button>
            </div>
        </form>
    
        <button @click="hideCompleted = !hideCompleted"> {{ hideCompleted ? 'Afficher toutes' : 'Cacher complétées' }}</button>
        <ul>
            <li v-for="todo in filteredTodos" :key="todo.id">
                <input type="checkbox" v-model="todo.done">
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
                <button @click="removeTodo(todo)">X</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const count = ref(0)
    const show = ref(true)
    const newTodo = ref('')
    const hideCompleted = ref(false)

    // donne à chaque todo un id unique
    let id = 0

    const todos = ref([
        { id: id++, text: 'Tâche 1', done: false },
        { id: id++, text: 'Tâche 2', done: true },
        { id: id++, text: 'Tâche 3', done: false }
    ])

    const filteredTodos = computed(() => {
        return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value
    })

    function displayWelcome(){
        alert('Bienvenue ! 👋');
    }
    
    function increment() {
        count.value++;
    }

    function toggle(){
        show.value = !show.value;
    }

    function addTodo() {
        todos.value.push({id: id++, text: newTodo.value, done: false})
        newTodo.value = ''
    }

    function removeTodo(todo) {
        todos.value = todos.value.filter((t) => t !== todo)
    }

</script>

<style scoped>
    .done {
    text-decoration: line-through;
    }
    .basic {
        color: #2c3e50;
    }
    .green{
        color:var(--green-color);
    }
    .buttons {
        justify-content: center;
        display: flex;
        gap: 1rem;
    }
    .todo {
        justify-content: center;
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>