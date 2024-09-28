<script setup lang="ts">

import Inspector from "@/components/devtools/Inspector.vue";
import Console from "@/components/devtools/Console.vue";
import Network from "@/components/devtools/Network.vue";
import {ref} from "vue";

const tabs = {
  Inspector,
  Console,
  Network
}

const currentTabName = ref("Inspector")
</script>

<template>
<button
    v-for="(_, thisTabName) in tabs"
    v-bind:key="thisTabName"
    v-bind:class="['tab-button', { active: currentTabName === thisTabName }]"
    @click="currentTabName = thisTabName"
>
  {{ thisTabName }}
</button>
</template>

<style scoped>

</style>