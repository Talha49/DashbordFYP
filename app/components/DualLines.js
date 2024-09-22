"use client"
import React, { useEffect, useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';

const DualLines = ({ selectedDate }) => {
  const [filteredData, setFilteredData] = useState([]);

  const data = [
    {date: "2022-01-01", name: 'Talha', gender: 'Male', quantity: 2400, Age: 21},
    {date: "2022-01-01", name: 'Usama', gender: 'Male', quantity: 1398, Age: 56},
    {date: "2023-03-03", name: 'Saleem Bhai', gender: 'Male', quantity: 9800, Age: 60},
    {date: "2024-04-08", name: 'Ahmad', gender: 'Male', quantity: 3908, Age: 24},
    {date: "2019-06-10", name: 'Samad', gender: 'Male', quantity: 4800, Age: 21},
    {date: "2024-02-20", name: 'Hamidi', gender: 'Female', quantity: 7800, Age: 89},
    {date: "2024-02-20", name: 'Natasha', gender: 'Female', quantity: 3800, Age: 69},
   
    {date: "2024-02-20", name: 'Gul', gender: 'Female', quantity: 1800, Age: 49},
    {date: "2024-02-20", name: 'Malala', gender: 'Female', quantity: 8800, Age: 29},
    {date: "2024-09-30", name: 'Aliya', gender: 'Female', quantity: 4300, Age: 78},
  ];
  
  const filterDataByDate = useMemo(() => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const dataForDate = data.filter(item => item.date === formattedDate);  // Use .filter() instead of .find()
  
    if (dataForDate.length > 0) {
      return dataForDate;
    } else {
      // If no data for the selected date, create a data point with zero values
      return [{
        date: formattedDate,
        name: 'No Data',
        gender: 'N/A',
        quantity: 0,
        Age: 0
      }];
    }
  }, [selectedDate, data]);
  


  useEffect(() => {
    setFilteredData(filterDataByDate);
  }, [filterDataByDate]);

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="Age" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="quantity"
          name="Quantity"
          stroke="#8884d8"
          strokeWidth={3}
          dot={{ r: 6, strokeWidth: 2 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Age"
          name="Age"
          stroke="#82ca9d"
          strokeWidth={3}
          dot={{ r: 6, strokeWidth: 2 }}
          activeDot={{ r: 8 }}
        />
          <Line
          type="monotone"
          dataKey="name"
          name="name"
          stroke="#82ca9d"
          strokeWidth={3}
          dot={{ r: 6, strokeWidth: 2 }}
          activeDot={{ r: 8 }}
        />
          <Line
          type="monotone"
          dataKey="gender"
          name="gender"
          stroke="#82ca9d"
          strokeWidth={3}
          dot={{ r: 6, strokeWidth: 2 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DualLines;