import React from 'react';
import { Route } from 'react-router';

import Home from './pages/Home';
import GlobalStyle from './lib/styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Route path="/" component={Home} exact />
    </>
  );
};

export default App;
