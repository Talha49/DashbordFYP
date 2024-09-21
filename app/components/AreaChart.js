import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, Legend, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', lorem: 4000, ipsum: 2400 },
  { name: 'Feb', lorem: 3000, ipsum: 1398 },
  { name: 'Mar', lorem: 2000, ipsum: 9800 },
  { name: 'Apr', lorem: 2780, ipsum: 3908 },
  { name: 'May', lorem: 1890, ipsum: 4800 },
  { name: 'Jun', lorem: 2390, ipsum: 3800 },
  { name: 'Jul', lorem: 3490, ipsum: 4300 },
];

const DualAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}>
        {/* Horizontal grid lines only */}
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        
        {/* X and Y axes */}
        <XAxis dataKey="name" />
        <YAxis />
        
        {/* Area chart with smooth curves */}
        <Area
          type="monotone"
          dataKey="lorem"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
        <Area
          type="monotone"
          dataKey="ipsum"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.3}
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
        
        {/* Tooltip for interaction */}
        <Tooltip />
        
        {/* Custom legend */}
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DualAreaChart;
