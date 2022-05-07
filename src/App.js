import React from 'react';
import TimeRecord from './components/TimeRecord';
import dummyRecords from './dummyRecords';
import './App.css';

console.log(dummyRecords[0])

function App() {
  return (
    <div className="App">
      {dummyRecords.map((item) => {
        return (
          <TimeRecord key={item.id} {...item}/>
        );
      })}
      
    </div>
  );
}

export default App;
