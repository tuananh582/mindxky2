import { useState } from "react";
import Footer from "./components/Footer";
import Input from "./components/input/input";
import TaskList from "./components/TaskList/TaskList";
import { get, save } from "./repositories/TodoRepository";

function App() {
  const [todos, setTodos] = useState(get());
  const [title, setTitle] = useState("");
  const onSubmit = (title) => {
    let newTodos = [
      {
        title: title,
        status: false,
      },
      ...(todos ?? []),
    ];
    setTodos(newTodos);
    save(newTodos);
    setTitle("");
  };

  const onChangeTitle = (value) => {
    setTitle(value);
  };

  const onCompleteTask = ({ title, status }) => {
    let newTodos = todos.map((todo) => {
      if (todo.title === title) {
        todo.status = status;
      }
      return todo;
    });
    setTodos(newTodos);
  };



  const onDeleteTask = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
    save(todos);
  };


  return (
    <div className="flex h-[100vh] justify-center items-center">
      <div className="mx-auto w-2/4 bg-white  p-6">
        <div className="w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(title);
            }}
          >
            <Input onChangeInput={onChangeTitle} value={title} />
          </form>
        </div>
        <TaskList
          todos={todos}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
        <Footer countTodo={todos?.length} />
      </div>
    </div>
  );
}

export default App;
