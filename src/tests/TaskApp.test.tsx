import { render, screen, fireEvent } from '@testing-library/react';
import { TaskProvider } from '../context/TaskContext';
import App from '../App';

test('adds and displays task', () => {
  render(
    <TaskProvider>
      <App />
    </TaskProvider>
  );

  fireEvent.change(screen.getByLabelText(/task title/i), {
    target: { value: 'Test Task' }
  });

  fireEvent.click(screen.getByText(/add/i));

  expect(screen.getByText('Test Task')).toBeInTheDocument();
});
