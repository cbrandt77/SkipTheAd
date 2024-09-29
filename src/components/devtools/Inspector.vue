<script setup lang="ts">

import {useDevToolsGlobalData} from "@/ts/capabilities";

const devToolsData = useDevToolsGlobalData()
</script>

<template>
  <div class="devtoolstab">
    <table class="devtools-htmlview" v-for="(el, i) in devToolsData.inspectorDetails.html" :key="i">{{ el }}</table>
    <table class="devtools-cssview" v-for="(el, i) in devToolsData.inspectorDetails.css" :key="i">{{ el }}</table>
    <table class="devtools-jsview" v-for="(el, i) in devToolsData.inspectorDetails.js" :key="i">{{ el }}</table>
  </div>
</template>

<style>

</style>