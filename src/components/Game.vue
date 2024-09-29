<script setup lang="ts">
import FakeDevTools from "@/components/FakeDevToolsContainer.vue";
import GameWindowWrapper from "@/components/GameWindowWrapper.vue";
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";


const levelId = ref(useRoute().params.id);

</script>

<template>
  <div id="GameContainer">
  <header>
    <div class="titlebar">Skip The Ad!</div>
    <div class="navbar"></div>
    <h2>Game {{ $route.params.id }}</h2>
  </header>

  <main>
    <GameWindowWrapper :levelId="parseInt(<string>levelId)"/>
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
