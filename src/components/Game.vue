<script setup lang="ts">
import FakeDevTools from "@/components/FakeDevToolsContainer.vue";
import GameWindowWrapper from "@/components/GameWindowWrapper.vue";

</script>

<template>
  <header>
    <div class="titlebar">Skip The Ad!</div>
    <div class="navbar"></div>
  </header>

  <main>
    <GameWindowWrapper/>
    <FakeDevTools/>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  line-height: 1.5;
  display: grid;
  grid-template-rows: 50% 50%;
}
</style>
