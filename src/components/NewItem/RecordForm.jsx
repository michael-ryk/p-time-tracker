import React, { useState } from 'react';
import './RecordForm.css';

function RecordForm() {
  const [newRecord, setNewRecord] = useState({
    date: '',
    activity: '',
    hours: 0,
    spent: '',
  });

  function onChange({ target }) {
    const { name, value } = target;
    setNewRecord((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(newRecord);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='record-form__items'>
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
          <label>Time spent:</label>
          <select name='spent' value={newRecord.spent} onChange={onChange}>
            <option value='Productive'>Productive</option>
            <option value='Wasted'>Wasted</option>
          </select>
        </div>
        <div className='record-form__action'>
          <button type='submit'>Add Record</button>
        </div>
      </div>
    </form>
  );
}

export default RecordForm;
