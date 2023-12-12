import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/sliceContact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

export const ContactsList = () => {
  const filtered = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filtered.toLowerCase())
  );

  const deleteContacts = id => {
    dispatch(remove(id));
  };

  return (
    <ul className={css.contacts}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.list}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={css.btn}
            type="button"
            onClick={() => deleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
