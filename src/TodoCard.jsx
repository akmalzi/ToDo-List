const TodoCard = ({ index, value, deleteHandler, editHandler }) => {
  return (
    <>
      <ul
        className="w-3/5 bg-gray-600 border-double border-white border-2 text-white my-3 mr-5
            "
      >
        <li key={index} className="my-4 pl-4">
          {value}
        </li>
      </ul>
      <button
        className=" px-4 my-3"
        onClick={() => {
          editHandler(index);
        }}
      >
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button
        className="px-4 my-3"
        onClick={() => {
          deleteHandler(index);
        }}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </>
  );
};

export default TodoCard;
