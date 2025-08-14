import { useEffect, useState } from 'react';
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
  const [departments, setDepartments] = useState([]);

  const COLORS = [
    '#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F',
    '#FFBB28', '#A28EFF', '#FF6B6B', '#29B6F6',
  ];

  useEffect(() => {
    axios.get('https://campus-backend-wg4b.onrender.com/api/placements')
      .then((res) => {
        const fetched = res.data;

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
          total: 78,
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
    <div className="max-w-6xl mx-auto py-12 px-4 bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-300">Department-wise Placement Data</h2>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mb-12 transition-colors duration-300">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis unit="%" />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentage" name="Placement %">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-10">
        {departments.map((dept, idx) => (
          <div key={idx} className="bg-blue-50 dark:bg-blue-950 rounded-xl shadow-md p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">{dept.name} Department</h3>
            <p className="mb-4 text-lg text-gray-900 dark:text-gray-100">
              <span className="font-semibold">{dept.placed}</span> placed out of <span className="font-semibold">{dept.total}</span> students (
              <span className="font-semibold">{((dept.placed / dept.total) * 100).toFixed(2)}%</span>)
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow transition-colors duration-300">
                <thead>
                  <tr className="bg-blue-100 dark:bg-blue-900">
                    <th className="py-2 px-4 text-left font-semibold text-blue-700 dark:text-blue-300">Name</th>
                    <th className="py-2 px-4 text-left font-semibold text-blue-700 dark:text-blue-300">Company</th>
                    <th className="py-2 px-4 text-left font-semibold text-blue-700 dark:text-blue-300">Package</th>
                  </tr>
                </thead>
                <tbody>
                  {dept.students.map((student, i) => (
                    <tr key={i} className="border-b last:border-none border-gray-200 dark:border-gray-700">
                      <td className="py-2 px-4 text-gray-900 dark:text-gray-100">{student.studentName}</td>
                      <td className="py-2 px-4 text-gray-900 dark:text-gray-100">{student.company}</td>
                      <td className="py-2 px-4 text-gray-900 dark:text-gray-100">{student.packageAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementSection;