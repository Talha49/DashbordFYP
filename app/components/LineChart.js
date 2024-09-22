"use client"
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComp = ({selectedDate}) => {
  const [filteredData, setFilteredData] = useState([]);

 const allData  = [

      { date: "2022-01-01", sales: 4000, revenue: 2400, customers: 120, type: "Retail" },
      { date: "2022-01-01", sales: 3500, revenue: 6100, customers: 1290, type: "offline" },
      { date: "2022-01-01", sales: 3400, revenue: 8100, customers: 890, type: "Online" },
      { date: "2022-01-01", sales: 3700, revenue: 6100, customers: 670, type: "Online" },
      { date: "2022-01-01", sales: 5500, revenue: 9100, customers: 860, type: "Online" },
      { date: "2022-01-01", sales: 8500, revenue: 1100, customers: 760, type: "Online" },
      { date: "2022-01-01", sales: 2500, revenue: 3100, customers: 880, type: "Online" },
      { date: "2022-01-02", sales: 2500, revenue: 3100, customers: 880, type: "Online" },
  
     { date: "2022-01-01", sales: 3000, revenue: 1800, customers: 90, type: "Wholesale" },
      { date: "2022-06-15", sales: 3000, revenue: 1398, customers: 80, type: "Retail" },
      { date: "2022-06-15", sales: 2800, revenue: 1200, customers: 75, type: "Online" },
      { date: "2022-12-31", sales: 2000, revenue: 9800, customers: 150, type: "Retail" },
      { date: "2022-12-31", sales: 1800, revenue: 8500, customers: 130, type: "Online" },
      { date: "2023-03-10", sales: 2780, revenue: 3908, customers: 90, type: "Retail" },
      { date: "2023-03-10", sales: 2500, revenue: 3500, customers: 85, type: "Online" },
      { date: "2023-07-22", sales: 1890, revenue: 4800, customers: 110, type: "Retail" },
      { date: "2023-07-22", sales: 1700, revenue: 4200, customers: 100, type: "Online" },
      { date: "2023-11-05", sales: 2390, revenue: 3800, customers: 95, type: "Retail" },
      { date: "2023-11-05", sales: 2200, revenue: 3500, customers: 88, type: "Online" },
      { date: "2024-01-01", sales: 3490, revenue: 4300, customers: 130, type: "Retail" },
      { date: "2024-01-01", sales: 3290, revenue: 4000, customers: 120, type: "Online" },
      { date: "2024-01-01", sales: 3100, revenue: 3800, customers: 110, type: "Wholesale" },
      { date: "2024-02-14", sales: 3200, revenue: 2300, customers: 85, type: "Retail" },
      { date: "2024-02-14", sales: 3000, revenue: 2100, customers: 80, type: "Online" },
      { date: "2024-04-30", sales: 2800, revenue: 5100, customers: 140, type: "Retail" },
      { date: "2024-04-30", sales: 2600, revenue: 4800, customers: 130, type: "Online" },    
  
  ]
 useEffect(() => {
  filterDataByDate(selectedDate);
}, [selectedDate]);

const filterDataByDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  
  const filtered = allData.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate.getFullYear() === year && itemDate.getMonth() === month;
  });

  // If no data for the selected month, create default data points
  if (filtered.length === 0) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      filtered.push({
        date: `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`,
        sales: 0,
        revenue: 0,
        customers: 0,
        type: "No Data"
      });
    }
  }

  setFilteredData(filtered);
};

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        <Line type="monotone" dataKey="customers" stroke="#82ca9d" />

      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComp;