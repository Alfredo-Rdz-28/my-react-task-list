import React, { useState, useEffect } from 'react';
import "../TodoEditForm.css";

const TodoEdit = ({ task, onSave, onCancel }) => {
  const [editedTask, setEditedTask] = useState({
    name: '',
    fecha: '',
    description: '',
    estado: false,
  });

  useEffect(() => {
    setEditedTask({
      name: task.name || '',
      fecha: task.fecha || '',
      description: task.description || '',
      estado: task.estado || false,
    });
  }, [task]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: newValue,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(editedTask);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSave}>
        <label htmlFor="name">Task:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Task"
          value={editedTask.name}
          onChange={handleChange}
        />

        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={editedTask.fecha}
          onChange={handleChange}
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={editedTask.description}
          onChange={handleChange}
          cols="30"
          rows="10"
        ></textarea>

        <label htmlFor="estado">Estado:</label>
        <input
          type="checkbox"
          id="estado"
          name="estado"
          checked={editedTask.estado}
          onChange={handleChange}
        />

        <button className='saveUpdate' type="submit">Guardar Actualización</button>
        <button className='cancelUpdate' type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default TodoEdit;