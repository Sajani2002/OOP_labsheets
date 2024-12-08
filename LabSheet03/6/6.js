import React from 'react';
import UserProfile from './UserProfile';

function App() {
    const user = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    };

    return (
        <div>
            <UserProfile name={user.name} age={user.age} email={user.email} />
        </div>
    );
}

export default App;
