import React from 'react';

import GlobalStyle from './styles/global';

import Graphs from './pages/Graphs';

const App: React.FC = () => {
  return (
    <>
      <Graphs />
      <GlobalStyle />
    </>
  );
};

export default App;
