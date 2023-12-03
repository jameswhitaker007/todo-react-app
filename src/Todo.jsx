import { useState, useEffect, useRef } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";

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

  function modify(e) {
    e.stopPropagation();
    e.preventDefault();
    setModifyOn(true);
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
        <Col xs="auto" lg="8">
          {modifyOn ? (
            <Form.Group>
              <Form.Control
                type="text"
                value={text}
                onChange={change}
                onBlur={blur}
                ref={refInput}
              />
            </Form.Group>
          ) : (
            <span className="col-lg-9">{text}</span>
          )}
        </Col>
        <Col className="d-flex justify-content-end">
          {modifyOn ? (
            <Button variant="success" onClick={(e) => {
              console.log(modifyOn);
              e.preventDefault();
              e.stopPropagation();
              setModifyOn(false);
            console.log(modifyOn)}}>Save</Button>
          ) : (
            <Button variant="outline-secondary" onClick={(e) => {
             console.log(modifyOn)
              e.preventDefault();
              e.stopPropagation();
              setModifyOn(true)
              console.log(modifyOn)}}>
              Edit
            </Button>
          )}

          <Button variant="outline-danger ms-2" onClick={remove}>
            Delete
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Todo;
