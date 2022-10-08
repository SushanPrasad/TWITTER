import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';


import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Login';



function App() {
  return (
    <div className="App">
     

<Router>
  <Routes>
    <Route exact path="/" element={<Login/>}  />
    <Route path= "/home" element={<>    <Sidebar /> <Feed /> <Widget /> </>} />
  </Routes>
</Router>

      </div>
  );
}

export default App;
