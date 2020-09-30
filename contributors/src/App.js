import React from 'react';
import Header from './components/Header/Header'
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
