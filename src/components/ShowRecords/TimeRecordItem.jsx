import TimeRecordDate from './TimeRecordDate';
import './TimeRecordItem.css';

function TimeRecordItem({ date, activity, mode, hours }) {
  return (
    <div className='timeRec-item'>
      <TimeRecordDate date={date}/>
      <div className='timeRec-item__category'>
        <h2>{activity}</h2>
      </div>
      <div className='timeRec-item__time'>
        <h3>{hours} hours</h3>
      </div>
      <div className='timeRec-item__prodwast'>
        <p>{mode}</p>
      </div>
    </div>
  );
}

export default TimeRecordItem;
