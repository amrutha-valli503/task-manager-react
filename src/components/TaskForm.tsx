import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
  const { dispatch } = useTasks();
  const [title, setTitle] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({
      type: 'ADD',
      payload: { id: crypto.randomUUID(), title, status: 'pending' }
    });

    setTitle('');
  };

  return (
    <form onSubmit={submit} className="d-flex gap-2 mb-3" aria-label="Add Task">
      <input
        className="form-control"
        aria-label="Task Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter a new task"
      />
      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default TaskForm;
