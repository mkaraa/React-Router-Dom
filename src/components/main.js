import React from 'react';
import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import Resume from './resume';
import Project from './project';

import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route about path="/about" component={About}/>
        <Route about path="/contact" component={Contact}/>
        <Route about path="/project" component={Project}/>
        <Route about path="/resume" component={Resume}/>
    </Switch>
)

export default Main;