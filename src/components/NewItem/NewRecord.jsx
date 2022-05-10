import RecordForm from './RecordForm'
import './NewRecord.css';

function NewRecord(props) {

  function addToRecordList (newRecord) {
    const convertedDate = newRecord.date.valueAsDate;
    const newRecordWithId = {id: new Date().getTime().toString(), date: convertedDate , ...newRecord};
    props.onSubmit(newRecordWithId)
  }

  return (
    <div className='new-record'>
      <RecordForm onSubmitRecord={addToRecordList}/>
    </div>
  );
}

export default NewRecord;
