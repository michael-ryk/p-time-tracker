import './TimeRecordDate.css';

function TimeRecordDate({date}) {
  let splitDate = date.split(/\D/);
  const year = splitDate[0];
  const month = splitDate[1];
  const day = splitDate[2];
  
  return (
    <div className='record-date'>
      <div className='record-date__year'>{year}</div>
      <div className='record-date__month'>{month}</div>
      <div className='record-date__day'>{day}</div>
    </div>
  );
}

export default TimeRecordDate;
