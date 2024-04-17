import FilterData from "./FilterData";
import data from '../Database/sampledata.json';

const FilteredDataHourly = (Data,startTime, frequency) => {
 startTime='2024-04-16T10:00:00';
    const Data = [data];
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
          default :
      }

      function filterDataByParam () {
      const filteredDataHourly = FilterData(data, startTime, 'hour');
      console.log('Hourly:', filteredDataHourly);
      const filteredDataDaily = FilterData(data, '2024-04-16T10:00:00', 'day');
      console.log('Daily:', filteredDataDaily);
      
      // Filter data from 2024-04-16T10:00:00 to 2024-04-23T10:00:00 (1 week interval)
      const filteredDataWeekly = FilterData(data, '2024-04-16T10:00:00', 'week');
      console.log('Weekly:', filteredDataWeekly);
      
      // Filter data from 2024-04-16T10:00:00 to 2024-05-16T10:00:00 (1 month interval)
      const filteredDataMonthly = FilterData(data, '2024-04-16T10:00:00', 'month');
      console.log('Monthly:', filteredDataMonthly);
      };

       return (
        <div>
            {filterDataByParam()}
        </div>
    );
    
    
};

export default FilteredDataHourly;