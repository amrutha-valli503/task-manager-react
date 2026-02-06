import { Task } from '../types/task';

export type Action =
  | { type: 'ADD'; payload: Task }
  | { type: 'TOGGLE'; payload: string }
  | { type: 'DELETE'; payload: string }
  | { type: 'EDIT'; payload: { id: string; title: string } };

export const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'TOGGLE':
      return state.map(t =>
        t.id === action.payload
          ? { ...t, status: t.status === 'pending' ? 'completed' : 'pending' }
          : t
      );
    case 'EDIT':
      return state.map(t =>
        t.id === action.payload.id ? { ...t, title: action.payload.title } : t
      );
    case 'DELETE':
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
};
