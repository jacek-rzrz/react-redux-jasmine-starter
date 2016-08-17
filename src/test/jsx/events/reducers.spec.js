import { List, Map } from 'immutable';
import { events, createEvent } from 'events';
import 'jasmine-immutablejs-matchers';

describe('events / reducers', () => {

  describe('events', () => {

    it('initializes as empty list', () => {

      expect(events(undefined, { type: undefined })).toEqual(List.of());
    });

    it('handles `createEvent`', () => {

      expect(
        events(List.of(), createEvent({ name: 'party' }))
      ).toEqualImmutable(
        List.of(Map({ name: 'party' }))
      );
    });

  });

});
