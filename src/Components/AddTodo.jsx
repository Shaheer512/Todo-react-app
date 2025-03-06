import { useRef, useContext } from "react";
import { FaRegSave } from "react-icons/fa";
import { TodoItemContext } from "../Context/context";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleClick = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    if (!todoName.trim() || !dueDate.trim()) {
      alert("Please fill in both the Todo and Due Date fields.");
      return;
    }

    addNewItem(todoName, dueDate);

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className='flex justify-center items-center mt-5'>
      <div className='flex flex-col md:flex-row gap-4 bg-white p-4 shadow-md rounded-lg w-full max-w-2xl'>
        <input
          type='text'
          ref={todoNameElement}
          placeholder='Enter Todo Here'
          className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full'
        />
        <input
          type='date'
          ref={dueDateElement}
          className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full'
        />
        <button
          onClick={handleClick}
          type="button"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out w-full md:w-auto"
        >
          <FaRegSave />
        </button>
      </div>
    </div>
  );
}

export default AddTodo;