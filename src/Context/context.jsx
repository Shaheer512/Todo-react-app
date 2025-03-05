// Context/TodoItemContextProvider.js
import { createContext, useReducer } from "react";

export const TodoItemContext = createContext();

const todoItemReducer = (state, action) => {
  switch (action.type) {
    case "NEW_ITEM":
      return [
        ...state,
        {
          name: action.payload.itemName,
          dueDate: action.payload.itemDueDate,
        },
      ];
    case "DELETE_ITEM":
      return state.filter((item) => item.name !== action.payload.todoItemsName);
    default:
      return state;
  }
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    dispatch({
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    });
  };

  const DeleteItem = (todoItemsName) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: { todoItemsName },
    });
  };

  return (
    <TodoItemContext.Provider value={{ todoItems, addNewItem, DeleteItem }}>
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
