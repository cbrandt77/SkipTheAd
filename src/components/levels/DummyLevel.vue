<script setup lang="ts">
import {hasDevtoolsDetails} from "@/ts/globals";
import {inject} from "vue";
import {INJECT_PROVIDE} from "@/ts/constants";

const {populateGlobal, inspectorDetails, networkPackets, consoleLines} =  hasDevtoolsDetails()

populateGlobal(inject(INJECT_PROVIDE.DevToolsDetails)!)

// the other three are now mutable and should be reactive across the site
</script>

<template>
<canvas id="game-canvas"></canvas>
</template>

<style scoped>

</style>