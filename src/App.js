import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './appBar.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './router.js'

class App extends Component {
  render() {
    return (
      <div>
          <MuiThemeProvider>

              <AppBar/>
              <Router/>
          </MuiThemeProvider>

        
     </div>
    );
  }
}

export default App;
