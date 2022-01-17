import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AddItem } from './AddItem';

function App() {
  function getShoppingList() {
    const list = window.localStorage.getItem('list')
    return list ? JSON.parse(list) : ['test'];
  }
  
  function addingItemHandler(data:string) {
    setShoppingList([...shoppingList, data])
    window.localStorage.setItem('list',JSON.stringify([...shoppingList, data]))
  }
  const [ shoppingList, setShoppingList ] = useState(getShoppingList())

  return (
    <div className="App">
      <h1>Shopping List</h1>
        <ol>
            {shoppingList.map((item:string,index:number) => {
              return <li key={index}>{item}</li>
            })}
        </ol>
        <hr />
        <AddItem onAddingItem ={addingItemHandler}/>
    </div>
  );
}

export default App;
