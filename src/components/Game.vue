<script setup lang="ts">
import FakeDevTools from "@/components/FakeDevToolsContainer.vue";
import GameWindowWrapper from "@/components/GameWindowWrapper.vue";

</script>

<template>
  <div id="GameContainer">
  <header>
    <div class="titlebar">Skip The Ad!</div>
    <div class="navbar"></div>
  </header>

  <main>
    <GameWindowWrapper/>
    <FakeDevTools/>
  </main>
  </div>
</template>

<style>

.container {
  height: 100%;
}

header {
  line-height: 1.5;
}

main {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
}

main > * {
  background-color: lightblue;
  border: 2px solid black;
}
</style>
