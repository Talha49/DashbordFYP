"use client"

import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import CircularChartComp from '@/app/components/CircularChartComp';
import LineChartComp from '@/app/components/LineChart';
import DualLines from '@/app/components/DualLines';
import LineCharttwo from '@/app/components/LineCharttwo';
import BarChartComp from '@/app/components/BarChart';
import BarGraphtwo from '@/app/components/BarGraphtwo';
import ProgressChart from '@/app/components/ProgressGraph';
import DualAreaChart from '@/app/components/AreaChart';
import CalendarComp from '@/app/components/Calendar';


const Card = ({ title, children, className }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {title && <h2 className="text-sm font-semibold p-2 bg-gray-50 text-gray-700">{title}</h2>}
    <div className="p-3 h-full">{children}</div>
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
        {/* First row */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="w-full  h-full">
            <Card title="LineChartComp" className="h-full">
              <LineChartComp  selectedDate={selectedDate}/>
            </Card>
          </div>
          <div >
            <CalendarComp value={selectedDate} onChange={handleDateChange}/>
          </div>
          <div className="w-full   h-full">
            <Card title="Dual Lines" className="h-full">
              <DualLines />
            </Card>
          </div>
          
        </div>

        {/* Second row */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          <div className="w-full  h-full">
            <Card title="LineCharttwo" className="h-full">
              <LineCharttwo />
            </Card>
          </div>
          <div className="w-full  h-full">
            <Card title="Progress Chart" className="h-full">
              <ProgressChart />
            </Card>
          </div>
          <div className='flex  flex-col gap-4'>
          <div className="w-full  h-full">
            <Card title="Circular Chart Comp" className="h-full">
              <CircularChartComp />
            </Card>
          </div>
          <div className="w-full   h-full">
            <Card title="Dual Lines" className="h-full">
              <DualAreaChart />
            </Card>
          </div>
        </div>
        </div>

        {/* Third row */}
        <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
       
          <div className="w-full  h-full">
            <Card title="BarChartComp" className="h-full">
              <BarChartComp />
            </Card>
          </div>
          <div className="w-full  h-full">
            <Card title="BarGraphtwo" className="h-full">
              <BarGraphtwo />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



// "use client"
// import CircularChartComp from '@/app/components/CircularChartComp';
// import LineChartComp from '@/app/components/LineChart';
// import DualLines from '@/app/components/DualLines';
// import LineCharttwo from '@/app/components/LineCharttwo';
// import React from 'react';
// import { IoSearchOutline } from "react-icons/io5";
// import BarChartComp from '@/app/components/BarChart';
// import BarGraphtwo from '@/app/components/BarGraphtwo';
// import ProgressChart from '@/app/components/ProgressGraph';

// const Card = ({ title, children, className }) => (
//   <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
//     {title && <h2 className="text-sm font-semibold mb-2 text-gray-500">{title}</h2>}
//     {children}
//   </div>
// );

// const Calendar = () => (
//   <div>
//     <div className="flex justify-between items-center mb-2">
//       <span className="text-green-500">January</span>
//       <span className="text-gray-400">&lt; &gt;</span>
//     </div>
//     <div className="grid grid-cols-7 gap-1 text-xs">
//       {["S", "M", "T", "W", "T", "F", "S"].map(day => (
//         <div key={day} className="text-center font-medium text-gray-400">{day}</div>
//       ))}
//       {Array.from({ length: 31 }, (_, i) => (
//         <div key={i} className={`text-center p-1 ${i + 1 === 14 ? 'bg-green-500 text-white rounded-full' : ''}`}>
//           {i + 1}
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const Dashboard = () => {
//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      
//       <Card title="Line Chart 1" className="col-span-1 " >
//          <LineChartComp/>
//         </Card>
//         <Card title="Line Chart 2" className="col-span-1">

//            <LineCharttwo/>
//         </Card>
//         <Card className="col-span-1">
//           <Calendar />
//         </Card>
//         <div className="col-span-1 flex flex-col">
//           <div className="mb-2">
//             <div className="flex items-center bg-white rounded-full px-4 py-2 w-full shadow-md">
//               <input type="text" placeholder="Search..." className="flex-grow outline-none" />
//               <IoSearchOutline className="text-gray-400" size={20} />
//             </div>
//           </div>
//           <Card className="flex-grow">
//            <CircularChartComp/>
//           </Card>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="col-span-1 space-y-4">
//           <Card>
//             <div className="flex justify-between">
             

//               <div>
//                 <h3 className="text-2xl font-bold">1205</h3>
//                 <p className="text-gray-400">Total Sales</p>
//                 <div >
//                      <LineChartComp/>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">804</h3>
//                 <p className="text-gray-400">Total Sales</p>
//                 <div >
//                      <LineChartComp/>
//                 </div>
//               </div>
//             </div>
//           </Card>
//           <Card className='col-span-1'>
        
//           <BarGraphtwo/>
//           </Card>
//         </div>
//         <Card title="Progress" className="col-span-1">
//         <ProgressChart />
//         </Card>
//         <Card title="Dolor sit amet" className="col-span-1 sm:col-span-2 lg:col-span-2">
//         <DualLines/>
//         </Card>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
      
//         <Card title="Consectetur" className="col-span-1">
//           <div className="h-64 bg-gray-200 rounded"></div>
//         </Card>
//         <Card title="Dolor sit amet" className="col-span-1 sm:col-span-2 lg:col-span-2">
//           <BarChartComp/>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React from 'react';
// import { IoSearchOutline } from "react-icons/io5";
// import CircularChartComp from '@/app/components/CircularChartComp';
// import LineChartComp from '@/app/components/LineChart';
// import DualLines from '@/app/components/DualLines';
// import LineCharttwo from '@/app/components/LineCharttwo';
// import BarChartComp from '@/app/components/BarChart';
// import BarGraphtwo from '@/app/components/BarGraphtwo';
// import ProgressChart from '@/app/components/ProgressGraph';

// const Card = ({ title, children, className }) => (
//   <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
//     {title && <h2 className="text-lg font-semibold p-4 bg-gray-50 text-gray-700 border-b">{title}</h2>}
//     <div className="p-4">{children}</div>
//   </div>
// );

// const Calendar = () => (
//   <div className="bg-white rounded-lg shadow-lg p-4">
//     <div className="flex justify-between items-center mb-4">
//       <span className="text-lg font-semibold text-green-600">January</span>
//       <div className="space-x-2">
//         <button className="text-gray-600 hover:text-gray-800">&lt;</button>
//         <button className="text-gray-600 hover:text-gray-800">&gt;</button>
//       </div>
//     </div>
//     <div className="grid grid-cols-7 gap-2 text-sm">
//       {["S", "M", "T", "W", "T", "F", "S"].map(day => (
//         <div key={day} className="text-center font-medium text-gray-500">{day}</div>
//       ))}
//       {Array.from({ length: 31 }, (_, i) => (
//         <div key={i} className={`text-center p-2 rounded-full ${i + 1 === 14 ? 'bg-green-500 text-white' : 'hover:bg-gray-100'}`}>
//           {i + 1}
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const Dashboard = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
//         <p className="text-gray-600">Welcome to your analytics overview</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
//         <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <Card title="Revenue Overview">
//             <LineChartComp />
//           </Card>
//           <Card title="User Growth">
//             <LineCharttwo />
//           </Card>
//           <Card title="Sales Distribution" className="sm:col-span-2">
//             <BarChartComp />
//           </Card>
//         </div>
//         <div className="space-y-6">
//           <div className="bg-white rounded-lg shadow-lg p-4">
//             <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
//               <input type="text" placeholder="Search..." className="bg-transparent flex-grow outline-none" />
//               <IoSearchOutline className="text-gray-500" size={20} />
//             </div>
//           </div>
//           <Card title="Performance">
//             <CircularChartComp />
//           </Card>
//           <Calendar />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//         <Card title="Monthly Stats" className="lg:col-span-2">
//           <DualLines />
//         </Card>
//         <Card title="Progress Overview">
//           <ProgressChart />
//         </Card>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card title="Revenue Breakdown">
//           <BarGraphtwo />
//         </Card>
//         <Card title="Key Metrics">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="text-center">
//               <h3 className="text-2xl font-bold text-blue-600">1,205</h3>
//               <p className="text-gray-600">Total Sales</p>
//               <div className="mt-2">
//                 <LineChartComp />
//               </div>
//             </div>
//             <div className="text-center">
//               <h3 className="text-2xl font-bold text-green-600">804</h3>
//               <p className="text-gray-600">New Customers</p>
//               <div className="mt-2">
//                 <LineChartComp />
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;