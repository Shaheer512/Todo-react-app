import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoItemContext } from '../Context/context';

const TodoItems = () => {

    const { todoItems } = useContext(TodoItemContext)
  return (
    <div className="items-container p-4">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;
