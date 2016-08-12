import React from 'react';
import Counter from 'counter/Counter';
import { createRenderer } from 'react-addons-test-utils';

describe('counter', () => {

  it('rebders a button', () => {

    const renderer = createRenderer();
    renderer.render(<Counter />);
    const counter = renderer.getRenderOutput();
    expect(counter.type).toBe('button');
  });


});
