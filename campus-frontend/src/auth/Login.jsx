import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://campus-backend-wg4b.onrender.com/api/auth/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        alert('Login failed');
        setLoading(false);
        return;
      }

      const { token } = await res.json();
      login(token);

      const decoded = JSON.parse(atob(token.split('.')[1]));
      if (decoded.role === 'ADMIN') navigate('/admin');
      else navigate('/placements');
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl px-8 pt-8 pb-10 w-full max-w-md flex flex-col items-center transition-colors duration-300"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-blue-700 dark:text-blue-300 text-center">Login</h2>
        <input
          className="border border-blue-300 dark:border-blue-700 rounded-lg w-4/5 py-3 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 transition bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <input
          className="border border-blue-300 dark:border-blue-700 rounded-lg w-4/5 py-3 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 transition bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700 hover:from-blue-700 hover:to-blue-500 dark:hover:from-blue-800 dark:hover:to-blue-900 text-white font-bold py-3 px-6 rounded-lg w-4/5 shadow-md transition flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              Processing...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;