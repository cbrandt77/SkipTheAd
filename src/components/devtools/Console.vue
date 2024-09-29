<script setup lang="ts">

import {useDevToolsGlobalData} from "@/ts/capabilities";

const deets = useDevToolsGlobalData()
</script>

<template class="devtoolstab">
    <div class="toolbar">
      <v-btn class="clearbutton" id="console-clearbtn" v-tooltip="'Clear Console'" @click="deets.clearConsole()">
        ButtonThing
      </v-btn>
    </div>
    <table v-for="line in deets.consoleLines" class="consolelines">{{ line }}</table>
</template>

<style>
.consolelines {
  background-color:red;
  color:lime;
}

.clearbutton {
  position: relative
}
</style>