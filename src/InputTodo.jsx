const InputTodo = ({ addHandler, todoValue, setTodoValue }) => {
  return (
    <div className="flex justify-center gap-5  mb-7">
      <input
        value={todoValue}
        placeholder="Add todo..."
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        className=" border-solid border-2 border-black text-black w-3/5 h-10 p-6"
      />
      <button
        className="border-none px-8 bg-green-500 font-bold"
        onClick={() => {
          addHandler(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InputTodo;
