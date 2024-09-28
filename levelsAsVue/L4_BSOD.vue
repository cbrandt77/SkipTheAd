<template>
    <div>
        <div v-if="showBluescreen" id="bluescreen" @click="toggleScreens">
            <!-- BSOD content here -->
        </div>
        <div v-else id="codescreen">
            <!-- Code screen content here -->
            <input type="text" v-model="input" id="code_input" />
            <button id="submit" @click="checkAnswer">Submit</button>
            <button id="tempReturn" @click="toggleScreens">Return</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showBluescreen = ref(true)
const input = ref('')
const answer = 'cronos' // TODO: replace with hashed answer &| store elsewhere

function toggleScreens() {
    showBluescreen.value = !showBluescreen.value
}

function checkAnswer() {
    if (input.value === answer) {
        alert('Correct!') // TODO: replace according to standard style
        // TODO: alert wrapper of success and progress the level
    } else {
        alert('Incorrect. Please try again.') // TODO: replace according to standard style
        // TODO: alert wrapper of failure
        // TODO: consider providing a hint to the user

        // clear the input field
        input.value = ''
    }
}
</script>

<style scoped>
#bluescreen {
    /* size properties */
    padding: 50px;
    margin: 0;
    width: 100vw;
    height: 100vh;

    /* styling properties */
    background-color: #0078d7;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    /* reactive properties */
    display: block; /* changed in javascript */
}

#bluescreen > h1 {
    /* styling properties */
    font-size: 4em;
    font-weight: lighter;
}

#bluescreen > h2 {
    /* styling properties */
    font-size: 2em;
    padding-top: 10px;
}

#codescreen {
    /* size properties */
    padding: 50px;
    margin: 0;
    width: 100vw;
    height: 100vh;

    /* styling properties */
    background-color: black;
    color: #008f11;

    /* reactive properties */
    display: none; /* changed in javascript */
}
</style>