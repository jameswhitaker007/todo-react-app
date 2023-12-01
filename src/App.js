import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [key, setKey] = useState(1);

  function add() {
    var name = "Todo " + key; //Item 1, Item 2, ...
    setKey(key + 1); // Obtaining the next key associated with the todo item
    todos.push({name, key});
    setTodos([...todos]);
    //console.log(todos);
  }

  return (
    <>
      <button onClick={add}>Add Todo</button>
      <Todos todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
