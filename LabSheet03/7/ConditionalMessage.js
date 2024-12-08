import React from 'react';

function ConditionalMessage({ isLoggedIn }) {
    return (
        <div className="conditional-message">
            {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
        </div>
    );
}

export default ConditionalMessage;
