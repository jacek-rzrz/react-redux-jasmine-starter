import { createContact } from 'contacts';

describe('contacts / actions', () => {

  describe('createContact', () => {

    it('declares correct type', () => {
      const action = createContact({ name: 'contactName' });
      expect(action.type).toBe('CREATE_CONTACT');
      expect(action.name).toBe('contactName');
    });
  });

});
