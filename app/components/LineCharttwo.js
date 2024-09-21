import React, { useState, useMemo } from 'react';
import { LineChart, Line, Tooltip, ResponsiveContainer, Dot, XAxis, YAxis } from 'recharts';

const generateData = (timeframe) => {
  const data = [];
  const maxPoints = timeframe === 'Week' ? 7 : timeframe === 'Month' ? 30 : 12;
  for (let i = 1; i <= maxPoints; i++) {
    data.push({
      name: i.toString(),
      value: Math.floor(Math.random() * 5000) + 1000
    });
  }
  return data;
};

const CustomDot = ({ cx, cy, payload }) => {
  const colors = ['#ff6347', '#ffa500', '#1e90ff', '#32cd32', '#ff4500', '#00ced1', '#9370db'];
  return <Dot cx={cx} cy={cy} r={7} fill={colors[payload.name % colors.length]} />;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow text-xs">
        <p className="font-semibold">{`${payload[0].payload.name}`}</p>
        <p>{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const LineCharttwo = () => {
  const [timeframe, setTimeframe] = useState('Week');
  const data = useMemo(() => generateData(timeframe), [timeframe]);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Dynamic Line Chart</h2>
        <select 
          className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option value="Week">Week</option>
          <option value="Month">Month</option>
          <option value="Year">Year</option>
        </select>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#f5b041" 
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharttwo;