import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recruitment = () => {
  const [recruitments, setRecruitments] = useState([]);

  useEffect(() => {
    axios.get('https://campus-backend-qvke.onrender.com/api/recruitment')
      .then((response) => {
        setRecruitments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching placements:", error);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 dark:text-blue-300">Recruitment Process</h2>
      <p className="text-lg text-center mb-10 text-gray-700 dark:text-gray-200">
        Explore the latest company recruitment processes and register for opportunities below.
      </p>

      <div className="space-y-8">
        {recruitments.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2 flex items-center justify-between">
              <span>Company: {item.company}</span>
              <a
                href={item.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 underline font-medium ml-2"
              >
                Visit
              </a>
            </h3>
            <p className="mb-2 text-gray-900 dark:text-gray-100"><span className="font-semibold">Process:</span> {item.process}</p>
            <p className="mb-4 text-gray-900 dark:text-gray-100"><span className="font-semibold">Eligibility:</span> {item.eligibility}</p>
            <a
              href={item.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white font-bold py-2 px-6 rounded-lg shadow transition"
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;