import React, {useState} from 'react';

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    const toggleMessage = () => {
      setIsOn(!isOn);
    };

    return (
      <div>
        <button onClick={toggleMessage}>{isOn ? 'Turn OFF':'Turn ON'}</button>
        <h2>{isOn ? 'ON':'OFF'}</h2>
      </div>
    );
}

export default Toggle;