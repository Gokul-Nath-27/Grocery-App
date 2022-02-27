import React from "react";
import './App.scss'
import ItemList from "./Components/ItemList/ItemList";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useState } from 'react'

function App() {

  const [items, setItems] = useState( (JSON.parse(localStorage['listItems']).length)? JSON.parse(localStorage.getItem("listItems")):[
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

  const saveToLocalStorage = (listItems) =>{
    setItems(listItems)
    localStorage.setItem('listItems',JSON.stringify(listItems))
  }

  const handleCheck = (id) => { 
    const listItems = items.map((item) => (item.id === id)? {...item, checked: !item.checked}: item )
    saveToLocalStorage(listItems)
  }

  const handleDelete = (id) =>{
    const modifiedItems = items.filter((item) => item.id !== id)
    saveToLocalStorage(modifiedItems)
  }
 
  return (
    <div className="app">
      <Header title="Grocery List"/>
      <ItemList handleCheck={handleCheck} handleDelete= {handleDelete}items={items}/>
      <Footer items={items}/>
    </div>
      
  );
}

export default App;
