import React from 'react';
import './pages.css';

const dummyRecruitments = [
  {
    company: 'Infosys',
    process: 'Online Aptitude Test → Technical Interview → HR Interview',
    highestPackage: '12 LPA',
  },
  {
    company: 'TCS',
    process: 'Written Test → Managerial Round → HR Round',
    highestPackage: '9 LPA',
  },
  {
    company: 'Amazon',
    process: 'Coding Test → 2 Technical Rounds → Bar Raiser Round',
    highestPackage: '25 LPA',
  },
];

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Campus Placement Monitoring System</h1>
      <p>Track placements, department-wise data, and recruitment updates.</p>

      <h2>Recruitment Process Overview</h2>
      {dummyRecruitments.map((item, index) => (
        <div key={index} className="recruitment-card">
          <h3>{item.company}</h3>
          <p><strong>Process:</strong> {item.process}</p>
          <p><strong>Highest Package:</strong> {item.highestPackage}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
