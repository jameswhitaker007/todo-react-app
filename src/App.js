import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todos from "./Todos";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [key, setKey] = useState(1);

  useEffect(() => {
    document.getElementById("todoInput").focus();
  }, []);

  function add(e) {
    e.preventDefault();
    //var name = "Todo " + key; //Item 1, Item 2, ...
    var name = document.getElementById("todoInput").value;
    console.log(name);
    if ((name == "" || null)) {
      return;
    }
    setKey(key + 1); // Obtaining the next key associated with the todo item
    todos.push({ name, key });
    setTodos([...todos]);
    //console.log(todos);
  }

  return (
    <>
      <form>
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          placeholder="Add your todo"
        />
        <button onClick={add}>Add Todo</button>
      </form>

      <Todos todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
