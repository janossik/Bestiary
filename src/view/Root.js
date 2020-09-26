import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from 'view/pages/Home/Home';
import About from 'view/pages/About/About';
import Bestiary from 'view/pages/Bestiary/Bestiary';
import AudioBox from 'components/molecules/AudioBox/AudioBox';
import Navigation from 'components/organisms/Navigation/Navigation';
import Theme from 'theme/Theme';
import routes from 'routes/routes';
import AudioContext from 'contexts/AudioContext/AudioContext';

const Root = () => {
  const [activeAudio, setActiveAudio] = useState(false);
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <>
          <AudioContext.Provider value={{ activeAudio, setActiveAudio }}>
            <Navigation />
            <AudioBox />
          </AudioContext.Provider>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.about} component={About} />
            <Route path={routes.bestiary} component={Bestiary} />
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
