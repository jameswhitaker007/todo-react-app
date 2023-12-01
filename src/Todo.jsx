import { useState } from "react";

function Todo({ name, index, setTodos }) {
  const [modifyOn, setModifyOn] = useState(false);
  const [text, setText] = useState(name);

  function remove() {
    setTodos(function (todos) {
      todos = todos.filter(function (todo) {
        
        const {key} = todo;
        console.log(todo);
        //Removal of the item where index=todo.key
        if (index == todo.key) return false; //Remove
        else return true; //Keep
      });

      console.log(todos);

      return [...todos];
    });
  }

  function modify() {
    setModifyOn(!modifyOn);
  }

  function change(event) {
    //console.log(event.target.value);
    setText(event.target.value);
  }

  function blur(event) {
    //Remove the input field
    setModifyOn(false);

    //Modify the todo in the todos variable
    setTodos(function (todos) {
      todos = todos.map(function (todo) {
        //Modification of the item where index = todo.key
        if (index === todo.key) todo.name = event.target.value;
        return todo;
      });

      return [...todos];
    });
  }

  return (
    <li style={{ marginTop: "5px" }}>
      {modifyOn ? (
        <input type="text" value={text} onChange={change} onBlur={blur} />
      ) : (
        <span>{text}</span>
      )}
      &nbsp;
      <button onClick={modify}>Modify</button>
      &nbsp;
      <button onClick={remove}>Remove</button>
    </li>
  );
}

export default Todo;
