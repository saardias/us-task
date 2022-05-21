import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../components/hoc/Layout';
import { getMainTheme } from '../theme/theme';
import NavigationSwitch from '../components/navigation/NavigationSwitch';
import { useAppSelector } from '../hooks/reduxHooks';

function App() {
  const { paletteMode } = useAppSelector(state => state.system);

  const theme = React.useMemo(() => getMainTheme(paletteMode), [paletteMode]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <NavigationSwitch />
        </Layout>
      </Router>

    </ThemeProvider>
  );
}

export default App;
