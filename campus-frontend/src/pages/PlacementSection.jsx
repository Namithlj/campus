import React, { useEffect, useState } from 'react';
import './pages.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from 'recharts';
import axios from 'axios';

const PlacementSection = () => {
  const [data, setData] = useState([]);
  const [departments, setDepartments] = useState([]);

  // 🎨 Array of colors (add more if you have more departments)
  const COLORS = [
    '#8884d8', // Purple
    '#82ca9d', // Green
    '#ffc658', // Yellow
    '#ff8042', // Orange
    '#00C49F', // Teal
    '#FFBB28', // Amber
    '#A28EFF', // Light Purple
    '#FF6B6B', // Red
    '#29B6F6', // Blue
  ];

  useEffect(() => {
    axios.get('http://localhost:8080/api/placements')
      .then((res) => {
        const fetched = res.data;
        setData(fetched);

        const grouped = fetched.reduce((acc, curr) => {
          if (!acc[curr.department]) {
            acc[curr.department] = [];
          }
          acc[curr.department].push(curr);
          return acc;
        }, {});

        const departmentsArray = Object.keys(grouped).map((dept) => ({
          name: dept,
          placed: grouped[dept].length,
          total: 78, // You can make this dynamic
          students: grouped[dept],
        }));

        setDepartments(departmentsArray);
      })
      .catch((err) => {
        console.error('Failed to fetch placement data:', err);
      });
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
            <Bar dataKey="percentage" name="Placement %" >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
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
                  <th>Package</th>
                </tr>
              </thead>
              <tbody>
                {dept.students.map((student, i) => (
                  <tr key={i}>
                    <td>{student.studentName}</td>
                    <td>{student.company}</td>
                    <td>{student.packageAmount}</td>
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
