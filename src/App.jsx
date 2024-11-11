import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
import { stringify } from "postcss";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function addHandler(inputTodo) {
    const newTodo = [...todos, inputTodo];
    persistData(newTodo);
    setTodos(newTodo);
  }

  function deleteHandler(index) {
    const newTodo = todos.filter((todo, todoIndex) => {
      return index !== todoIndex;
    });
    persistData(newTodo);
    setTodos(newTodo);
  }

  function editHandler(index) {
    const EditTodoValue = todos[index];
    setTodoValue(EditTodoValue);
    deleteHandler(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos"); //get item = ngambil data dari local storage

    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <div className="w-full min-h-[1000px] bg-emerald-100 p-9">
        <InputTodo
          addHandler={addHandler}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
        />
        <TodoList
          todos={todos}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </div>
    </>
  );
}

export default App;
