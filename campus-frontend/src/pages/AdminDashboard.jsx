import React, { useState } from 'react';
import './pages.css';

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
      const res = await fetch("https://backend-5hpo.onrender.com/api/company", {
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
      const res = await fetch("https://backend-5hpo.onrender.com/api/placement", {
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
      const res = await fetch("https://backend-5hpo.onrender.com/api/admin", {
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
    <div className="admin-container">
      <h2>🛠️ Admin Dashboard</h2>
      <p>Add recruitment and placement details below.</p>

      {/* Add Company Recruitment */}
      <div className="form-section">
        <h3>📄 Add Company Recruitment</h3>
        <form onSubmit={submitCompanyData}>
          <input name="company" placeholder="Company Name" onChange={handleCompanyChange} required />
          <input name="process" placeholder="Process (e.g. Aptitude → Tech → HR)" onChange={handleCompanyChange} required />
          <input name="eligibility" placeholder="Eligibility Criteria" onChange={handleCompanyChange} required />
          <input name="companyLink" placeholder="Company Website" onChange={handleCompanyChange} required />
          <input name="registerLink" placeholder="Registration Form Link" onChange={handleCompanyChange} required />
          <button type="submit">Add Company</button>
        </form>
      </div>

      {/* Add Placement Record */}
      <div className="form-section">
        <h3>🎓 Add Placement Record</h3>
        <form onSubmit={submitPlacementData}>
          <input name="studentName" placeholder="Student Name" onChange={handlePlacementChange} required />
          <input name="department" placeholder="Department" onChange={handlePlacementChange} required />
          <input name="company" placeholder="Company" onChange={handlePlacementChange} required />
          <input name="packageAmount" placeholder="Package (LPA)" onChange={handlePlacementChange} required />
          <button type="submit">Add Placement</button>
        </form>
      </div>

      {/* Admin Credentials Update */}
      <div className="form-section">
        <h3>🔑 Change Admin Email & Password</h3>
        <form onSubmit={updateAdminCredentials}>
          <input name="email" placeholder="New Admin Email" onChange={handleAdminChange} required />
          <input name="password" placeholder="New Password" type="password" onChange={handleAdminChange} required />
          <button type="submit">Update Admin</button>
        </form>
      </div>

      {/* Import Database */}
      <div className="form-section">
        <h3>🗂️ Import from Database Link</h3>
        <button onClick={() => setShowGuidelines(!showGuidelines)}>
          {showGuidelines ? 'Hide Guidelines' : 'View Format Guidelines'}
        </button>
        {showGuidelines && (
          <div className="guidelines">
            <p><strong>Expected Format (CSV or JSON):</strong></p>
            <ul>
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
        />
        <button onClick={handleDbImport}>Import Data</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
