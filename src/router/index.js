// import { componentOnReady } from '@ionic/core';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';
import LoginPage from '../pages/LoginPage.vue'
import RegisPage from '../pages/RegisterationPage.vue'
import StartPage from '../pages/StartPage.vue'
import IntroPage from '../pages/IntroductionPage.vue'
import InstruPage from '../pages/InstructionPage.vue'
import ArticlePage from "../pages/ArticlePage.vue"; 
import ProfilePage from "../pages/ProfilePage.vue"; 

const routes = [
  {
    path: '/',
    redirect: '/loginPage'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    component: () => import('../pages/MemoDetails.vue')   //lazy loading , download only when needed 
  }, 
  {
    path: '/loginPage',
    component: LoginPage

  },
  {
    path: '/regisPage',
    component: RegisPage
  },
  {
    path: '/startPage',
    component: StartPage
  },
  {
    path: '/introPage',
    component: IntroPage
  },
  {
    path: '/instruPage',
    component: InstruPage
  },
  {
    path: "/articles",
    component: ArticlePage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
