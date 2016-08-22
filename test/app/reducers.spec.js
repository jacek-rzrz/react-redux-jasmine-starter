import { List } from 'immutable';
import { app } from 'app/reducers';
import 'jasmine-immutablejs-matchers';

describe('app reducer', () => {

  it('initializes correctly', () => {

    const store = app(undefined, { type: undefined });

    expect(store.contacts).toEqualImmutable(List.of());
  });

});
