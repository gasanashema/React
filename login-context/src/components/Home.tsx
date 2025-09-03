import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Home = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("Home must be used within a UserProvider");

  const { user } = context;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p className="text-gray-700">Welcome, {user.email || 'Guest'}!</p>
      <p className="text-gray-500">Your password is: {user.password ? '******' : 'Not set'}</p>
    </div>
  );
};

export default Home;
