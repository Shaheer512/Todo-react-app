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

<<<<<<< HEAD
export default WelcomeMessage;
=======
export default WelcomeMessage;
>>>>>>> 6119716585e69a901ceb74e2244d49f84ef622b4
