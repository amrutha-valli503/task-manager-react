import { useState } from 'react';
import { Task } from '../types/task';
import { useTasks } from '../context/TaskContext';

const TaskItem = ({ task }: { task: Task }) => {
  const { dispatch } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.title);

  const saveEdit = () => {
    if (!text.trim()) return;
    dispatch({
      type: 'EDIT',
      payload: { id: task.id, title: text }
    });
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setText(task.title);
    setIsEditing(false);
  };

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      role="listitem"
    >
      <div className="flex-grow-1 me-2">
        {isEditing ? (
          <input
            className="form-control form-control-sm"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && saveEdit()}
            autoFocus
            aria-label="Edit task title"
          />
        ) : (
          <span
            style={{
              textDecoration:
                task.status === 'completed' ? 'line-through' : 'none'
            }}
          >
            {task.title}
          </span>
        )}
      </div>

      <span
        className={`badge me-2 ${
          task.status === 'completed'
            ? 'bg-success'
            : 'bg-warning text-dark'
        }`}
      >
        {task.status}
      </span>

      <div className="btn-group btn-group-sm">
        {isEditing ? (
          <>
            <button
              className="btn btn-outline-primary"
              onClick={saveEdit}
              aria-label="Save task"
            >
              Save
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={cancelEdit}
              aria-label="Cancel edit"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-secondary"
              onClick={() => setIsEditing(true)}
              aria-label="Edit task"
            >
              Edit
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() =>
                dispatch({ type: 'TOGGLE', payload: task.id })
              }
              aria-label="Toggle task status"
            >
              ✓
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                dispatch({ type: 'DELETE', payload: task.id })
              }
              aria-label="Delete task"
            >
              ✕
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
