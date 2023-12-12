import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { qwery } from '../../redux/sliceFilter';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(qwery(e.currentTarget.value));

  return (
    <>
      <label htmlFor="" className={css.label}>
        Find contacts by name
        <input
          value={filter}
          onChange={onChangeFilter}
          type="text"
          name="filter"
          placeholder="Find contacts by name"
        />
      </label>
    </>
  );
};
