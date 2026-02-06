import { createContext, useContext, useEffect, useReducer } from 'react';
import { taskReducer } from './taskReducer';
import { loadTasks, saveTasks } from '../utils/storage';

const TaskContext = createContext<any>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], loadTasks);

  useEffect(() => saveTasks(tasks), [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
