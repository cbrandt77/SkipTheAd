<script setup lang="ts">

import {useDevToolsGlobalData} from "@/ts/capabilities";

const deets = useDevToolsGlobalData()
</script>

<template >
  <div class="devtoolstab">
    <v-toolbar class="toolbar">
      <v-btn class="clearbutton" id="console-clearbtn" @click="deets.clearConsole()">
        <v-icon class="clearbutton" icon="mdi-trash-can"/>
      </v-btn>
    </v-toolbar>
    <table v-for="line in deets.consoleLines" class="consolelines">{{ line }}</table>
  </div>
</template>

<style>
.consolelines {
  background-color:red;
  color:lime;
}

.clearbutton {
  position: relative;
  flex: auto;
  width: 20px;
  height: 20px;
}
</style>