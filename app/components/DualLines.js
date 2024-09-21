import React from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', lorem: 4000, ipsum: 2400 },
  { name: 'Feb', lorem: 3000, ipsum: 1398 },
  { name: 'Mar', lorem: 2000, ipsum: 9800 },
  { name: 'Apr', lorem: 2780, ipsum: 3908 },
  { name: 'May', lorem: 1890, ipsum: 4800 },
  { name: 'Jun', lorem: 2390, ipsum: 3800 },
  { name: 'Jul', lorem: 3490, ipsum: 4300 },
];

const DualLines = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
    <LineChart data={data}>
      {/* Horizontal grid lines only */}
      <CartesianGrid strokeDasharray="3 3" vertical={false} /> 
      
      {/* Thicker lines and larger visible dots */}
      <Line
        type="monotone"
        dataKey="lorem"
        stroke="#8884d8"
        strokeWidth={3}
        dot={{ r: 6, strokeWidth: 2 }} // Custom dot size and stroke
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="ipsum"
        stroke="#82ca9d"
        strokeWidth={3}
        dot={{ r: 6, strokeWidth: 2 }} // Custom dot size and stroke
        activeDot={{ r: 8 }}
      />
      
      {/* Tooltip for interaction */}
      <Tooltip />
      
      {/* Custom legend */}
      <Legend />
    </LineChart>
  </ResponsiveContainer>
  );
};

export default DualLines;
