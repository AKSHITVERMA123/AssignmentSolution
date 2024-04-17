import Data from '../Database/sampledata.json';

const FilterData = (data,startTime, frequency) => {

    const startDate = new Date(startTime);
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
        default :
    }
      // Filter the data based on the time interval
    const FilteredData = Data.filter(item => {
    const itemTime = new Date(item.time);
    return itemTime >= startDate && itemTime < endDate;
  });
  console.log("Filtered Data = " +FilteredData.push(Data));


};
  
  export default FilterData;