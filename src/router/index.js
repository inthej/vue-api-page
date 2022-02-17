import { createRouter, createWebHistory } from "vue-router"
import Album from '../pages/Album'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Post from '../pages/Post'
import User from '../pages/User'

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/album',
    name: 'Album',
    component: Album
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router