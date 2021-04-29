import React from 'react';

import Home from './pages/Home';
import GlobalStyle from './lib/styles/GlobalStyle';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
    </React.Fragment>
  );
};

export default App;
