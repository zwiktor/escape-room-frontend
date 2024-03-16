// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {AuthProvider} from "./components/auth/AuthContext";

import StoriesList from './components/StoriesList';
import Menu from './components/menu/Menu'; // Assuming you've created this component
import StoryDetail from './components/story/StoryDetail';
import Navbar from './components/navbar/Navbar';

import './App.css';

function App() {
  return (
  <div className="App">
    <AuthProvider>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={StoriesList} />
          <Route path="/menu" component={Menu} />
          <Route path="/story/:id" component={StoryDetail} />
        </Switch>
      </Router>
    </AuthProvider>
  </div>
  );
}

export default App;