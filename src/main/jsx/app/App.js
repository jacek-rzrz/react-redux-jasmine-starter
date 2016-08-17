import React from 'react';
import MenuContainer from 'menu/containers/MenuContainer';

const App = ({children}) => (
  <div>
    <MenuContainer />
    {children}
  </div>
);

export default App;
