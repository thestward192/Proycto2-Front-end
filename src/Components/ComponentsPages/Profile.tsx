// Profile.js
import React from 'react';
import { useAuth } from './AuthContext';

const Profile: React.FC = () => {
  const { token, user, logout } = useAuth(); // Include user here

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-semibold">User Profile</h1>
      <p>Your token: {token}</p>
      {user && <p>Welcome, {user.email}!</p>} {/* Display user info */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
