import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Subscriptions from '../Components/Subscriptions'
import Testimonials from '../Components/Testimonials'
import Questions from '../Components/Questions'
import Featured from '../Components/Featured'
import AppAd from '../Components/AppAd'
import { connect } from 'react-redux'
import { SUBSCRIPTIONS_ACTION_TYPES } from '../Redux/Actions/subscriptions.actions'
import { saveAllServices, SERVICES_ACTION_TYPES } from '../Redux/Actions/services.actions'

function Home({ subscriptions = [], services = [], saveSubscriptionData = () => {}, saveServicesData = () => {}}) {

  async function saveServices(data) {
    const result = await data;
    saveServicesData(SERVICES_ACTION_TYPES.SAVE_ALL_SERVICES,result.services)
  }

  async function saveSubscriptions(data) {
    const result = await data;
    saveSubscriptionData(SUBSCRIPTIONS_ACTION_TYPES.SAVE_ALL_SUBSCRIPTIONS,result.subscriptions)
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

const mapStateToProps = (state) => {
  return {
    subscriptions: state.subscriptions.data,
    services: state.services.data
  };
}

const mapDispatchToProps = (dispatcher) => {
  return {
    saveSubscriptionData: function (type, payload) {
      return dispatcher({ type, payload })
    },
    saveServicesData: function (type, payload) {
      return dispatcher(saveAllServices(type, payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);