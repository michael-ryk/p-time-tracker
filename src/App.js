import TimeRecords from './components/ShowRecords/TimeRecords'
import NewRecord from './components/NewItem/NewRecord'
import dummyRecords from './dummyRecords';
import './App.css';

function App() {

  const data = [...dummyRecords]

  return (
    <div className='App'>
      <NewRecord records={data}/>
      <TimeRecords records={data}/>
    </div>
  );
}

export default App;
