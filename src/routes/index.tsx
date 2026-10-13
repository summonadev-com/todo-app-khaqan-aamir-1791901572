import { createFileRoute } from '@tanstack/react-router';
import { useTodos } from '@/hooks/useTodos';
import { TodoInput } from '@/components/TodoInput';
import { TodoList } from '@/components/TodoList';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { todos, addTodo, deleteTodo, toggleComplete, isLoaded } = useTodos();

  if (!isLoaded) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Todo App
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <TodoInput onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleComplete} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
}
