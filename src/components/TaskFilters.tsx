import { FilterType } from '../types/task';

interface Props {
  filter: FilterType;
  setFilter: (f: FilterType) => void;
}

const TaskFilters = ({ filter, setFilter }: Props) => {
  const filters: FilterType[] = ['all', 'pending', 'completed'];

  return (
    <div
      className="btn-group w-100 mb-3"
      role="group"
      aria-label="Task Filters"
    >
      {filters.map(f => (
        <button
          key={f}
          className={`btn btn-outline-secondary ${
            filter === f ? 'active' : ''
          }`}
          onClick={() => setFilter(f)}
          aria-pressed={filter === f}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
