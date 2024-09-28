<script setup lang="ts">
import {type Component, type Ref} from "vue";

import Inspector from "@/components/devtools/Inspector.vue";
import Console from "@/components/devtools/Console.vue";
import Network from "@/components/devtools/Network.vue";
import { ref } from "vue";

const tabs = {
  Inspector,
  Console,
  Network
}

const currentTabName: Ref<keyof typeof tabs> = ref("Inspector")
</script>

<template>
  <div class="devtools">
    <button
        v-for="(_, thisTabName) in tabs"
        v-bind:key="thisTabName"
        v-bind:class="['tab-button', { active: currentTabName === thisTabName }]"
        @click="currentTabName = thisTabName"
    >
      {{ thisTabName }}
    </button>
    <component v-bind:is="tabs[currentTabName]" class="devtoolstab"></component>
  </div>
</template>

<style scoped>
.devtools {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
  
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button:active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>