import React from "react";
import './App.scss'
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useState } from 'react'

function App() {

  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "Coco covered Almonds"
    },
    {
        id: 2,
        checked: false,
        item: "Hershey choco crips"
    },
    {
        id: 3,
        checked: false,
        item: "Milkmaid 500g"
    }
])

  return (
    <div className="app">
      <Header />
      <Content items={items}/>
      <Footer items={items}/>
    </div>
      
  );
}

export default App;
