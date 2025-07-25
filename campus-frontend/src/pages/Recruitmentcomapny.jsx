import React, { useEffect, useState } from 'react';
import './pages.css';
import axios from 'axios';

const Recruitment = () => {
  const [recruitments, setRecruitments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/recruitment')
      .then((response) => {
        setRecruitments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching placements:", error);
      });
  }, []);

  return (
    <div className="page-container">
      <h2>Recruitment Process</h2>
      <p>Below are the company recruitment processes and registration links.</p>

      {recruitments.map((item, index) => (
        <div key={index} className="company-card">
<h3>
  <strong>Company:</strong> {item.company}{' '}
  <a href={item.companyLink} target="_blank" rel="noopener noreferrer">
    (Visit)
  </a>
</h3>

  <p><strong>Process:</strong> {item.process}</p>
  <p><strong>Eligibility:</strong> {item.eligibility}</p>
  <a
    href={item.registerLink}
    target="_blank"
    rel="noopener noreferrer"
    className="register-button"
  >
    Register Now
  </a>
</div>

      ))}
    </div>
  );
};

export default Recruitment;
