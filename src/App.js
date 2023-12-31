import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todos from "./Todos";
import { useEffect } from "react";
import NavbarComponent from "./navbar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
    if (name == "" || null) {
      return;
    }
    setKey(key + 1); // Obtaining the next key associated with the todo item
    todos.push({ name, key });
    setTodos([...todos]);
    //console.log(todos);
  }

  return (
    <>
      <NavbarComponent />
      <Container>
        <Row className="mb-5 mt-5 col-lg-8 ms-auto me-auto">
          <Form className="mt-3">
            
              <InputGroup>
                <Form.Control
                  type="text"
                  name="todoInput"
                  id="todoInput"
                  placeholder="Add your todo"
                />
                <Button variant="primary" type="submit" onClick={add}>
                  Add Todo
                </Button>
              </InputGroup>
            
          </Form>
        </Row>
        <Row>
          <Col lg="8" className="ms-auto me-auto">
            <Todos todos={todos} setTodos={setTodos} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
