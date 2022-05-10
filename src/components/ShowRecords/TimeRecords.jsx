import React, {useState} from 'react';
import TimeRecordItem from './TimeRecordItem';
import RecordsFilter from './RecordsFilter';
import './TimeRecords.css';

function TimeRecord(props){

  const [filter, setFilter] = useState('Productive');

  function filterChangeHandler(selectedType) {
    setFilter(selectedType);
  }


  return (
    <>
      <div className="timeRec">
        <RecordsFilter selected={filter} onFilterChange={filterChangeHandler}/>
        {props.records.map((item) => {
          return <TimeRecordItem key={item.id} {...item} />;
        })}
      </div>
    </>
  )
}

export default TimeRecord;