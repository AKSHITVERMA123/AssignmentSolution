// import React from "react";

const FilterData = (data, startTime, frequency) => {
    const startDate = new Date(startTime); // Convert the start time to a Date object
  
    // Calculate the end time based on the frequency
    const endDate = new Date(startDate);
    switch (frequency) {
      case 'hour':
        endDate.setHours(endDate.getHours() + 1);
        break;
      case 'day':
        endDate.setDate(endDate.getDate() + 1);
        break;
      case 'week':
        endDate.setDate(endDate.getDate() + 7);
        break;
      case 'month':
        endDate.setMonth(endDate.getMonth() + 1);
        break;
      default:
        throw new Error('Invalid frequency');
    }
  
    // Filter the data based on the time interval
    const filteredData = data.filter(item => {
      const itemTime = new Date(item.time); // Assuming each data item has a 'time' property
      return itemTime >= startDate && itemTime < endDate;
    });
  
    return filteredData;
  };
  
  // Example usage
  const data = [
    { id: 1, time: '2024-04-16T10:00:00' },
    { id: 2, time: '2024-04-16T11:00:00' },
    { id: 3, time: '2024-04-16T12:00:00' },
    { id: 4, time: '2024-04-17T10:00:00' },
    { id: 5, time: '2024-04-18T10:00:00' },
    // More data items...
  ];
  
  // Filter data from 2024-04-16T10:00:00 to 2024-04-16T11:00:00 (1 hour interval)
  const filteredDataHourly = FilterData(data, '2024-04-16T10:00:00', 'hour');
  console.log('Hourly:', filteredDataHourly);
  
  // Filter data from 2024-04-16T10:00:00 to 2024-04-17T10:00:00 (1 day interval)
  const filteredDataDaily = FilterData(data, '2024-04-16T10:00:00', 'day');
  console.log('Daily:', filteredDataDaily);
  
  // Filter data from 2024-04-16T10:00:00 to 2024-04-23T10:00:00 (1 week interval)
  const filteredDataWeekly = FilterData(data, '2024-04-16T10:00:00', 'week');
  console.log('Weekly:', filteredDataWeekly);
  
  // Filter data from 2024-04-16T10:00:00 to 2024-05-16T10:00:00 (1 month interval)
  const filteredDataMonthly = FilterData(data, '2024-04-16T10:00:00', 'month');
  console.log('Monthly:', filteredDataMonthly);
  
  export default FilterData;