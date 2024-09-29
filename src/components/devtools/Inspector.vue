<script setup lang="ts">

import {useDevToolsGlobalData} from "@/ts/capabilities";
import HtmlEntry from "@/components/devtools/inspector/HtmlEntry.vue";

const devToolsData = useDevToolsGlobalData()

</script>

<template>
  <div class="devtoolstab">
    <div class="devtools-htmlview">
      <HtmlEntry class="htmlentry" v-for="(el, i) in devToolsData.inspectorDetails.html" :key="i" :tag="el"/>
    </div>
    <div class="devtools-cssview" v-for="(el, i) in devToolsData.inspectorDetails.css" :key="i">{{ el }}</div>
    <table class="devtools-jsview" v-for="(el, i) in devToolsData.inspectorDetails.js" :key="i">{{ el }}</table>
  </div>
</template>

<style>

</style>