import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <body>
     <Navbar />
     <Hero />
     <Card />

     </body>
    </div>
  );
}

export default App;
