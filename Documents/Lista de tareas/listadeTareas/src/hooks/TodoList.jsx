import React from 'react';
import "../App.css"
import TodoItem from './TodoItem';

const TodoList = ({ tasks }) => {
  return (
    <div className="tarjeta">
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
