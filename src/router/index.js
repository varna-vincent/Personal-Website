import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Resume'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
