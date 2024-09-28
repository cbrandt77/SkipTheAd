<script setup lang="ts">
import { createApp } from 'vue'
import DummyLevel from './levels/DummyLevel.vue'

function onStartGame() {
  createApp(DummyLevel).mount('#game-window-mount')
}
onStartGame()
</script>

<template>
<div class="game-window-wrapper">
  <div id="game-window-mount"/>
</div>
</template>

<style scoped>
.game-window-wrapper {
  margin: auto;
  background-color: white;
  place-items: center;
}
</style>