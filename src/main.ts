import './assets/main.css'

import { createApp } from 'vue'
import App from './homepage.vue'
import './index.css'

import Game from "@/Game.vue";
import LevelSelect from "@/homepage.vue";
import {createMemoryHistory, createRouter} from "vue-router";

const routes = [
    {path: 'game', component: Game},
    {path: 'levelselect', component: LevelSelect}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App).use(router)
              .mount('#app')
