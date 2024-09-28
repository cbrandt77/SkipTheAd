import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import './index.css'

import Game from "@/components/Game.vue";
// /** @type Component */
// import LevelSelect from "@/homepage.vue";
import {createMemoryHistory, createRouter} from "vue-router";

const routes = [
    {path: '', component: Game},
    // {path: '/levelselect', component: LevelSelect}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App).use(router)
              .mount('#app')
