import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/bienvenida',
    component: () => import('../modules/usuario/pages/BienvenidaPage.vue')
  },
  {
    path: '/',
    component: () => import('../modules/usuario/pages/LoginPage.vue')
  },
  {
    path: '/registro',
    component: () => import('../modules/usuario/pages/RegistroPage.vue')
  },
  {
    path: '/foro',
    component: () => import('../modules/publicaciones/pages/ForoDiscusionPage.vue')
  },
  {
    path: '/ingresarTema',
    component: () => import('../modules/publicaciones/pages/IngresarTemaPage.vue')
  },
  {
    path: '/noticias',
    component: () => import('../modules/publicaciones/pages/NoticiasPage.vue')
  },
  {
    path: '/publicar',
    component: () => import('../modules/publicaciones/pages/PublicacionPage.vue')
  },
  {
    path: '/ingresarQueja',
    component: () => import('../modules/acercamiento/pages/IngresarQuejasPage.vue')
  },
  {
    path: '/quejas',
    component: () => import('../modules/acercamiento/pages/QuejasPage.vue')
  },
  {
    path: '/suscripcionAso',
    component: () => import('../modules/acercamiento/pages/SuscripcionASO.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
