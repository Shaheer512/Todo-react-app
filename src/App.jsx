import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemContextProvider from "./Context/context"; 

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <div>
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </div>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
