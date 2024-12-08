import React from 'react';

function UserProfile({ name, age, email }) {
    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
}

export default UserProfile;
