import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date: Date | Date[]) => {
    if (Array.isArray(date)) {
      // Handle multiple dates (e.g., date range) if needed
      console.log('Selected Date Range:', date);
    } else {
      // Handle single date selection
      console.log('Selected Date:', date);
    }

    setDate(date);
  };

  return (
    <div>
      <h1>Calendar App</h1>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          selectRange={false} // Set to true for selecting date ranges
        />
      </div>
    </div>
  );
}

export default MyCalendar;
