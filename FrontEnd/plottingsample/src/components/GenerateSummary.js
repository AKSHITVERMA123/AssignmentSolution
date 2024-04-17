import sampleData from '../Database/sampledata.json';
const GenerateSummary = (data) => {
  let onesCount=0,zerosCount=0,continuousOnes=0,continuousZeros=0,maxContinuousOnes=0,maxContinuousZeros=0;
    const d= [{
     onesCount,
     zerosCount,
     continuousOnes,
     continuousZeros,
     maxContinuousOnes,
     maxContinuousZeros,
    }];

  
    for (let i = 0; i < data.length; i++) {
      if (data[i].vibration >= 1) {
        d.onesCount++;
        d.continuousOnes++;
        d.continuousZeros = 0;
        d.maxContinuousOnes = Math.max(d.maxContinuousOnes, d.continuousOnes);
      } else if (data[i].vibration < 0) {
        d.zerosCount++;
        d.continuousZeros++;
        d.continuousOnes = 0;
        d.maxContinuousZeros = Math.max(d.maxContinuousZeros, d.continuousZeros);
      }
    }
  
    return {
      "Number of 1s": d.onesCount,
      "Number of 0s": d.zerosCount,
      "Continuous 1s" : d.continuousOnes,
      "Continuous 0s" : d.continuousZeros,
      "Max Continuous 1s": d.maxContinuousOnes,
      "Max Continuous 0s": d.maxContinuousZeros
    };
  };
  
  // Generate summary
  const summary = GenerateSummary(sampleData);
  
  // Output summary
  console.table(summary);
  
export default GenerateSummary;