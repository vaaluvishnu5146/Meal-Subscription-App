import { useEffect, useState } from 'react'
import './App.css'
import Featured from './Components/Featured'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Questions from './Components/Questions'
import Services from './Components/Services'
import Subscriptions from './Components/Subscriptions'
import Testimonials from './Components/Testimonials'
import AppAd from './Components/AppAd'

function App() {
  const [services, setServices] = useState([])
  const [subscriptions, setSubscriptions] = useState([])

  async function saveServices(data) {
    const result = await data;
    setServices(result.services)
  }

  async function saveSubscriptions(data) {
    const result = await data;
    setSubscriptions(result.subscriptions)
  }

  useEffect(() => {
    Promise.all([fetch("http://localhost:5173/ourservices.json"), fetch("http://localhost:5173/subscriptions.json")])
    .then((response) => {
      return response.map((r) => r.json())
    })
    .then((result) => {
      saveServices(result[0])
      saveSubscriptions(result[1])
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Header expand={true} />
      <Hero />
      <Services data={services} />
      <Subscriptions data={subscriptions} />
      <Testimonials />
      <Questions />
      <Featured />
      <AppAd />
      <Footer />
    </>
  )
}

export default App
