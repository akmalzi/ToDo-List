import React, { useState } from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, deleteHandler, editHandler }) => {
  return (
    <>
      {todos.map((value, index) => {
        return (
          <div className="flex justify-center">
            <TodoCard
              key={index}
              value={value}
              index={index}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
