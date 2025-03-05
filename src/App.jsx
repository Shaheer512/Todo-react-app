
import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemContext } from "./Context/context";

function App() {
  return (
    <TodoItemContext.Provider>
      <center className="todo-container">
        <div>
          <AppName />
          <AddTodo />
          <WelcomeMessage></WelcomeMessage>
          <TodoItems />
        </div>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
