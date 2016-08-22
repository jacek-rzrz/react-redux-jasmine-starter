import { List, Map } from 'immutable';
import { contacts, createContact } from 'contacts';
import 'jasmine-immutablejs-matchers';

describe('contacts / reducers', () => {

  describe('contacts', () => {

    it('initializes as empty list', () => {

      expect(contacts(undefined, { type: undefined })).toEqual(List.of());
    });

    it('handles `createContact`', () => {

      expect(
        contacts(List.of(), createContact({ name: 'party' }))
      ).toEqualImmutable(
        List.of(Map({ name: 'party' }))
      );
    });

  });

});
