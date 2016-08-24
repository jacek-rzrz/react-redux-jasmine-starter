import { combineReducers } from 'redux';
import { contacts } from 'contacts/reducers';
import {reducer as form} from 'redux-form';

export const app = combineReducers({ contacts, form });
