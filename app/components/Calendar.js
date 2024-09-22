"use client"

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for easier customization

function CalendarComp({ onChange, value }) {

  return (
   
      <div className="">
        <Calendar 
          onChange={onChange} 
          value={value} 
          className="text-sm"
         
        />
      </div>
    
  );
}

export default CalendarComp;
