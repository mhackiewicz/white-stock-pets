export default [  
  {
      path: '/main/',
      component: require('./pages/form.vue')
  },
  {
      path: '/finded/',
      component: require('./pages/finded.vue')
  },
  {
      path: '/pet/:petId/',
      component: require('./pages/pet-details.vue')
  },
   {
      path: '/searched/:petId/',
      component: require('./pages/searched-details.vue')
  },  
  {
      path: '/searched/',
      component: require('./pages/searched.vue')
  },     
  {
      path: '/find-form/',
      component: require('./pages/find-form.vue')
  },  
  {
      path: '/search-form/',
      component: require('./pages/search-form.vue')
  },  
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  }
]