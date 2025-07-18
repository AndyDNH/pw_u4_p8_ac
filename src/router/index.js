import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from '../views/EstudianteView.vue'
import LoginView from '../views/LoginView.vue'

import AboutView from '../views/AboutView.vue'
import NotasIngresoView from '../views/NotasIngresoView.vue'
import RecursoProhibido from '../views/RecursoProhibido.vue'

import { obtenerPaginasPermitidas } from "../helpers/Autorizacion";

function estaAutenticado(){
  let result = localStorage.getItem('auth') === "true";
  console.log(result);
  return result;
}

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta:{
      requireAuth:true //Esta protegida requiere auth
    }, 
  },
  {
    path: '/estudiante',
    name: 'estudiante',
    component: EstudianteView,
    meta:{
      requireAuth:true //Esta protegida requiere auth
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta:{
      requireAuth:true //Esta protegida requiere auth
    }, 
  },
  {
    path: '/notas',
    name: 'notas',
    component: NotasIngresoView,
    meta:{
      requireAuth:true //Esta protegida requiere auth
    }, 
  },
  {
    path: '/prohibido',
    name: 'prohibio',
    component: RecursoProhibido,
    meta:{
      requireAuth:true //Esta protegida requiere auth
    }, 
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log("Antes");
  //Validando si la pagina debe estar autenticada (true)
  if (to.meta.requireAuth) {
    console.log("Auth");
    //Si no esta autenticado
    if (!estaAutenticado()) {
      next("/login");
    } else {
      //autenticado
      //Aqui valido si esta autorizado
      let usuario = localStorage.getItem('usuario')
      let paginas = obtenerPaginasPermitidas(usuario);
      if (paginas.includes(to.path)) {
        next();
      }else {
        next('/prohibido');
      }
    }
  } else {
    next();
  }
});


export default router
