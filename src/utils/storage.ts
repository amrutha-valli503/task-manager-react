import { Task } from '../types/task';

const KEY = 'tasks';

export const loadTasks = (): Task[] =>
  JSON.parse(localStorage.getItem(KEY) || '[]');

export const saveTasks = (tasks: Task[]) =>
  localStorage.setItem(KEY, JSON.stringify(tasks));
