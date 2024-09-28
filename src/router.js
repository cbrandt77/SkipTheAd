import { createMemoryHistory, createRouter } from 'vue-router'

import Game from "@/components/Game.vue";
import Home from "@/components/Home.vue";
import Level1 from "@/components/level1.vue";
import Level2 from "@/components/Level2.vue";
import Level3 from "@/components/Level2.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/game/:id', component: Game , 
    children: [
    {
      // UserProfile will be rendered inside User's <router-view>
      // when /user/:id/profile is matched
      path: 'level1',
      component: Level1,
    },
    {
      // UserPosts will be rendered inside User's <router-view>
      // when /user/:id/posts is matched
      path: 'level2',
      component: Level2,
    },
    {
        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        path: 'level3',
        component: Level3,
    },
    ],
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router