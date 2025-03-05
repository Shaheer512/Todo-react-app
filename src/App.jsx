import "./App.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemContext } from "./Context/context";
import { useReducer } from "react";

const todoItemReducer = (state, action) => {
  switch (action.type) {
    case "NEW_ITEM":
      return [
        ...state,
        { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
      ];
    case "DELETE_ITEM":
      return state.filter((item) => item.name !== action.payload.todoItemsName);
    default:
      return state;
  }
};

function App() {
  const [todoItems, dispatch] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    dispatch({ type: "NEW_ITEM", payload: { itemName, itemDueDate } });
  };

  const deleteItem = (todoItemsName) => {
    dispatch({ type: "DELETE_ITEM", payload: { todoItemsName } });
  };

  return (
    <TodoItemContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className='todo-container'>
        <div>
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </div>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
