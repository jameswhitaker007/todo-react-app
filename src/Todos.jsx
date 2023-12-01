import Todo from "./Todo";

function Todos({ todos, setTodos }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {todos.map(function (todo) {
        var { name, key } = todo;
       // console.log(name);
        return <Todo key={key} name={name} index={key} setTodos={setTodos} />;
      })}
    </ul>
  );
}

export default Todos;
