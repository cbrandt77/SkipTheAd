<script setup lang="ts">
import {type Component, createApp, onMounted, watch} from 'vue'
import DummyLevel from './levels/DummyLevel.vue'
import Level1 from '@/components/levels/level1.vue';
import Level2 from "@/components/levels/level2.vue";
import Level3 from "@/components/levels/level3.vue";


let { levelId } = defineProps({
  levelId: {
    type: Number,
    default: 1
  }
})

const levels = [Level1, Level2, Level3]

</script>

<template>
<div class="game-window-wrapper">
  <component :is="levels[levelId]" />
  <button id="thing" @click="levelId++">asdknaslknasknskaldkansld</button>
</div>
</template>

<style scoped>
.game-window-wrapper {
  margin: auto;
  background-color: white;
  place-items: center;
}
</style>