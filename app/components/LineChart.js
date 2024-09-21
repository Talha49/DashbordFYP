import React from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const LineChartComp = () => {
  const data = [
    {
      name: 'FieldNotes 1',
      quantity: 4000,
    },
    {
      name: 'FieldNotes 2',
      quantity: 3000,
    },
    {
      name: 'FieldNotes 3',
      quantity: 2000,
    },
    {
      name: 'FieldNotes 4',
      quantity: 2780,
    },
    {
      name: 'FieldNotes 5',
      quantity: 1890,
    },
    {
      name: 'FieldNotes 6',
      quantity: 2390,
    },
    {
      name: 'FieldNotes 7',
      quantity: 3490,
    },
  ];



  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
      <Line 
          type="monotone" 
          dataKey="quantity" 
          stroke="#8884d8" 
          strokeWidth={2} 
          dot={{ r: 5 }}  // Customize dots
          activeDot={{ r: 8 }} // Custom hover dot size
        />
          <Line 
          type="monotone" 
          dataKey="name" 
          stroke="#82ca9d" 
          strokeWidth={2} 
          strokeDasharray="5 5" // Dashed line
        />
        <Tooltip />
        <Legend/>
      </LineChart>
      
    </ResponsiveContainer>
  );
};

export default LineChartComp;
