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
    package: '',
  });

  const [showGuidelines, setShowGuidelines] = useState(false);
  const [dbLink, setDbLink] = useState('');

  const handleCompanyChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handlePlacementChange = (e) => {
    setPlacementData({ ...placementData, [e.target.name]: e.target.value });
  };

  const submitCompanyData = async (e) => {
    e.preventDefault();
    console.log('Company Data Submitted:', companyData);
    // Call backend API
    // await fetch('/api/company', { method: 'POST', body: JSON.stringify(companyData) });
  };

  const submitPlacementData = async (e) => {
    e.preventDefault();
    console.log('Placement Data Submitted:', placementData);
    // Call backend API
    // await fetch('/api/placement', { method: 'POST', body: JSON.stringify(placementData) });
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

      <div className="form-section">
        <h3>🎓 Add Placement Record</h3>
        <form onSubmit={submitPlacementData}>
          <input name="studentName" placeholder="Student Name" onChange={handlePlacementChange} required />
          <input name="department" placeholder="Department" onChange={handlePlacementChange} required />
          <input name="company" placeholder="Company" onChange={handlePlacementChange} required />
          <input name="package" placeholder="Package (LPA)" onChange={handlePlacementChange} required />
          <button type="submit">Add Placement</button>
        </form>
      </div>

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
