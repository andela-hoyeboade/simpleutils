import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import AppRoute from "./AppRoute";
import '../../styles/components/main/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AppRoute/>
        </Router>
      </div>
    );
  }
}

export default App;
