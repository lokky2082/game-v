import Vue from 'vue'
import Router from 'vue-router'
import QuestionsList from '@/components/QuestionsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QuestionsList',
      component: QuestionsList
    }
  ]
})
