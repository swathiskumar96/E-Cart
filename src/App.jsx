import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/view/:id' element={<View/>}></Route>
      <Route path='/*' element={<Navigate to={'/'}/>}></Route>


    </Routes>
    <Footer/>
    </>
  )
}

export default App
