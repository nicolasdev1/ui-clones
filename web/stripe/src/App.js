import React from 'react';

import NavBar from './components/NavBar';

import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Layout>
        <NavBar />
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default App;
