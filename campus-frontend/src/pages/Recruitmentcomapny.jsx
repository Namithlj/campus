import React, { useEffect, useState } from 'react';
import './pages.css';

const Recruitment = () => {
  const [recruitments, setRecruitments] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        company: 'Infosys',
        process: 'Online Test → Technical Interview → HR Round',
        eligibility: '6.5 CGPA and above',
        companyLink: 'https://www.infosys.com/careers/',
        registerLink: 'https://forms.gle/example-infosys-form',
      },
      {
        company: 'TCS',
        process: 'Aptitude Test → Technical + Managerial Interview',
        eligibility: '60% in 10th, 12th, and UG',
        companyLink: 'https://www.tcs.com/careers',
        registerLink: 'https://forms.gle/example-tcs-form',
      },
      {
        company: 'Amazon',
        process: 'Coding Test → 2 Tech Rounds → Bar Raiser',
        eligibility: '7.5 CGPA and above',
        companyLink: 'https://www.amazon.jobs/',
        registerLink: 'https://forms.gle/example-amazon-form',
      },
    ];
    setRecruitments(dummyData);
  }, []);

  return (
    <div className="page-container">
      <h2>Recruitment Process</h2>
      <p>Below are the company recruitment processes and registration links.</p>

      {recruitments.map((item, index) => (
        <div key={index} className="company-card">
          <h3>
            {item.company}{' '}
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
