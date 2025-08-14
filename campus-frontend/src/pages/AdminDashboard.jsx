import React, { useState } from 'react';

const AdminDashboard = () => {
  const [companyData, setCompanyData] = useState({
    company: '',
    process: '',
    eligibility: '',
    companyLink: '',
    registerLink: '',
  });

  const [placementData, setPlacementData] = useState({
    studentName: '',
    department: '',
    company: '',
    packageAmount: '',
  });

  const [adminCredentials, setAdminCredentials] = useState({
    email: '',
    password: '',
  });

  const [showGuidelines, setShowGuidelines] = useState(false);
  const [dbLink, setDbLink] = useState('');

  const handleCompanyChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handlePlacementChange = (e) => {
    setPlacementData({ ...placementData, [e.target.name]: e.target.value });
  };

  const handleAdminChange = (e) => {
    setAdminCredentials({ ...adminCredentials, [e.target.name]: e.target.value });
  };

  const submitCompanyData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://campus-backend-wg4b.onrender.com/api/company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(companyData),
      });
      if (res.ok) {
        alert("Company added!");
        setCompanyData({ company: '', process: '', eligibility: '', companyLink: '', registerLink: '' });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const submitPlacementData = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://campus-backend-wg4b.onrender.com/api/placement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(placementData),
      });
      if (res.ok) {
        alert("Placement added!");
        setPlacementData({ studentName: '', department: '', company: '', packageAmount: '' });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateAdminCredentials = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://campus-backend-wg4b.onrender.com/api/admin", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminCredentials),
      });
      if (res.ok) {
        alert("Admin credentials updated!");
        setAdminCredentials({ email: '', password: '' });
      } else {
        alert("Failed to update admin credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDbImport = () => {
    if (!dbLink) return;
    console.log('Importing from:', dbLink);
    // Example: fetch from Google Sheet or backend storage
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 bg-white dark:bg-gray-900 rounded-2xl shadow-xl transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-4 text-blue-700 dark:text-blue-300">🛠️ Admin Dashboard</h2>
      <p className="text-center mb-8 text-gray-700 dark:text-gray-300">Add recruitment and placement details below.</p>

      {/* Add Company Recruitment */}
      <div className="bg-blue-50 dark:bg-blue-950 rounded-xl shadow p-6 mb-8 transition-colors duration-300">
        <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">📄 Add Company Recruitment</h3>
        <form onSubmit={submitCompanyData} className="space-y-4">
          <input name="company" placeholder="Company Name" onChange={handleCompanyChange} value={companyData.company} required className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700" />
          <input name="process" placeholder="Process (e.g. Aptitude → Tech → HR)" onChange={handleCompanyChange} value={companyData.process} required className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700" />
          <input name="eligibility" placeholder="Eligibility Criteria" onChange={handleCompanyChange} value={companyData.eligibility} required className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700" />
          <input name="companyLink" placeholder="Company Website" onChange={handleCompanyChange} value={companyData.companyLink} required className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700" />
          <input name="registerLink" placeholder="Registration Form Link" onChange={handleCompanyChange} value={companyData.registerLink} required className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700" />
          <button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-lg w-full shadow-md transition">Add Company</button>
        </form>
      </div>

      {/* Add Placement Record */}
      <div className="bg-indigo-50 dark:bg-indigo-950 rounded-xl shadow p-6 mb-8 transition-colors duration-300">
        <h3 className="text-xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">🎓 Add Placement Record</h3>
        <form onSubmit={submitPlacementData} className="space-y-4">
          <input name="studentName" placeholder="Student Name" onChange={handlePlacementChange} value={placementData.studentName} required className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700" />
          <input name="department" placeholder="Department" onChange={handlePlacementChange} value={placementData.department} required className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700" />
          <input name="company" placeholder="Company" onChange={handlePlacementChange} value={placementData.company} required className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700" />
          <input name="packageAmount" placeholder="Package (LPA)" onChange={handlePlacementChange} value={placementData.packageAmount} required className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700" />
          <button type="submit" className="bg-gradient-to-r from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 text-white font-bold py-2 px-6 rounded-lg w-full shadow-md transition">Add Placement</button>
        </form>
      </div>

      {/* Admin Credentials Update */}
      <div className="bg-pink-50 dark:bg-pink-950 rounded-xl shadow p-6 mb-8 transition-colors duration-300">
        <h3 className="text-xl font-bold mb-4 text-pink-700 dark:text-pink-200">🔑 Change Admin Email & Password</h3>
        <form onSubmit={updateAdminCredentials} className="space-y-4">
          <input name="email" placeholder="New Admin Email" onChange={handleAdminChange} value={adminCredentials.email} required className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700" />
          <input name="password" placeholder="New Password" type="password" onChange={handleAdminChange} value={adminCredentials.password} required className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700" />
          <button type="submit" className="bg-gradient-to-r from-pink-600 to-pink-400 hover:from-pink-700 hover:to-pink-500 text-white font-bold py-2 px-6 rounded-lg w-full shadow-md transition">Update Admin</button>
        </form>
      </div>

      {/* Import Database */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow p-6 mb-8 transition-colors duration-300">
        <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-200">🗂️ Import from Database Link</h3>
        <button
          onClick={() => setShowGuidelines(!showGuidelines)}
          className="mb-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded transition"
        >
          {showGuidelines ? 'Hide Guidelines' : 'View Format Guidelines'}
        </button>
        {showGuidelines && (
          <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4">
            <p className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Expected Format (CSV or JSON):</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
              <li>For Company Data: company, process, eligibility, companyLink, registerLink</li>
              <li>For Placement Data: studentName, department, company, package</li>
              <li>Ensure the headers are correct, and data is clean.</li>
            </ul>
          </div>
        )}
        <input
          type="text"
          placeholder="Enter Google Sheets or JSON API link"
          value={dbLink}
          onChange={(e) => setDbLink(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
        />
        <button
          onClick={handleDbImport}
          className="bg-gradient-to-r from-gray-600 to-gray-400 hover:from-gray-700 hover:to-gray-500 text-white font-bold py-2 px-6 rounded-lg w-full shadow-md transition"
        >
          Import Data
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;