<script setup lang="ts">

import {useDevToolsGlobalData} from "@/ts/capabilities";

const devTools = useDevToolsGlobalData();
</script>

<template>
  <div>
    <h1>Level 1</h1>
    Game {{ $route.params.id }}
  </div>
</template>

<style scoped>

</style>