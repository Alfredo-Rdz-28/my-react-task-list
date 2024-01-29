import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoEdit from './TodoEditForm';
import "../App.css"

const TodoList = ({ tasks: initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({ name: '', fecha: '', description: '', estado: false });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.name.trim() !== '') {
      setTasks([newTask, ...tasks]);
      setNewTask({ name: '', fecha: '', description: '', estado: false });
    }
  };

  const handleDeleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
  };

  const handleEditTask = (task) => {
    setEditingIndex(tasks.indexOf(task));
    setNewTask(task);
  };

  const handleSaveEdit = (editedTask) => {
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = editedTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
      setNewTask({ name: '', fecha: '', description: '', estado: false });
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setNewTask({ name: '', fecha: '', description: '', estado: false });
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (editingIndex !== null) {
        handleSaveEdit();
      } else {
        handleAddTask();
      }
    }
  };

  const handleToggleState = (task) => {
    // Cambia el estado directamente
    const updatedTasks = [...tasks];
    const index = updatedTasks.indexOf(task);
    updatedTasks[index].estado = !updatedTasks[index].estado;
    setTasks(updatedTasks);
  };
  

  return (
    <>
      {editingIndex === null && (
        <div className='newTaks'>
          <input
            type="text"
            className='Name'
            placeholder="Name Task"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            onKeyDown={handleTitleKeyDown}
          />
        </div>
      )}
      <div className="tarjeta">
        <ul>
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              onDelete={() => handleDeleteTask(task)}
              onEdit={() => handleEditTask(task)}
              onToggleState={() => handleToggleState(task)}
            />
          ))}
        </ul>
      </div>
      <div className='editCard'>
        {editingIndex !== null && (
          <TodoEdit
            task={tasks[editingIndex]}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        )}
      </div>
    </>
  );
};

export default TodoList;