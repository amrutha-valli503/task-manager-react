export type TaskStatus = 'pending' | 'completed';
export type FilterType = 'all' | 'pending' | 'completed';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}
