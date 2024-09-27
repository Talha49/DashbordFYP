"use client"

import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaFileAlt, FaCheckCircle, FaExclamationTriangle, FaClock } from "react-icons/fa";
import CircularChartComp from '@/app/components/CircularChartComp';
import LineChartComp from '@/app/components/LineChart';
import DualLines from '@/app/components/DualLines';
import LineCharttwo from '@/app/components/LineCharttwo';
import BarChartComp from '@/app/components/BarChart';
import BarGraphtwo from '@/app/components/BarGraphtwo';
import ProgressChart from '@/app/components/ProgressGraph';
import DualAreaChart from '@/app/components/AreaChart';
import CalendarComp from '@/app/components/Calendar';

const Card = ({  icon: Icon, value, description, color, className, children }) => (
  <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}>
    <div className="p-6 flex flex-col h-full">
      {Icon && value ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-full ${color}`}>
              <Icon size={24} color="white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
          </div>
          <p className="text-xs text-gray-500 mt-auto">{description}</p>
        </>
      ) : (
        <>
       
          {children}
        </>
      )}
    </div>
  </div>
);

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    console.log("Date changed:", date);
    setSelectedDate(date);
  };


  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">Dashboard</div>
        <div className="bg-white rounded-full shadow-md p-2 w-64">
          <div className="flex items-center">
            <input type="text" placeholder="Search" className="w-full bg-transparent outline-none text-sm" />
            <IoSearchOutline className="text-gray-500 ml-2" size={16} />
          </div>
        </div>
        
      </div>

      <div className="flex flex-col space-y-4">
        {/* Quantity Cards */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          <Card 
            title="Total RFIs"
            icon={FaFileAlt}
            value="45"
            description="Open requests for information"
            color="bg-blue-500"
            className='hover:scale-105'
          />
          <Card 
            title="Completed RFIs"
            icon={FaCheckCircle}
            value="32"
            description="Resolved and closed requests"
            color="bg-green-500"
            className='hover:scale-105'
          />
          <Card 
            title="Pending RFIs"
            icon={FaExclamationTriangle}
            value="8"
            description="Awaiting response or action"
            color="bg-yellow-500"
            className='hover:scale-105'
          />
          <Card 
            title="Average Response Time"
            icon={FaClock}
            value="2.5 days"
            description="Time to resolve requests"
            color="bg-purple-500"
            className='hover:scale-105'
          />
        </div>

        {/* First row */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
          <Card  className="h-[300px]">
            <LineChartComp selectedDate={selectedDate} />
          </Card>
          <Card className=" h-[300px] overflow-y-auto" title='Calendar'>
          <div className="flex-grow flex items-center justify-center ">
            <CalendarComp value={selectedDate} onChange={handleDateChange} />
          </div>
        </Card>
          <Card title="Dual Lines" className="h-[300px]">
            <DualLines selectedDate={selectedDate} />
          </Card>
        </div>

        {/* Second row */}
        <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
          <Card  className="h-[520px]">
            <LineCharttwo selectedDate={selectedDate} />
          </Card>
          
          <div className='flex flex-col gap-4'>
            <Card title="Circular Chart Comp" >
              <CircularChartComp />
            </Card>
            <Card title="Dual Lines" >
              <DualAreaChart />
            </Card>
          </div>
        </div>

        {/* Third row */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <Card title="BarChartComp" className="h-full">
            <BarChartComp />
          </Card>
          <Card title="BarGraphtwo" className="h-full">
            <BarGraphtwo />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;