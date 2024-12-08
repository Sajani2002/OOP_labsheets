import React, { useState } from 'react';
import ConditionalMessage from './ConditionalMessage';
import './App.css';

function App() {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false); // Initial state set to false

    return (
        <div>
            <ConditionalMessage isLoggedIn={userIsLoggedIn} />
            <button onClick={() => setUserIsLoggedIn(!userIsLoggedIn)}>
                {userIsLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
    );
}

export default App;
