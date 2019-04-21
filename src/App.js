import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header title="Title" scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/about">About</Link>
                  <Link to="/project">Project</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/about">About</Link>
                  <Link to="/project">Project</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main></Main>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
