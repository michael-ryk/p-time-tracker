import TimeRecordItem from './TimeRecordItem';
import './TimeRecords.css';

function TimeRecord(props){
  return (
    <div className="timeRec">
      {props.records.map((item) => {
        return <TimeRecordItem key={item.id} {...item} />;
      })}
    </div>
  )
}

export default TimeRecord;