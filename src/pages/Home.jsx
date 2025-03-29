import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Subscriptions from '../Components/Subscriptions'
import Testimonials from '../Components/Testimonials'
import Questions from '../Components/Questions'
import Featured from '../Components/Featured'
import AppAd from '../Components/AppAd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchServicesFromServer } from '../ReduxV2/Slices/Services.slice'
import { fetchSubscriptionsFromServer } from '../ReduxV2/Slices/Subscriptions.slice'

function Home({}) {
  const dispatcher = useDispatch();
  const { data: services = [] } = useSelector((store) => store.servicesReducer)
  const { data: subscriptions = [] } = useSelector((store) => store.subscriptionsReducer)
  
  useEffect(() => {
    dispatcher(fetchServicesFromServer());
    dispatcher(fetchSubscriptionsFromServer());
  }, [])

  return (
    <div>
      <Hero />
      <Services data={services} />
      <Subscriptions data={subscriptions} />
      <Testimonials />
      <Questions />
      <Featured />
      <AppAd />
    </div>
  )
}

export default Home;