"use client"

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for easier customization

function CalendarComp({ onChange, value }) {

  return (
    <div className="w-full h-full p-6 flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md">
        <Calendar 
          onChange={onChange} 
          value={value} 
          className="text-sm"
         
        />
      </div>
    </div>
  );
}

export default CalendarComp;
