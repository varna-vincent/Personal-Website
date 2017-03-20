import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/components/Me'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Me',
      component: Me
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
