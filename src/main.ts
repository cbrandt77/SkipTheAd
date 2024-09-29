import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import './index.css'

import Game from "@/components/Game.vue";
import Home from "@/components/Home.vue";

import {createMemoryHistory, createRouter} from "vue-router";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives,
})


const routes = [
    // {path: '', component: Game},
    {path: '', component: Home},
    {path: '/game/:id', component: Game},
    // {path: '/levelselect', component: LevelSelect}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App).use(router)
              .use(vuetify)
              .mount('#app')

