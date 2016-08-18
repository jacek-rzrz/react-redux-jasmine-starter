import { combineReducers } from 'redux';
import { events } from 'events/reducers';

export const app = combineReducers({ events });
