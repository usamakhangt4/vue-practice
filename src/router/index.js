import { createRouter, createWebHistory } from 'vue-router'
import AllProducts from '../views/AllProducts.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import ProductsCart from '@/views/ProductsCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllProducts
    },
    {
      path: `/product/:productId`,
      name: 'product-details',
      component: ProductDetails,
      props: true
    },
    {
      path: `/cart`,
      name: 'cart',
      component: ProductsCart
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
