import React from 'react';

function TaskItem({ task, onToggleCompletion, onDeleteTask }) {
  return (
    <li className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggleCompletion(task.id)}
      />
      <span>{task.text}</span>
      {onDeleteTask && (
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      )}
    </li>
  );
}

export default TaskItem;
