// import logo from './logo.svg';
import './App.css';
import FilterData from './components/FilterData';
import GetLocationTemperature from './components/GetLocationTemperature';
import SampleComponent from './components/SampleComponent';

function App() {
  return (
    <div className="App">
     <SampleComponent/>
     <FilterData/>
     <GetLocationTemperature/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
