import { List, Map } from 'immutable';
import { createEvent } from 'events/actions';
import { events } from 'events/reducers';
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
