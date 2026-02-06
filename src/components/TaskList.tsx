import TaskItem from './TaskItem';
import { Task } from '../types/task';

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  if (!tasks.length) {
    return <p className="text-center text-muted">No tasks yet 🎉</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
