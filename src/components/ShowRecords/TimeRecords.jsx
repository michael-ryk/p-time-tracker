import React, {useState} from 'react';
import TimeRecordItem from './TimeRecordItem';
import RecordsFilter from './RecordsFilter';
import './TimeRecords.css';

function TimeRecord(props){

  const [filter, setFilter] = useState('All');

  function filterChangeHandler(selectedType) {
    setFilter(selectedType);
  }
  
  const filteredRecords = filter==="All" ? props.records : props.records.filter(item => item.mode===filter);

  return (
    <>
      <div className="timeRec">
        <RecordsFilter selected={filter} onFilterChange={filterChangeHandler}/>
        {filteredRecords.map((item) => {
          return <TimeRecordItem key={item.id} {...item} />;
        })}
      </div>
    </>
  )
}

export default TimeRecord;