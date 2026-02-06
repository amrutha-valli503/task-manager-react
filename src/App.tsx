import { useState } from 'react';
import { useTasks } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import { FilterType } from './types/task';
import { Task } from './types/task';

function App() {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTasks = tasks.filter((task:Task) =>
    filter === 'all' ? true : task.status === filter
  );

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                📝 Task Manager
              </h3>

              <TaskForm />
              <TaskFilters filter={filter} setFilter={setFilter} />
              <TaskList tasks={filteredTasks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
