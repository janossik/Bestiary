import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import routes from '../routes/routes';
import AudioBox from '../components/molecules/AudioBox/AudioBox';
import Theme from '../theme/Theme';

const Root = () => (
  <Router>
    <ThemeProvider theme={Theme}>
      <>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.about} component={About} />
        </Switch>
        <AudioBox />
      </>
    </ThemeProvider>
  </Router>
);

export default Root;
