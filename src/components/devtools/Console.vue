<script setup lang="ts">
import { devToolsDetails } from '@/ts/globals'


</script>

<template>
  <div class="devtoolstab">
    <table v-for="(line, i) in devToolsDetails.consoleLines" :key="i" class="consolelines">{{ line }}</table>
  </div>
</template>

<style scoped>
.consolelines {
  background-color:red;
  color:lime;
}
</style>