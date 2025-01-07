import React from 'react';
import BakeryProducts from './BakeryProducts'; // Import BakeryProducts component
import './App.css'; // Import CSS for styling

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Latest Bakery Products</h1>
            </header>
            <main>
                <BakeryProducts />
            </main>
        </div>
    );
}

export default App;
