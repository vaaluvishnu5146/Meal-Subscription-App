import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

import Subscriptions from './pages/Subscriptions'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import SubscriptionDetails from './pages/SubscriptionDetails'
import Cart from './pages/Cart'
import OrderConfirmation from './pages/OrderConfirmation'
import ServicesPage from './pages/Services'

function App() {
  return (
    <>
    <Header expand={true} />
    <Routes>
      <Route path='/' Component={() => <Login />} />
      <Route path='/createaccount' Component={() => <Signup />} />
      <Route path='/shop' Component={() => <Home />} />
      <Route path='/services' Component={() => <ServicesPage />} />
      <Route path='/subscriptions' Component={() => <Subscriptions />} />
      <Route path='/subscriptions/:serviceId' Component={() => <SubscriptionDetails />} />
      <Route path='/cart' Component={() => <Cart />} />
      <Route path='/orderconfirmation' Component={() => <OrderConfirmation />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
