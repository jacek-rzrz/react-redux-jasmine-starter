import { combineReducers } from 'redux';
import { contacts } from 'contacts/reducers';

export const app = combineReducers({ contacts });
