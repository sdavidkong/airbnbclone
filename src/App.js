import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import weirdgoat from "./components/weirdgoat.png"
import baboon from "./components/Hero"

import data from './components/data';
console.log(data);

function App() {

  const cards = data.map(item => {
    return (
      <Card
      key = {item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      title={item.title}
      country={item.location}
      price = {item.price}
      openSpots = {item.openSpots}
      />
    )
  })


  return (
    <div className="App">
      <body>
     <Navbar />
     <Hero />
     <section className="cards-list">
                {cards}
            </section>
     </body>
    </div>
  );
}

export default App;
