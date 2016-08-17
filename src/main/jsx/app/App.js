import React from 'react';
import { MenuContainer } from 'menu';

const App = ({children}) => (
  <div>
    <MenuContainer />
    {children}
  </div>
);

export default App;
