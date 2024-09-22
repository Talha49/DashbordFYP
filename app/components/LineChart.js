import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const LineChartComp = ({ selectedDate }) => {
  const [chartData, setChartData] = useState([]);
  const [dataAvailable, setDataAvailable] = useState(true);
  console.log("Selected Date", selectedDate)

  // Sample data for 2024 with daily data
  const allData = [
    { date: "2024-01-01", sales: 3490, revenue: 4300, customers: 130, type: "Retail" },
    { date: "2024-01-01", sales: 1420, revenue: 1200, customers: 50, type: "Retail" },
    { date: "2024-01-01", sales: 5490, revenue: 4300, customers: 130, type: "Retail" },
    { date: "2024-01-01", sales: 490, revenue: 430, customers: 30, type: "Retail" },
    { date: "2024-01-02", sales: 3200, revenue: 4100, customers: 120, type: "Retail" },
    { date: "2024-01-02", sales: 200, revenue: 8100, customers: 20, type: "Retail" },
    { date: "2024-01-03", sales: 3100, revenue: 4000, customers: 110, type: "Retail" },
    { date: "2024-01-04", sales: 2900, revenue: 3800, customers: 100, type: "Retail" },
    { date: "2024-01-05", sales: 3300, revenue: 4300, customers: 140, type: "Online" },
    { date: "2024-02-01", sales: 3200, revenue: 2300, customers: 85, type: "Retail" },
    { date: "2024-02-02", sales: 3000, revenue: 2100, customers: 80, type: "Online" },
    { date: "2024-02-03", sales: 2900, revenue: 2000, customers: 75, type: "Retail" },
    { date: "2024-02-04", sales: 3100, revenue: 2200, customers: 90, type: "Online" },
    { date: "2024-03-01", sales: 3200, revenue: 4100, customers: 130, type: "Retail" },
    { date: "2024-03-02", sales: 3000, revenue: 3800, customers: 120, type: "Online" },
    { date: "2024-03-03", sales: 3300, revenue: 4200, customers: 140, type: "Retail" },
    { date: "2024-04-01", sales: 3500, revenue: 4300, customers: 150, type: "Retail" },
    { date: "2024-04-02", sales: 3200, revenue: 4000, customers: 120, type: "Online" },
    { date: "2024-05-01", sales: 3300, revenue: 4500, customers: 135, type: "Retail" },
    { date: "2024-05-02", sales: 3400, revenue: 4700, customers: 145, type: "Online" },
    { date: "2024-06-01", sales: 3700, revenue: 5200, customers: 150, type: "Retail" },
    { date: "2024-06-02", sales: 3500, revenue: 4900, customers: 140, type: "Retail" },
    { date: "2024-07-01", sales: 3900, revenue: 5600, customers: 165, type: "Retail" },
    { date: "2024-07-02", sales: 3700, revenue: 5400, customers: 150, type: "Online" },
    { date: "2024-08-01", sales: 4100, revenue: 6000, customers: 170, type: "Retail" },
    { date: "2024-08-02", sales: 4200, revenue: 6100, customers: 180, type: "Online" },
    { date: "2024-09-01", sales: 4300, revenue: 6200, customers: 185, type: "Retail" },
    { date: "2024-09-02", sales: 4100, revenue: 5900, customers: 170, type: "Online" },
    { date: "2024-09-21", sales: 1300, revenue: 4200, customers: 125, type: "Retail" },
    { date: "2024-09-22", sales: 4100, revenue: 5900, customers: 160, type: "Online" },{ date: "2024-09-01", sales: 4300, revenue: 6200, customers: 185, type: "Retail" },
    { date: "2024-09-22", sales: 7100, revenue: 2900, customers: 160, type: "Online" },
    { date: "2024-10-01", sales: 4600, revenue: 6700, customers: 190, type: "Retail" },
    { date: "2024-10-02", sales: 4400, revenue: 6400, customers: 175, type: "Online" },
    { date: "2024-11-01", sales: 4700, revenue: 6800, customers: 200, type: "Retail" },
    { date: "2024-11-02", sales: 4500, revenue: 6500, customers: 190, type: "Online" },
    { date: "2024-12-01", sales: 4900, revenue: 7100, customers: 210, type: "Retail" },
    { date: "2024-12-02", sales: 4700, revenue: 6800, customers: 200, type: "Online" },
    // Add more days for each month or fill in missing dates as necessary
  ];

  useEffect(() => {
    const updateChartData = () => {
      // Format the selected date to UTC to prevent timezone shift issues
      const formattedSelectedDate = new Date(
        selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0];
      console.log("Formatted Date", formattedSelectedDate);
  
      // Filter data for the selected exact date
      const filteredData = allData.filter((item) => item.date === formattedSelectedDate);
  
      if (filteredData.length > 0) {
        setChartData(filteredData);
        setDataAvailable(true);
      } else {
        // If no data available for the selected date, set default empty data
        const emptyData = [
          {
            date: formattedSelectedDate,
            sales: 0,
            revenue: 0,
            customers: 0,
          },
        ];
        setChartData(emptyData);
        setDataAvailable(false);
      }
    };
  
    updateChartData();
  }, [selectedDate]);
  

  const formatXAxis = (tickItem) => {
    const date = new Date(tickItem);
    return `${date.getDate()}/${date.getMonth() + 1}`;
  };

  const formatTooltipLabel = (label) => {
    const date = new Date(label);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={formatXAxis}
            domain={["dataMin", "dataMax"]}
            type="category"
          />
          <YAxis />
          <Tooltip
            labelFormatter={formatTooltipLabel}
            formatter={(value, name) => [
              value,
              name.charAt(0).toUpperCase() + name.slice(1),
            ]}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="customers"
            stroke="#ffc658"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      {!dataAvailable && (
        <div style={{ textAlign: "center", marginTop: "10px", color: "#666" }}>
          No data available for{" "}
          {selectedDate.toLocaleString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          .
        </div>
      )}
    </div>
  );
};

export default LineChartComp;