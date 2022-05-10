import './RecordsFilter.css';

function RecordsFilter(props) {


  return (
    <div className='rec-filter'>
      <h2 className='rec-filter__heading'>Filter Productive/Wasted time:</h2>
      <select className='rec-filter__dropbox' value={props.filter} onChange={props.onFilterChange}>
        <option value='Productive'>Productive</option>
        <option value='Wasted'>Wasted</option>
      </select>
    </div>
  );
}

export default RecordsFilter;
