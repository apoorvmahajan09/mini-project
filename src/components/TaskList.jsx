import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleCompletion, onDeleteTask }) {
  return (
    <div className="task-list">
      <h2>Running</h2>
      <ul>
        {tasks.filter((task) => task.category === 'running').map((task) => (
          <TaskItem key={task.id} task={task} onToggleCompletion={onToggleCompletion} onDeleteTask={onDeleteTask} />
        ))}
      </ul>
      <h2>Completed</h2>
      <ul>
        {tasks.filter((task) => task.category === 'completed').map((task) => (
          <TaskItem key={task.id} task={task} onToggleCompletion={onToggleCompletion} onDeleteTask={onDeleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
