import React, { useEffect, useState } from 'react';
import './pages.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const PlacementSection = () => {
  const [departments, setDepartments] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Dummy data – replace this with API fetch later
    const dummyDepartments = [
      { name: 'CSE', placed: 42, total: 50 },
      { name: 'ECE', placed: 30, total: 40 },
      { name: 'ME', placed: 15, total: 25 },
    ];

    const dummyStudents = [
      { name: 'Rahul', dept: 'CSE', company: 'TCS' },
      { name: 'Anjali', dept: 'CSE', company: 'Infosys' },
      { name: 'Ravi', dept: 'ECE', company: 'Wipro' },
      { name: 'Sneha', dept: 'ME', company: 'L&T' },
    ];

    setDepartments(dummyDepartments);
    setStudents(dummyStudents);
  }, []);

  const chartData = departments.map((dept) => ({
    name: dept.name,
    percentage: ((dept.placed / dept.total) * 100).toFixed(2),
  }));

  return (
    <div className="container">
      <h2>Department-wise Placement Data</h2>

      <div className="placement-chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis unit="%" />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentage" fill="#4caf50" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="placement-details">
        {departments.map((dept, idx) => (
          <div key={idx} className="dept-card">
            <h3>{dept.name} Department</h3>
            <p>
              {dept.placed} placed out of {dept.total} students (
              {((dept.placed / dept.total) * 100).toFixed(2)}%)
            </p>

            <table className="placement-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {students
                  .filter((student) => student.dept === dept.name)
                  .map((student, i) => (
                    <tr key={i}>
                      <td>{student.name}</td>
                      <td>{student.company}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementSection;
