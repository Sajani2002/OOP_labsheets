import React, { useState } from 'react';

function ClickTracker() {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h2>Click Tracker</h2>
            <button onClick={handleClick}>Click Me</button>
            <p>Number of clicks: {clickCount}</p>
        </div>
    );
}

export default ClickTracker;
