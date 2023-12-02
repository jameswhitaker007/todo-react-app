import Todo from "./Todo";
import Row from "react-bootstrap/esm/Row";
import Stack from "react-bootstrap/Stack";

function Todos({ todos, setTodos }) {
  return (
    <Stack gap={3}>
      {todos.map(function (todo) {
        var { name, key } = todo;
        // console.log(name);
        return <Todo key={key} name={name} index={key} setTodos={setTodos} />;
      })}
    </Stack>
  );
}

export default Todos;
