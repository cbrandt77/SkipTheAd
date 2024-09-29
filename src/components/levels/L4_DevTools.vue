<template>
    <p>
        const button = document.getElementBy
        <select name="q1" id="q1">
            <option value="class">Class</option>
            <option value="id">ID</option>
            <option value="TagName">TagName</option>
            <option value="Name">Name</option>
        </select>
        ('seekTheTruth');
    </p>
    <br>
    <p>
        button.
        <select name="q2" id="q2">
            <option value="innerHTML">innerHTML</option>
            <option value="addEventListener">addEventListener</option>
            <option value="destroy">destroy</option>
            <option value="reveal">reveal</option>
        </select>
        ('click', revealSecret);
    </p>
    <br>
    <p>
        function revealSecret() {
            bluescreen.
            <select name="q3" id="q3">
                <option value="disable">disable.now</option>
                <option value="style">style.display = "none"</option>
                <option value="surpress">surpress = "true"</option>
                <option value="report">info.reportToServer()</option>
            </select>
        }
    </p>
    <br>

    <button @click="checkAnswer">Submit</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

function checkAnswer() {
    const q1 = (document.getElementById('q1') as HTMLSelectElement).value;
    const q2 = (document.getElementById('q2') as HTMLSelectElement).value;
    const q3 = (document.getElementById('q3') as HTMLSelectElement).value;

    if (q1 === 'id' && q2 === 'addEventListener' && q3 === 'style') {
        alert('Correct!') // TODO: replace according to standard style
    } else {
        alert('Incorrect. Please try again.') // TODO: replace according to standard style
    }
}

</script>

<style>
select, option {
    background-color: gray;
}
</style>