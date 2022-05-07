import './TimeRecordDate.css';

function TimeRecordDate({date}) {
  const month = date.toLocaleString('en-US', {month: 'long'});
  const day = date.toLocaleString('en-US', {day: '2-digit'});
  const year = date.getFullYear();
  
  return (
    <div className='record-date'>
      <div className='record-date__year'>{year}</div>
      <div className='record-date__month'>{month}</div>
      <div className='record-date__day'>{day}</div>
    </div>
  );
}

export default TimeRecordDate;