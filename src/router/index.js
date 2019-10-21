import Classify from '../pages/Classify/index.js'
import Profile from '../pages/Profile/index.js'
import Msite from '../pages/Msite/index.js'
import ShopCart from '../pages/ShopCart/index.js'
import Login from '../components/login/login.js'

const routes = [
  {
    path:'/profile',
    exact:true,
    component:Profile
  },
  {
    path:'/classify',
    exact:true,
    component:Classify
  },
  {
    path:'/',
    exact:true,
    component:Msite
  },
  {
    path:'/shopcart',
    exact:true,
    component:ShopCart
  },
  {
    path:'/login',
    component:Login
  }
]

export default routes