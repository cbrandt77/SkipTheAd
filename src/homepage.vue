<template>
  <!-- Screen Container -->
  <div class="flex w-screen justify-center items-center bg-[#f9f3e5] text-[#4a4a4a] font-indie p-0" :style="{ margin: '0 !important; '}">
    <!-- Game Container -->
    <div class="w-full max-w-4xl p-6 border">

      <h1 class="text-5xl font-extrabold text-center mb-4 text-[#6d4c41] hand-drawn">
        Whimsical Wanderings
      </h1>
      <p class="text-xl text-center text-[#795548] mb-8 italic">
        Embark on a journey through a world of doodles and dreams!
      </p>
      
      <div class="mb-8 flex justify-center" v-if="totalLevels > 0">
        <div class="bg-white rounded-full p-2 flex items-center hand-drawn-border">
          <span class="text-sm font-medium mr-2">Doodle Progress:</span>
          <div class="w-48 bg-[#e0e0e0] rounded-full h-2">
            <div class="bg-[#81c784] h-2 rounded-full transition-all duration-300 ease-in-out" :style="{ width: `${progress}%` }"></div>
          </div>
          <span class="text-sm font-medium ml-2">{{ completedLevels }} / {{ totalLevels }}</span>
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        <button
          v-for="level in levels"
          :key="level.id"
          @click="startLevel(level.id)"
          :disabled="!level.unlocked"
          class="bg-white p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#81c784] disabled:opacity-50 disabled:cursor-not-allowed hand-drawn-border"
        >
          <div class="flex flex-col items-center">
            <component :is="getLevelIcon(level)" class="h-8 w-8 mb-2" />
            <span class="text-lg font-bold">Level {{ level.id }}</span>
            <span class="text-sm">{{ level.name }}</span>
          </div>
        </button>
      </div>

      <div class="text-center">
        <button
          @click="startGame"
          class="bg-[#81c784] hover:bg-[#66bb6a] text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4caf50] hand-drawn-button"
        >
          <PlayIcon class="h-5 w-5 inline-block mr-2" />
          Start Your Adventure
        </button>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref, computed } from 'vue'
import { PlayIcon, PencilIcon, LockIcon, CheckIcon } from 'lucide-vue-next'

const totalLevels = 12
const completedLevels = ref(3)

const levels = ref([
  { id: 1, name: "Doodle Meadow", unlocked: true, completed: true },
  { id: 2, name: "Sketch Stream", unlocked: true, completed: true },
  { id: 3, name: "Pencil Peak", unlocked: true, completed: true },
  { id: 4, name: "Eraser Valley", unlocked: true, completed: false },
  { id: 5, name: "Inkwell Island", unlocked: true, completed: false },
  { id: 6, name: "Crayon Canyon", unlocked: false },
  { id: 7, name: "Marker Marsh", unlocked: false },
  { id: 8, name: "Pastel Plains", unlocked: false },
  { id: 9, name: "Charcoal Caves", unlocked: false },
  { id: 10, name: "Watercolor Woods", unlocked: false },
  { id: 11, name: "Origami Ocean", unlocked: false },
  { id: 12, name: "Canvas Castle", unlocked: false },
])

const progress = computed(() => (completedLevels.value / totalLevels) * 100)

const getLevelIcon = (level) => {
  if (level.completed) return CheckIcon
  if (level.unlocked) return PencilIcon
  return LockIcon
}

const startLevel = (levelId) => {
  console.log(`Starting level ${levelId}`)
  // Add logic to start the selected level
}

const startGame = () => {
  console.log('Starting new game')
  // Add logic to start a new game or continue from the last unlocked level
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

.font-indie {
  font-family: 'Indie Flower', cursive;
}

.hand-drawn {
  text-shadow: 2px 2px 0 #fff, 4px 4px 0 #6d4c41;
}

.hand-drawn-border {
  border: 3px solid #4a4a4a;
  box-shadow: 3px 3px 0 #4a4a4a;
}

.hand-drawn-button {
  border: 2px solid currentColor;
  box-shadow: 2px 2px 0 currentColor;
}

.hand-drawn-button:hover {
  box-shadow: 4px 4px 0 currentColor;
  transform: translate(-2px, -2px);
}
</style>