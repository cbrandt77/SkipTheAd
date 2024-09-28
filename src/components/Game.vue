<script setup lang="ts">
import FakeDevTools from "@/components/FakeDevToolsContainer.vue";
import GameWindowWrapper from "@/components/GameWindowWrapper.vue";

</script>

<template>
  <header>
    <div class="titlebar">Skip The Ad!</div>
    <div class="navbar"></div>
    <h2>Game {{ $route.params.id }}</h2>
  </header>

  <main>
    <GameWindowWrapper/>
    <FakeDevTools/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  
  header .navbar {
    
  }
}
</style>
