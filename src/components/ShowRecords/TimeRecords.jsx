import React from 'react';
import TimeRecordItem from './TimeRecordItem';

function TimeRecord(props){
  return (
    <>
      {props.records.map((item) => {
        return <TimeRecordItem key={item.id} {...item} />;
      })}
    </>
  )
}

export default TimeRecord;