import React, { useState } from 'react';
import './RecordForm.css';

function RecordForm(props) {
  const [newRecord, setNewRecord] = useState({
    date: '2020-01-01',
    activity: '',
    hours: 0,
    mode: '',
  });

  function onChange({ target }) {
    const { name, value } = target;
    setNewRecord((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    props.onSubmitRecord(newRecord);
  }

  const [expandForm, setExpandForm] = useState(false)

  function onExpand() {
    setExpandForm(true);
  }

  function onCollapse() {
    setExpandForm(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='record-form__items'>
        {expandForm === false ? (
          <div className='record-form__action'>
              <button onClick={onExpand}>Expand</button>
          </div> 
        ) : ( 
          <>
            <div className='record-form__item'>
              <label>Date:</label>
              <input
                name='date'
                value={newRecord.date}
                type='date'
                onChange={onChange}
                min='2020-01-01'
              />
            </div>
            <div className='record-form__item'>
              <label>Activity:</label>
              <input
                name='activity'
                value={newRecord.activity}
                type='text'
                onChange={onChange}
              />
            </div>
            <div className='record-form__item'>
              <label>Hours:</label>
              <input
                name='hours'
                value={newRecord.hours}
                type='number'
                onChange={onChange}
                min='0'
                step='0.1'
              />
            </div>
            <div className='record-form__item'>
              <label>Mode:</label>
              <select name='mode' value={newRecord.mode} onChange={onChange}>
                <option value='Productive'>Productive</option>
                <option value='Wasted'>Wasted</option>
              </select>
            </div>
            <div className='record-form__action'>
              <button type='submit'>Add Record</button>
              <button onClick={onCollapse}>Cancel</button>
            </div> 
          </>
          )}
      </div>
    </form>
);
}

export default RecordForm;
