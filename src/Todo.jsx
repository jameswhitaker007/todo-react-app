import { useState, useEffect, useRef } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function Todo({ name, index, setTodos }) {
  const [modifyOn, setModifyOn] = useState(false);
  const [text, setText] = useState(name);
  const refInput = useRef();

  useEffect(function () {
    //If the input field exist, give it focus
    if (refInput.current) refInput.current.focus();
  });

  function remove() {
    setTodos(function (todos) {
      todos = todos.filter(function (todo) {
        //const {key} = todo;
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
    <div className="p-2">
      <Row>
        <Col className="col-lg-8">
          {modifyOn ? (
            <input
              type="text"
              value={text}
              onChange={change}
              onBlur={blur}
              ref={refInput}
            />
          ) : (
            <span>{text}</span>
          )}
        </Col>
        <Col>
        <button onClick={modify}>Modify</button>
        </Col>
        <Col>
        <button onClick={remove}>Remove</button>
        </Col>
      </Row>
    </div>
  );
}

export default Todo;
