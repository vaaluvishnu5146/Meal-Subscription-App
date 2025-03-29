import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { saveItemToCart } from '../ReduxV2/Slices/Cart.slice';

export default function SubscriptionDetails() {
  const dispatcher = useDispatch();
  const { data:Subscriptions } = useSelector((store) => store.subscriptionsReducer);
  const [subscription, setSubscription] = useState({})
  const { serviceId } = useParams();

  useEffect(() => {
    if(Subscriptions && serviceId) {
      const matching = Subscriptions.find((sub) => sub.id == serviceId)
      if(matching) {
        setSubscription(matching)
      } else {
        alert("No subscription found")
      }
    }
  }, [serviceId, Subscriptions]);

  return (
    <div>
      <h1>Subscription Details</h1>
      <h4>Subscription Name: {subscription.title}</h4>
      <p>Subscription Description: {subscription.description}</p>
      <button className="btn btn-success" onClick={() => dispatcher(saveItemToCart(subscription))}>Add To Cart</button>
    </div>
  )
}
