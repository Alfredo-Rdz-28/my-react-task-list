import React from 'react';
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ task, onDelete, onEdit, onToggleState }) => {
  const taskStyle = {
    textDecoration: task.estado ? 'line-through' : 'none',
    color: task.estado ? 'gray' : 'black',
  };

  return (
    <li>
      <div className="task-container" onClick={onEdit} style={{ cursor: 'pointer' }}>
        <input
          type="checkbox"
          className="round-checkbox"
          checked={task.estado}
          onChange={() => onToggleState(task)}
        />
        <span style={taskStyle}>{task.name}</span>
        <button onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;