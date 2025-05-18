import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GetStarted from '../views/GetStarted.vue'
import LearnBasics from '../views/LearnBasics.vue'
import TryItOut from '../views/TryItOut.vue'
import AboutUs from '../views/AboutUs.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/get-started', component: GetStarted },
  { path: '/learn-basics', component: LearnBasics },
  { path: '/try-it-out', component: TryItOut },
  { path: '/about-us', component: AboutUs },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
