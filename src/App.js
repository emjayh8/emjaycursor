import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="App">
      <div className="todo-container">
        <header className="todo-header">
          <h1>Todo App</h1>
          <p>Stay organized and productive</p>
        </header>

        <form onSubmit={addTodo} className="todo-form">
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What needs to be done?"
              className="todo-input"
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </div>
        </form>

        {todos.length > 0 && (
          <div className="todo-filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({todos.length})
            </button>
            <button
              className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active ({activeTodosCount})
            </button>
            <button
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed ({completedTodosCount})
            </button>
          </div>
        )}

        <div className="todo-list">
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              {filter === 'all' ? (
                <>
                  <div className="empty-icon">📝</div>
                  <p>No todos yet. Add your first task above!</p>
                </>
              ) : (
                <>
                  <div className="empty-icon">✅</div>
                  <p>No {filter} todos found.</p>
                </>
              )}
            </div>
          ) : (
            filteredTodos.map(todo => (
              <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <button
                  className="todo-checkbox"
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.completed ? '✓' : ''}
                </button>
                <div className="todo-content">
                  <span className="todo-text">{todo.text}</span>
                  <span className="todo-date">
                    {new Date(todo.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <button
                  className="delete-button"
                  onClick={() => deleteTodo(todo.id)}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {completedTodosCount > 0 && (
          <div className="todo-actions">
            <button onClick={clearCompleted} className="clear-button">
              Clear completed ({completedTodosCount})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
