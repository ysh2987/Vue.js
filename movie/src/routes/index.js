import { createRouter, createWebHashHistory} from 'vue-router'
import Home from'./Home'
import Movie from './Movie'
import About from './about'
export default createRouter ({
  // Hash
  // http://google.com/#/search
  history: createWebHashHistory(),
  // pages
  routes: [
    {
      path: '/',
      component: Home
    },
    { 
      path: '/movie',
      component: Movie
    },
    { // 페이지경로와 해당 페이지에 연결할 컴포넌트 작성
      path: '/about',
      component: About
    }
  ]
})