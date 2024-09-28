<script setup lang="ts">
import { devToolsDetails } from '@/ts/globals'
const logLine = (s: string) => devToolsDetails.logLine(s)
</script>

<template>
<!--<canvas id="game-canvas"></canvas>-->
  <button style="color:black" @click="logLine('button clicked')">test</button>
</template>

<style scoped>

</style>