import RecordForm from './RecordForm'
import './NewRecord.css';

function NewRecord(props) {

  function addToRecordList (newRecord) {
    const newRecordWithId = {id: new Date().getTime().toString(), ...newRecord}
    console.log(newRecordWithId)
    props.records.push(newRecordWithId)
    console.log(props.records)
  }

  return (
    <div className='new-record'>
      <RecordForm onSubmitRecord={addToRecordList}/>
    </div>
  );
}

export default NewRecord;
