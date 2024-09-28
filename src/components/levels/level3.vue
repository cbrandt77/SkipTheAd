<script setup lang="ts">

import {useDevToolsGlobalData} from "@/ts/capabilities";

const devTools = useDevToolsGlobalData();
</script>

<template>
  <div>
    <h3>Level 3</h3>
    <!-- The current route is accessible as $route in the template -->
    Game {{ $route.params.id }}
  </div>
</template>

<style scoped>

</style>