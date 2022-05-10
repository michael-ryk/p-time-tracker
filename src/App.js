import React, {useState} from 'react';
import TimeRecords from './components/ShowRecords/TimeRecords'
import NewRecord from './components/NewItem/NewRecord'
import DUMMY_RECORDS from './dummyRecords';
import './App.css';

function App() {

  const [recordList, setRecordList] = useState(DUMMY_RECORDS);
  
  function appendToRecordList(newRecord) {
    setRecordList((prev) => {
      return [...prev, newRecord];
    });
  }

  return (
    <div className='App'>
      <NewRecord records={recordList} onSubmit={appendToRecordList}/>
      <TimeRecords records={recordList}/>
    </div>
  );
}

export default App;
