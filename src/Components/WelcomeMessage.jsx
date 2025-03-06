import { useContext } from "react";
import { TodoItemContext } from "../Context/context";

function WelcomeMessage() {
  const { todoItems } = useContext(TodoItemContext);
  return (
    todoItems.length === 0 && (
      <h1 className='mt-5 text-5xl font-bold'>Enjoy Your day.</h1>
    )
  );
}

export default WelcomeMessage;