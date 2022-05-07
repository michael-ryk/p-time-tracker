import TimeRecords from './components/ShowRecords/TimeRecords'
import dummyRecords from './dummyRecords';
import './App.css';

function App() {
  return (
    <div className='App'>
      <TimeRecords records={dummyRecords}/>
    </div>
  );
}

export default App;
