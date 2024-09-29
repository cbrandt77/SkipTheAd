<script setup lang="ts">
import {createApp, onMounted} from 'vue'
import DummyLevel from './levels/DummyLevel.vue'
import L4_BSOD from './levels/L4_BSOD.vue';

function onStartGame() {
  createApp(L4_BSOD).mount('#game-window-mount')
}

onMounted(() => {
  onStartGame()
})

</script>

<template>
<div class="game-window-wrapper">
  <div id="game-window-mount">
  </div>
</div>
</template>

<style>
.game-window-wrapper {
  width: 100%;
  height: 100%;
}

#game-window-mount {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 10% 80% 10%;
}

#game-window-mount > * {
  grid-column: 2;
  grid-row: 2;
  place-self: center;
  background-color: green;
}
</style>