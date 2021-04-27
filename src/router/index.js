import { createRouter, createWebHistory } from 'vue-router';
import SignIn1 from '../views/SignIn1.vue';
import SignIn2 from '../views/SignIn2.vue';
import SignIn3 from '../views/SignIn3.vue';
import SignIn4 from '../views/SignIn4.vue';
import SignUp1 from '../views/SignUp1.vue';
import SignUp2 from '../views/SignUp2.vue';
import SignUp3 from '../views/SignUp3.vue';
import SignUp4 from '../views/SignUp4.vue';
import SignUp5 from '../views/SignUp5.vue';
import SignUp6 from '../views/SignUp6.vue';
import ProfilePersonal from '../views/ProfilePersonal.vue';
import ProfileAccount from '../views/ProfileAccount.vue';
import SearchResults from '../views/SearchResults.vue';
import SeachMap from '../views/SeachMap.vue';
import AdminPage from '../views/AdminPage.vue';
// import App from '../App.vue';
// import SignUp from '../views/SignUp.vue';
import UserList from '../views/UserList.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: App,
  // },
  {
    path: '/SignIn1',
    name: 'SignIn1',
    component: SignIn1,
  },
  {
    path: '/SignIn2',
    name: 'SignIn2',
    component: SignIn2,
  },
  {
    path: '/SignIn3',
    name: 'SignIn3',
    component: SignIn3,
  },
  {
    path: '/SignIn4',
    name: 'SignIn4',
    component: SignIn4,
  },
  {
    path: '/SignUp1',
    name: 'SignUp1',
    component: SignUp1,
  },
  {
    path: '/SignUp2',
    name: 'SignUp2',
    component: SignUp2,
  },
  {
    path: '/SignUp3',
    name: 'SignUp3',
    component: SignUp3,
  },
  {
    path: '/SignUp4',
    name: 'SignUp4',
    component: SignUp4,
  },
  {
    path: '/SignUp5',
    name: 'SignUp5',
    component: SignUp5,
  },
  {
    path: '/SignUp6',
    name: 'SignUp6',
    component: SignUp6,
  },
  {
    path: '/ProfilePersonal',
    name: 'ProfilePersonal',
    component: ProfilePersonal,
  },
  {
    path: '/ProfileAccount',
    name: 'ProfileAccount',
    component: ProfileAccount,
  },
  {
    path: '/SearchResults',
    name: 'SearchResults',
    component: SearchResults,
  },
  {
    path: '/SeachMap',
    name: 'SeachMap',
    component: SeachMap,
  },
  {
    path: '/AdminPage',
    name: 'AdminPage',
    component: AdminPage,
  },
  {
    path: '/users',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UserList,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
