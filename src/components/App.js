import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react"
function App() {
  const [appDark, setDark] =useState("")
  const appClass = appDark ? "App dark" : "App light"


  function handleDark(){
    setDark((appDark => appDark = !appDark))

  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDark}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}
export default App;