import { combineReducers } from 'redux';
import TestimonialsReducer from './Testimonials';
import SubscriptionsReducer from './Subscriptions';
import ServicesReducer from './Services';

export const ROOT_REDUCER = combineReducers({
    subscriptions: SubscriptionsReducer,
    services: ServicesReducer,
    testimonials: TestimonialsReducer,
    questions: {},
    order: {},
    appSettings: {}
})