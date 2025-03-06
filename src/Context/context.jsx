// Context/TodoItemContextProvider.js
import React, { createContext, useReducer } from "react";

export const TodoItemContext = createContext();

// Reducer function
const todoItemReducer = (state, action) => {
  console.log("Reducer Action:", action);

  switch (action.type) {
    case "NEW_ITEM":
      return [...state, { name: action.payload.itemName, dueDate: action.payload.itemDueDate }];
    
    case "DELETE_ITEM":
      console.log("Deleting item:", action.payload.todoName);
      return state.filter((item) => item.name !== action.payload.todoName); 
    
    default:
      return state;
  }
};

 export const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    dispatch({ type: "NEW_ITEM", payload: { itemName, itemDueDate } });
  };

  const deleteItem = (todoName) => { // Fix: Use correct function name
    console.log("Dispatching DELETE_ITEM for:", todoName);
    dispatch({ type: "DELETE_ITEM", payload: { todoName } });
  };

  return (
    <TodoItemContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
