<script setup lang="ts">
import {type Ref, ref} from "vue";
import {createApp, onMounted} from 'vue'

import Inspector from "@/components/devtools/Inspector.vue";
import Console from "@/components/devtools/Console.vue";
import Network from "@/components/devtools/Network.vue";
import L4_DevTools from "./levels/L4_DevTools.vue";

const tabs = {
  Inspector,
  Console,
  Network,
  L4_DevTools
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
    <div class="devtools-tab">
      <component v-bind:is="tabs[currentTabName]" class="devtoolstab"/>
    </div>
  </div>
</template>

<style>
.devtools {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  user-select: none;
  overflow-x: auto;
  z-index: 9;
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
  height: 100%;
  width: 100%;
  place-self: center;
}

.tablist {
  top: 0;
  left: 0;
}

.devtoolstab {
  background-color: white;
}
</style>