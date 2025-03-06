import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../Context/context";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemContext);
  return (
    <div className='flex justify-center mt-6'>
      <div className='flex flex-col md:flex-row w-full md:w-[40%] items-center p-4 bg-white shadow-md rounded-lg mb-4 mt-2'>
        <div className='flex-1 text-center md:text-left'>
          <div className='text-lg font-semibold text-gray-800'>{todoName}</div>
          <div className='text-sm text-gray-500'>{todoDate}</div>
        </div>
        <button
          type='button'
          onClick={() => {
            console.log("Deleting", todoName);
            deleteItem(todoName);
          }}
          className='bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition duration-200 ease-in-out mt-4 md:mt-0 flex items-center justify-center w-full md:w-auto'
        >
          <MdDelete className='text-xl' />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

