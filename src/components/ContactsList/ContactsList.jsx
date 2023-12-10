import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/sliceContact';

export const ContactsList = ({ listContact }) => {
  const dispatch = useDispatch();

  return listContact.map(contacts => {
    const deleteContacts = id => {
      dispatch(remove(id));
    };
    return (
      <ul className={css.contacts}>
        <li key={contacts.id} className={css.list}>
          <p>{contacts.name}</p>
          <p>{contacts.number}</p>
          <button
            className={css.btn}
            type="button"
            onClick={() => {
              deleteContacts(contacts.id);
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    );
  });
};
