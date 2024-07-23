import { createRouter, createWebHistory } from 'vue-router'
import AboutComponent from '../views/about'
import HomeComponent from '../views/Home.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
      },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
  },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router;