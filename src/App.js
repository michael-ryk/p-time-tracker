import TimeRecords from './components/ShowRecords/TimeRecords'
import NewRecord from './components/NewItem/NewRecord'
import dummyRecords from './dummyRecords';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NewRecord />
      <TimeRecords records={dummyRecords}/>
    </div>
  );
}

export default App;
