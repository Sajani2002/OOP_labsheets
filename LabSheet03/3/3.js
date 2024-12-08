import React from 'react';
import TodoList from './TodoList';

function App() {
    const todos = ['learn react', 'build a project', 'do exercises'];

    return (
        <div>
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
