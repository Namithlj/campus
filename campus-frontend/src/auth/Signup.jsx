import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    identityNumber: "",
    role: "USER",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await axios.post("https://campus-backend-qvke.onrender.com/api/auth/users/register", formData);
      setMessage("Registration successful!");
    } catch (err) {
      setMessage("Registration failed. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl px-8 pt-8 pb-10 w-full max-w-md flex flex-col items-center transition-colors duration-300">
        <h2 className="text-3xl font-extrabold mb-8 text-indigo-700 dark:text-indigo-300 text-center">
          Register Account
        </h2>

        {message && <p className="text-center text-sm text-red-500 dark:text-red-300 mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-5 w-4/5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-indigo-300 dark:border-indigo-700 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700 transition bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
            disabled={loading}
          />

          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className="border border-indigo-300 dark:border-indigo-700 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700 transition bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
            disabled={loading}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-indigo-300 dark:border-indigo-700 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700 transition bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
            disabled={loading}
          />

          <input
            type="text"
            name="identityNumber"
            placeholder="College ID / Roll Number"
            value={formData.identityNumber}
            onChange={handleChange}
            className="border border-indigo-300 dark:border-indigo-700 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700 transition bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            required
            disabled={loading}
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border border-indigo-300 dark:border-indigo-700 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-700 transition bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            disabled={loading}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-900 dark:to-indigo-700 hover:from-indigo-700 hover:to-indigo-500 dark:hover:from-indigo-800 dark:hover:to-indigo-900 text-white font-bold py-3 px-6 rounded-lg w-full shadow-md transition flex items-center justify-center"
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
              "Register"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;