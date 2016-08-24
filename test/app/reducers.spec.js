import { List } from 'immutable';
import { app } from 'app/reducers';
import {reducer as formReducer} from 'redux-form';
import 'jasmine-immutablejs-matchers';

describe('app reducer', () => {

  it('initializes correctly', () => {

    const store = app(undefined, { type: undefined });

    expect(store.contacts).toEqualImmutable(List.of());
    expect(store.form).toEqual(formReducer(undefined, { type: undefined }));
  });

});
