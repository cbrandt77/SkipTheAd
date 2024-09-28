<script setup lang="ts">
import { useRouter } from 'vue-router';

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
                <v-btn class="l1" @click="goToLevel(1)">Level 1</v-btn>
                <v-btn class="l2">Level 2</v-btn>
                <v-btn class="l3">Level 3</v-btn>
                <v-btn class="l4">Level 4</v-btn>
                <v-btn class="l5">Level 5</v-btn>
                <v-btn class="l6">Level 6</v-btn>
            </div>
        </div>

    </div>

</template>

<style scoped>

    .grid > button{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .l1 {
        background-color: red;
    }
    .l2 {
        background-color: blue;
    }
    .l3 {
        background-color: green;
    }
    .l4 {
        background-color: yellow;
    }
    .l5 {
        background-color: purple;
    }
    .l6 {
        background-color: orange;
    }
</style>