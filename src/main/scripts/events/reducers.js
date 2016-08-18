import { List, Map } from 'immutable';

const event = (state, action) => {

  switch (action.type) {

    case 'CREATE_EVENT':
      return Map({ name: action.name });

    default:
      return state;
  }
};

export const events = (state = List.of(), action) => {

  switch (action.type) {

    case 'CREATE_EVENT':
      return state.push(event(undefined, action));

    default:
      return state;
  }
};
