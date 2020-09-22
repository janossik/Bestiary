import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import routes from '../routes/routes';
import AudioBox from '../components/molecules/AudioBox/AudioBox';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.about} component={About} />
    </Switch>
    <AudioBox />
  </Router>
);

export default Root;
