import './RecordsFilter.css';

function RecordsFilter(props) {

  function onDropDownChange(event){
    // Lifting up event
    props.onFilterChange(event.target.value);
  }

  return (
    <div className='rec-filter'>
      <h2 className='rec-filter__heading'>Filter Productive/Wasted time:</h2>
      <select className='rec-filter__dropbox' value={props.filter} onChange={onDropDownChange}>
        <option value='All'>All</option>
        <option value='Productive'>Productive</option>
        <option value='Wasted'>Wasted</option>
      </select>
    </div>
  );
}

export default RecordsFilter;
