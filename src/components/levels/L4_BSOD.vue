<template>
    <div>
        <div v-if="showBluescreen" id="bluescreen" @click="toggleScreens">
            <h1>:(</h1>
            <h2>Your code didn't compile correctly
                and contains bugs that need to be fixed.</h2>
            <h2>Please check the terminal and correct any issues.</h2>
        </div>
        <div v-else id="codescreen">
            <label for="code_input">Enter the code here:</label>
            <input type="text" v-model="input" id="code_input" />
            <button id="submit" @click="checkAnswer">Submit</button>
            <button id="tempReturn" @click="toggleScreens">Return</button>
        </div>
    </div>
</template>

<script setup lang="ts">
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
    width: 100%;
    height: 100%;

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
    width: 100%;
    height: 100%;

    /* styling properties */
    background-color: black;
    color: #008f11;

    /* reactive properties */
    display: none; /* changed in javascript */
}
</style>