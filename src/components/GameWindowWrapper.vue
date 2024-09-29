<script setup lang="ts">
// import {type Component, createApp, onMounted, watch} from 'vue'
import DummyLevel from './levels/DummyLevel.vue'
import L4_BSOD from './levels/L4_BSOD.vue';
import Level1 from '@/components/levels/level1.vue';
import Level2 from "@/components/levels/level2.vue";
import Level3 from "@/components/levels/level3.vue";


const { levelId } = defineProps({
  levelId: {
    type: Number,
    default: 1
  }
});

// const emit = defineEmits(['update:levelId']);
const levels = [DummyLevel, Level1, Level2, Level3]

// function nextLevel() {
//   emit('update:levelId', (props.levelId + 1) % levels.length);
// }

</script>

<template>
<div class="game-window-wrapper">
  <component :is="levels[levelId]" />
  <button id="thing" @click="levelId++"></button>
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