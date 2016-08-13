import { createEvent } from 'events/actions';

describe('events / actions', () => {

  describe('createEvent', () => {

    it('declares correct type', () => {
      const action = createEvent({ name: 'eventName' });
      expect(action.type).toBe('CREATE_EVENT');
      expect(action.name).toBe('eventName');
    });
  });

});
