import { List, Map } from 'immutable';

const contact = (state, action) => {

  switch (action.type) {

    case 'CREATE_CONTACT':
      return Map({ name: action.name });

    default:
      return state;
  }
};

export const contacts = (state = List.of(), action) => {

  switch (action.type) {

    case 'CREATE_CONTACT':
      return state.push(contact(undefined, action));

    default:
      return state;
  }
};
