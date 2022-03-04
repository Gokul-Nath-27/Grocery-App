import React from "react";
import './App.scss'
import ItemList from "./Components/ItemList/ItemList";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useState, useEffect } from 'react'

function App() {

  // State Hooks
  const [items, setItems] = useState(JSON.parse(localStorage.getItem(['listItems'])) || [])
  const [searchItem, setSearchItem] = useState('')
  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    localStorage.setItem('listItems',JSON.stringify(items))
  }, [items])
  
  // Event Handlers

  const handleCheck = (id) => {
    // Toggle the input checkbox
    const listItems = items.map(item => (item.id === id) ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
  }

  const handleDelete = (id) => {
    // Delete an item object
    const modifiedItems = items.filter(item => item.id !== id)
    setItems(modifiedItems)
  }
  

  const handleAddButton = (e) => {
    e.preventDefault()
    if(!newItem) return
    const newItemObject = {id: items.length + 1,item: newItem, checked:false}
    const listItems = [...items, newItemObject]
    setNewItem('')
    setItems(listItems)
  }

  // UI rendering
  return (
    <div className="app">
      <Header title="Grocery List" />
      <ItemList 
        handleCheck={handleCheck} 
        handleDelete={handleDelete} 
        items={items.filter(itemObj => itemObj.item.toLowerCase().includes(searchItem.toLowerCase()))}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        newItem={newItem}
        setNewItem={setNewItem}
        handleAddButton={handleAddButton}
        />

      <Footer items={items} />
    </div>

  );
}

export default App;
