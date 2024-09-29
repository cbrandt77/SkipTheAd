<script setup lang="ts">
import { useRouter } from 'vue-router';
import {createApp} from "vue";
import App from "@/App.vue";

const router = useRouter();

function goToLevel(id: number) {
  router.push(`/game/${id}`);
}

</script>

<template>

    <div class="w-screen flex justify-center">
        <div class="flex flex-col border w-[50vw]">
            <div><h1 class="text-center">Skip The Ad</h1></div>
            <div class="grid grid-cols-3 grid-rows-2 gap-2 place-items-center border mt-[200px]">
                <v-btn class="l1" @click="goToLevel(0)">Level 1</v-btn>
                <v-btn class="l2" @click="goToLevel(1)">Level 2</v-btn>
                <v-btn class="l3" @click="goToLevel(2)">Level 3</v-btn>
            </div>
        </div>

    </div>

</template>

<style scoped>

    .grid > button{
        width: 200px;
        height: 100px;
        border-radius: 2%;
        background-color: #425e7c;
        color: white;
    }
    
</style>