<script setup lang="ts">

import {useDevToolsGlobalData} from "@/ts/capabilities";

const devTools = useDevToolsGlobalData();
</script>

<template>
<!--<canvas id="game-canvas"></canvas>-->
  <button class="testbutton" @click="devTools.logLine('button clicked')">test</button>
</template>

<style scoped>

</style>