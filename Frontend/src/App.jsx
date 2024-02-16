
import Home from './pages/Home'
import { BrowserRouter,Routes,Route  } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import UserProfile from './pages/UserProfile'
import CheckOut from './pages/CheckOut'
import PrivateRoute from './components/PrivateRoute'

function App() {
 
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<PrivateRoute Component={Cart} />} />
          <Route path='/userProfile' element={<PrivateRoute Component={UserProfile} />} />
          <Route path='/CheckOut' element={<PrivateRoute Component={CheckOut} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
