import React from "react";

const GenerateSummary = (data) => {
    let onesCount = 0;
    let zerosCount = 0;
    let continuousOnes = 0;
    let continuousZeros = 0;
    let maxContinuousOnes = 0;
    let maxContinuousZeros = 0;
  
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 1) {
        onesCount++;
        continuousOnes++;
        continuousZeros = 0;
        maxContinuousOnes = Math.max(maxContinuousOnes, continuousOnes);
      } else if (data[i] === 0) {
        zerosCount++;
        continuousZeros++;
        continuousOnes = 0;
        maxContinuousZeros = Math.max(maxContinuousZeros, continuousZeros);
      }
    }
  
    return {
      "Number of 1s": onesCount,
      "Number of 0s": zerosCount,
      "Max Continuous 1s": maxContinuousOnes,
      "Max Continuous 0s": maxContinuousZeros
    };
  };
  
  // Example data
  const sampleData = [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0];
  
  // Generate summary
  const summary = generateSummary(sampleData);
  
  // Output summary
  console.table(summary);
  
export default GenerateSummary;