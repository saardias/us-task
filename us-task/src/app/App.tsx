import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/hoc/Layout';
import NavigationBar from '../components/navigation/NavigationBar';
import NavigationSwitch from '../components/navigation/NavigationSwitch';

function App() {
  return (
    <Router>
      <Layout>
        <NavigationSwitch />
      </Layout>
    </Router>
  );
}

export default App;
