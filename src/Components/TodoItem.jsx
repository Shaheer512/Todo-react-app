import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../Context/context";

function TodoItem({ todoName, todoDate }) {
  const { DeleteItem } = useContext(TodoItemContext);
  return (
    <div className='flex flex-col items-center justify-center mt-6'>
      <div className='flex flex-col w-[40%] md:flex-row  md:w-[40%] justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4 mt-2'>
        <div className='flex-1'>
          <div className='text-lg font-semibold text-gray-800'>{todoName}</div>
          <div className='text-sm text-gray-500'>{todoDate}</div>
        </div>
        <button
          type='button'
          onClick={() => DeleteItem(todoName)}
          className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out mt-2 md:mt-0 w-full md:w-auto '
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
