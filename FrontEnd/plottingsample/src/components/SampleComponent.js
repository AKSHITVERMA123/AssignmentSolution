import React from 'react';

class SampleComponent extends React.Component {
  render() {
    const samples = [0, 1, null, 0, 1, null]; // Example sample data
    const getColor = (sample) => {
      if (sample === 0) {
        return 'yellow';
      } else if (sample === 1) {
        return 'green';
      } else {
        return 'red';
      }
    };

    return (
      <div>
        {samples.map((sample, index) => (
          <div
            key={index}
            style={{
              width: 50,
              height: 50,
              backgroundColor: getColor(sample),
              display: 'inline-block',
              margin: 5,
            }}
          />
        ))}
      </div>
    );
  }
}

export default SampleComponent;