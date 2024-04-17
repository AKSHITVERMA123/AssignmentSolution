import React from 'react';
import samples from '../Database/sampledata.json';
class SampleComponent extends React.Component {
  render() {
    const getColor = (sample) => {
      if (sample.vibration < 0 ) {
        return 'yellow';
      } else if (sample.vibration>=1) {
        return 'green';
      } else {
        console.log(sample);
        return 'red';
      }
    };

    return (
      <div style={{marginTop : "180px"}}>
        {samples.map((sample, index) => (
          <div
            key={index}
            style={{
              width: 0.1,
              height: 22,
              backgroundColor: getColor(sample),
              display: 'inline-block',
              margin: 0.15,
              paddingTop : "4px"
            }}><br></br><hr color='black' style={{marginBottom : '0.1em', marginTop : "0em"}}></hr>
          </div>
        ))
        } 
      </div>
    );
  }
}

export default SampleComponent;