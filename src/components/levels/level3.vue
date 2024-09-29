<script setup lang="ts">

import {useDevToolsGlobalData} from "@/ts/capabilities";
import { ref } from 'vue';

const uname = ref('');
const passwd = ref('');


const devTools = useDevToolsGlobalData();
</script>

<template>
  <div>    Game {{ $route.params.id }}</div>
  <div>
    <h3>Level 3</h3>
    <!-- The current route is accessible as $route in the template -->
<!-- id	fake_name	fake_age	fake_email	fake_address
    1	John Doe	25	john@example.com	123 Fake St
    2	Jane Smith	30	jane@example.com	456 Elm Ave
    3	Bob Johnson	40	bob.j@example.com	789 Maple Rd
    4	Alice Brown	35	alice.b@example.com	1010 Oak Dr
    5	Charlie Green	29	charlie.g@example.com	202 Birch Ln -->




  </div>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="uname"
        label="First name"
      ></v-text-field>

      <v-text-field
        v-model="passwd"
        label="Last name"
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<style scoped>

</style>