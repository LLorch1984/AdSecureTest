import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './containers/About/About'
import Home from './containers/Home/Home'




function App() {
  return (<>
    <Header />
    <div className="container-fluid">
      <Home />
    </div>
  </>)
}

export default App;
