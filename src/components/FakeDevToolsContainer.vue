<script setup lang="ts">
import {type Ref, ref} from "vue";

import Inspector from "@/components/devtools/Inspector.vue";
import Console from "@/components/devtools/Console.vue";
import Network from "@/components/devtools/Network.vue";

const tabs = {
  Inspector,
  Console,
  Network
}
const currentTabName: Ref<keyof typeof tabs> = ref("Inspector")

const footerHeight = ref(300)
</script>

<template>
  <div class="devtools footer">
    <div class="devtools-tablist">
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

<style scoped>
.devtools {
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  height: v-bind(footerHeight)
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

.devtools-tablist {
  position: sticky;
  top: 0;
  width: 100%;
}

.devtoolstab {
  position: absolute;
  bottom: 0;
  background-color: white;
}
</style>