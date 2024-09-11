import { useState } from "react";
import Logo from './components/Logo'
import PackingList from "./components/PackingList";
import Item from "./components/Item";
import Stats from "./components/Stats";
import Form from "./components/Form";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function onDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id){
    setItems((items)=>
    items.map((item)=>
    item.id===id ? {...item,packed: !item.packed}: item))
  }
  function handleClearList(){
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    if(confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList items={items} onDeleteItem={onDeleteItem} onToggleItem={handleToggleItem} handleClearList={handleClearList} />
      <Stats items={items}/>
    </div>
  );
}








