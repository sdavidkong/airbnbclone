import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import weirdgoat from "./components/weirdgoat.png"

function App() {
  return (
    <div className="App">
      <body>
     <Navbar />
     <Hero />
     <Card 
      img={weirdgoat}
      rating={4.8}
      reviewCount="~(6 reviews) "
      title="Hug this weird goat"
      country="Nepal"
      price = {420}
     />

     </body>
    </div>
  );
}

export default App;
