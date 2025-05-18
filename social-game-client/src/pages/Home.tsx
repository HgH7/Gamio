import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Home: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Social Game
        </h1>
        <p className="text-xl text-gray-600">
          A gamified social media platform where your interactions earn you XP and rewards!
        </p>
      </div>

      {isAuthenticated ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome back, {user?.username}!</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-medium text-indigo-700">Your Level</h3>
              <p className="text-2xl font-bold">{user?.level}</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-medium text-indigo-700">Total XP</h3>
              <p className="text-2xl font-bold">{user?.xp}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-gray-600 mb-4">
            Join our community and start earning XP through social interactions!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/register"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
            >
              Sign Up
            </a>
            <a
              href="/login"
              className="bg-white text-indigo-600 border border-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 