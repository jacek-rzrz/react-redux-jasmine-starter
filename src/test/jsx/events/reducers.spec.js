import { List, Map } from 'immutable';
import { createEvent } from 'events/actions';
import { eventList } from 'events/reducers';
import 'jasmine-immutablejs-matchers';

describe('events / reducers', () => {

  describe('eventList', () => {

    it('initializes as empty list', () => {

      expect(eventList(undefined, { type: undefined })).toEqual(List.of());
    });

    it('handles `createEvent`', () => {

      expect(eventList(List.of(), createEvent())).toEqualImmutable(List.of(Map.of()));
    });

  });

});
