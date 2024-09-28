<script setup lang="ts">
import {type Component, type Ref, ref} from "vue";

import Inspector from "@/components/devtools/Inspector.vue";
import Console from "@/components/devtools/Console.vue";
import Network from "@/components/devtools/Network.vue";

const tabs = {
  Inspector,
  Console,
  Network
}

const currentTabName: Ref<keyof typeof tabs> = ref("Inspector")
</script>

<template>
  <div class="devtools footer">
    <div class="tablist">
      <button
          v-for="(_, thisTabName) in tabs"
          v-bind:key="thisTabName"
          v-bind:class="['tab-button', { active: currentTabName === thisTabName }]"
          @click="currentTabName = thisTabName; console.log('changed tab')"
      >
        {{ thisTabName }}
      </button>
    </div>
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
  user-select: none;
  overflow-x: auto;
  height: 200px;
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
  color: black;
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

/* TODO make good */
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.tablist {
  position: absolute;
  top: 0;
  left: 0;
}

.devtoolstab {
  position: absolute;
  bottom: 0;
  background-color: white;
}
</style>