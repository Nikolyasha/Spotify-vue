import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import WithoutLogin from '@/layouts/WithoutLogin.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView/SignUpView.vue'
import MainView from '@/views/MainView.vue'
import CentralBlock from "@/views/CentralBlock/CentralBlock.vue";
import UnauthorizedView from "@/views/CentralBlock/UnauthorizedView.vue";
import ArtistView from "@/views/CentralBlock/ArtistView.vue";
import ReleaseView from "@/views/CentralBlock/ReleaseView.vue";
import SignUpWelcome from "@/views/SignUpView/SignUpWelcome.vue";
import SignUpSteps from "@/views/SignUpView/SignUpSteps.vue";
import SignUpStepOne from "@/views/SignUpView/SignUpStepOne.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: WithoutLogin,
      children: [
        {
          path: '',
          component: MainView,
          children:[
            {
              path: '',
              component: CentralBlock,
              children:[
                {
                  path: '',
                  component: UnauthorizedView,
                  props: true
                },
                {
                  path: 'artist/:id',
                  component: ArtistView
                },
                {
                  path: 'release/:id',
                  component: ReleaseView
                }
              ]
            }
          ]
        },
        {
          path: '/login',
          component: LoginView
        },
        {
          path: '/signup',
          component: SignUpView,
          children:[
            {
              path: '/signup',
              component: SignUpWelcome
            },
            {
              path: '/signup/step/:id',
              name: 'StepsRegister',
              component: SignUpSteps,
              props: route => ({
                id:route.params.id ,
                email :route.params.email
              })
            },
          ]
        }
      ]
    }
  ]
})

export default router
