import { useState } from "react";

export default function App() {
  // Lista de Todos
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo() {
    // todos.push(text);
    setTodos([...todos, text]);
  }

  function removeTodo(indexToRemove) {
    // todos.splice(indexToRemove, 1);
    // setTodos([...todos]);

    const newTodos = todos.filter((todo, idx) => idx !== indexToRemove);
    setTodos(newTodos);
  }
  function onSubmit(event) {
    event.preventDefault();
    addTodo();
    setText("");
  }
  return (
    <main className="w-full min-h-screen justify-center">
      <form
        className="flex flex-row gap-2 justify-center p-5"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          className="p-2 rounded-md text-black w-full max-w-screen-sm"
          name=""
          id=""
          placeholder="Ingresa una tarea"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        />
        <button className="bg-white text-black px-3 rounded">+ Agregar</button>
      </form>
      <ul className="flex flex-col gap-1 max-w-screen-sm w-full pl-4">
        {todos.length === 0 && (
          <p className="text-white/50">No hay tareas pendientes 🤷‍♂️</p>
        )}
        {todos.map((todo, idx) => {
          return (
            <li
              key={`todo-${idx}`}
              className="flex flex-row justify-between bg-white/10 rounded p-4"
            >
              <span className="select-none">{todo}</span>
              <span
                className="text-[#ff0000] cursor-pointer hover:bg-white hover:rounded-full size-5 text-center items-center flex justify-center"
                onClick={() => removeTodo(idx)}
              >
                x
              </span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
